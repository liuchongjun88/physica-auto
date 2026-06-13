const fs = require('fs');
let h = fs.readFileSync('index.html', 'utf8');

// Simple approach: find each lang block's footer_social line and insert after it
const inserts = [
  {
    lang: 'zh',
    after: 'footer_social:"YouTube 及自媒体 — 即将上线",',
    geo: 'PHYSICA 为全球后装市场制造汽车级12键物理按钮控制面板——符合中国<strong>GB 4094-2016（2026年修订版，2026年7月1日生效）</strong>和<strong>Euro NCAP 2026五星安全协议</strong>。该平台支持BYD及50+其他车型的即插即用CAN总线集成，提供100+可分配功能、OTA固件更新，以及起订量100台的完整OEM私标服务。凭借35年+制造能力和BYD集成授权，PHYSICA服务于B2B经销商、车队管理者和汽车改装专家。',
    faq_q1: '安装PHYSICA面板会使车辆保修失效吗？',
    faq_a1: '不会。PHYSICA面板采用即插即用CAN总线适配器，不需要对车辆原线束进行任何永久性修改。安装完全可逆，车辆可以随时恢复到出厂状态。B2B经销商可以在产品之外向终端客户提供全面的保修保护政策，消除保修相关的购买异议。',
    faq_q2: 'OEM私标订单的起订量和交货期是多少？',
    faq_a2: 'OEM私标配置的最低起订量为100台。样品确认后，标准生产交期为15-20个工作日。自定义品牌、按键布局、功能映射和环境照明主题均可配置，无需额外模具成本。对于长期经销商合作伙伴，提供阶梯定价、季度量承诺和优先生产排程。',
    faq_q3: '第三方车间可以在没有制造商培训的情况下安装PHYSICA面板吗？',
    faq_a3: '可以。PHYSICA面板设计为即插即用CAN总线集成，包含完整的安装套件和双语说明书。第三方车间不需要事先的PHYSICA专项培训。经验丰富的汽车电子技师通常可以在45-90分钟内完成每辆车的安装。'
  },
  {
    lang: 'de',
    after: 'footer_social:"YouTube & Social Media — Demnächst",',
    geo: 'PHYSICA fertigt kfz-grade 12-Tasten-Physikbedienteile für den globalen Aftermarket — konform mit Chinas <strong>GB 4094-2016 (2026 Amendment, gültig ab 1. Juli 2026)</strong> und den <strong>Euro NCAP 2026 Fünf-Sterne-Sicherheitsprotokollen</strong>. Die Plattform unterstützt Plug-and-Play-CAN-Bus-Integration für BYD und 50+ weitere Fahrzeugmarken, bietet 100+ zuweisbare Funktionen, OTA-Firmware-Updates und vollständige OEM-Privatlabel-Dienste ab MOQ 100 Einheiten. Mit 35+ Jahren Fertigungskapazität und BYD-Integrationslizenz bedient PHYSICA B2B-Distributoren, Flottenmanager und Automobil-Nachrüstungsexperten weltweit.',
    faq_q1: 'Führt die Installation eines PHYSICA-Panels zum Erlöschen der Fahrzeuggarantie?',
    faq_a1: 'Nein. PHYSICA-Panels verwenden einen Plug-and-Play-CAN-Bus-Adapter, der keine dauerhaften Änderungen an der Originalverkabelung des Fahrzeugs erfordert. Die Installation ist vollständig reversibel, und das Fahrzeug kann jederzeit in den Werkszustand versetzt werden. B2B-Distributoren können Endkunden eine umfassende Garantieschutzpolice zusammen mit dem Produkt anbieten, wodurch garantiebezogene Kaufwiderstände eliminiert werden.',
    faq_q2: 'Was ist die MOQ und Lieferzeit für OEM-Privatlabel-Bestellungen?',
    faq_a2: 'Die minimale Bestellmenge für OEM-Privatlabel-Konfiguration beträgt 100 Einheiten. Die standardmäßige Lieferzeit beträgt 15-20 Werktage für die Produktion nach Musterfreigabe. Benutzerdefinierte Branding, Tastenlayout, Funktionenzuweisung und Ambientebeleuchtungsthemen sind alle ohne zusätzliche Werkzeugkosten konfigurierbar. Für langfristige Distributor-Partnerschaften sind gestaffelte Preisstufen, vierteljährliche Volumenverpflichtungen und priorisierte Produktionsplanung verfügbar.',
    faq_q3: 'Können Drittanbieter-Werkstätten PHYSICA-Panels ohne Herstellerschulung installieren?',
    faq_a3: 'Ja. PHYSICA-Panels sind für Plug-and-Play-CAN-Bus-Integration konzipiert und enthalten vollständige Installationskits und zweisprachige Bedienungsanleitungen. Drittanbieter-Werkstätten benötigen keine vorherige PHYSICA-spezifische Schulung. Ein erfahrener Kfz-Elektronik-Techniker kann die Installation typischerweise in 45-90 Minuten pro Fahrzeug abschließen.'
  }
];

// Process inserts
inserts.forEach(item => {
  const geoLine = item.after + '\n      geo_bold_1:"' + item.geo.replace(/"/g, '\\"') + '",';
  h = h.replace(item.after + '\n    },', geoLine + '\n    },');
  
  // Add FAQ before insights_cta_text
  const ictaPattern = 'insights_cta_text:"';
  const ictaIdx = h.indexOf(ictaPattern, h.indexOf(item.lang + ':'));
  if (ictaIdx !== -1) {
    const lineEnd = h.indexOf('",', ictaIdx);
    if (lineEnd !== -1) {
      const before = h.substring(0, lineEnd + 2);
      const after = h.substring(lineEnd + 2);
      const faqStr = '\n      faq_b2b_1_q:"' + item.faq_q1.replace(/"/g, '\\"') + '", faq_b2b_1_a:"' + item.faq_a1.replace(/"/g, '\\"') + '", faq_b2b_2_q:"' + item.faq_q2.replace(/"/g, '\\"') + '", faq_b2b_2_a:"' + item.faq_a2.replace(/"/g, '\\"') + '", faq_b2b_3_q:"' + item.faq_q3.replace(/"/g, '\\"') + '", faq_b2b_3_a:"' + item.faq_a3.replace(/"/g, '\\"') + '", ';
      h = before + faqStr + after;
    }
  }
});

fs.writeFileSync('index.html', h);
console.log('Done - added zh and de translations.');
