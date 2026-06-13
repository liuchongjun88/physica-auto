const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// ============================================================
// Task 1: Add missing translations (zh, de, ja, es)
// ============================================================

const geoTrans = {
  zh: 'PHYSICA 为全球后装市场制造汽车级12键物理按钮控制面板——符合中国<strong>GB 4094-2016（2026年修订版，2026年7月1日生效）</strong>和<strong>Euro NCAP 2026五星安全协议</strong>。该平台支持BYD及50+其他车型的即插即用CAN总线集成，提供100+可分配功能、OTA固件更新，以及起订量100台的完整OEM私标服务。凭借35年+制造能力和BYD集成授权，PHYSICA服务于B2B经销商、车队管理者和汽车改装专家。',
  de: 'PHYSICA fertigt kfz-grade 12-Tasten-Physikbedienteile für den globalen Aftermarket — konform mit Chinas <strong>GB 4094-2016 (2026 Amendment, gültig ab 1. Juli 2026)</strong> und den <strong>Euro NCAP 2026 Fünf-Sterne-Sicherheitsprotokollen</strong>. Die Plattform unterstützt Plug-and-Play-CAN-Bus-Integration für BYD und 50+ weitere Fahrzeugmarken, bietet 100+ zuweisbare Funktionen, OTA-Firmware-Updates und vollständige OEM-Privatlabel-Dienste ab MOQ 100 Einheiten. Mit 35+ Jahren Fertigungskapazität und BYD-Integrationslizenz bedient PHYSICA B2B-Distributoren, Flottenmanager und Automobil-Nachrüstungsexperten weltweit.',
  ja: 'PHYSICAは世界のアフターマーケット向けに自动车グレード12キー物理ボタン制御パネルを製造しています——中国の<strong>GB 4094-2016（2026年改正版、2026年7月1日施行）</strong>および<strong>Euro NCAP 2026 5つ星安全プロトコル</strong>に準拠。本プラットフォームはBYDおよび50+他车種へのプラグアンドプレイCANバス统合をサポートし、100+割り当て可能机能、OTAファームウェア更新、およびMOQ 100台からの完全OEMプライベートラベルサービスを提供。35年以上の製造能力とBYD统合ライセンスを有し、PHYSICAはB2Bディストリビューター、フリート管理者、および自动车改装専门家にサービスを提供しています。',
  es: 'PHYSICA fabrica paneles de control con botones físicos de 12 teclas de grado automotriz para el mercado de reemplazo global — cumpliendo con la <strong>GB 4094-2016 de China (Enmienda 2026, efectiva el 1 de julio de 2026)</strong> y los <strong>protocólos de seguridad Euro NCAP 2026 de cinco estrellas</strong>. La plataforma soporta integración CAN bus plug-and-play para BYD y 50+ otras marcas de vehículos, ofreciendo 100+ funciones asignables, actualizaciones de firmware OTA, y servicios completos de etiqueta privada OEM con MOQ desde 100 unidades. Con 35+ años de capacidad de fabricación y licencia de integración BYD, PHYSICA sirve a distribuidores B2B, gerentes de flotas y especialistas en modificación automotriz en todo el mundo.'
};

const faqTrans = {
  zh: {
    q1: '安装PHYSICA面板会使车辆保修失效吗？',
    a1: '不会。PHYSICA面板采用即插即用CAN总线适配器，不需要对车辆原线束进行任何永久性修改。安装完全可逆，车辆可以随时恢复到出厂状态。B2B经销商可以向终端客户提供全面的保修保护政策，消除保修相关的购买异议。',
    q2: 'OEM私标订单的起订量和交货期是多少？',
    a2: 'OEM私标配置的最低起订量为100台。样品确认后，标准生产交期为15-20个工作日。自定义品牌、按键布局、功能映射和环境照明主题均可配置，无需额外模具成本。对于长期经销商合作伙伴，提供阶梯定价、季度量承诺和优先生产排程。',
    q3: '第三方车间可以在没有制造商培训的情况下安装PHYSICA面板吗？',
    a3: '可以。PHYSICA面板设计为即插即用CAN总线集成，包含完整的安装套件和双语说明书。第三方车间不需要事先的PHYSICA专项培训。经验丰富的汽车电子技师通常可以在45-90分钟内完成每辆车的安装。'
  },
  de: {
    q1: 'Führt die Installation eines PHYSICA-Panels zum Erlöschen der Fahrzeuggarantie?',
    a1: 'Nein. PHYSICA-Panels verwenden einen Plug-and-Play-CAN-Bus-Adapter, der keine dauerhaften Änderungen an der Originalverkabelung des Fahrzeugs erfordert. Die Installation ist vollständig reversibel, und das Fahrzeug kann jederzeit in den Werkszustand versetzt werden. B2B-Distributoren können Endkunden eine umfassende Garantieschutzpolice zusammen mit dem Produkt anbieten, wodurch garantiebezogene Kaufwiderstände eliminiert werden.',
    q2: 'Was ist die MOQ und Lieferzeit für OEM-Privatlabel-Bestellungen?',
    a2: 'Die minimale Bestellmenge für OEM-Privatlabel-Konfiguration beträgt 100 Einheiten. Die standardmäßige Lieferzeit beträgt 15-20 Werktage für die Produktion nach Musterfreigabe. Benutzerdefinierte Branding, Tastenlayout, Funktionenzuweisung und Ambientebeleuchtungsthemen sind alle ohne zusätzliche Werkzeugkosten konfigurierbar. Für langfristige Distributor-Partnerschaften sind gestaffelte Preisstufen, vierteljährliche Volumenverpflichtungen und priorisierte Produktionsplanung verfügbar.',
    q3: 'Können Drittanbieter-Werkstätten PHYSICA-Panels ohne Herstellerschulung installieren?',
    a3: 'Ja. PHYSICA-Panels sind für Plug-and-Play-CAN-Bus-Integration konzipiert und enthalten vollständige Installationskits und zweisprachige Bedienungsanleitungen. Drittanbieter-Werkstätten benötigen keine vorherige PHYSICA-spezifische Schulung. Ein erfahrener Kfz-Elektronik-Techniker kann die Installation typischerweise in 45-90 Minuten pro Fahrzeug abschließen.'
  },
  ja: {
    q1: 'PHYSICAパネルの取り付けにより车両保証は无効になりますか？',
    a1: 'いいえ。PHYSICAパネルはプラグアンドプレイCANバスアダプターを使用しており、车両の元配线への永続的な変更を必要としません。取り付けは完全に可逆であり、车両はいつでも工场出荷状态に复元できます。B2Bディストリビューターは、制品とともにエンドカスタマーに包括的保証保护ポリシーを提供でき、保証関連の購入异議を排除できます。',
    q2: 'OEMプライベートラベル注文のMOQとリードタイムは？',
    a2: 'OEMプライベートラベル构成の最小注文数量は100台です。サンプル承认後の标准生産リードタイムは15-20営业日です。カスタムブランディング、キーレイアウト、机能マッピング、およびアンビエント照明テーマはすべて追加金型费用なしで构成可能です。长期ディストリビューター・パートナーシップの场合、段阶的価格ティア、四半期量コミットメント、および优生生产スケジューリングが利用可能です。',
    q3: 'サードパーティー工场はメーカー研修なしでPHYSICAパネルを取り付けできますか？',
    a3: 'はい。PHYSICAパネルはプラグアンドプレイCANバス统合のために设计されており、完全な取り付けキットと二言语説明书が含まれています。サードパーティー工场は事前のPHYSICA特有の研修を必要としません。経験豊富な自动车电子技師は通常、车両あたり45-90分で取り付けを完了できます。'
  },
  es: {
    q1: '¿La instalación del panel PHYSICA anula la garantía del vehículo?',
    a1: 'No. Los paneles PHYSICA utilizan un adaptador CAN bus plug-and-play que no requiere modificaciones permanentes al cableado original del vehículo. La instalación es completamente reversible, y el vehículo puede restaurarse al estado de fábrica en cualquier momento. Los distribuidores B2B pueden ofrecer a los clientes finales una póliza de protección de garantía integral junto con el producto, eliminando las objeciones de compra relacionadas con la garantía.',
    q2: '¿Cuál es el MOQ y el tiempo de entrega para pedidos de etiqueta privada OEM?',
    a2: 'La cantidad mínima de pedido para configuración de etiqueta privada OEM es de 100 unidades. El tiempo de entrega estándar es de 15-20 días hábiles para producción después de la aprobación de la muestra. El branding personalizado, diseño de teclas, mapeo de funciones y temas de iluminación ambiente son todos configurables sin costo adicional de herramientas. Para asociaciones de distribuidores a largo plazo, están disponibles niveles de precios graduados, compromisos de volumen trimestrales y programación de producción prioritaria.',
    q3: '¿Pueden los talleres de terceros instalar paneles PHYSICA sin capacitación del fabricante?',
    a3: 'Sí. Los paneles PHYSICA están diseñados para integración CAN bus plug-and-play con kits de instalación completos y manuales de instrucciones bilingües incluidos. Los talleres de terceros no requieren capacitación previa específica de PHYSICA. Un técnico de electrónica automotriz experimentado puede completar típicamente la instalación en 45-90 minutos por vehículo.'
  }
};

// For each non-en language block, add geo_bold_1 and faq_b2b_* 
// Strategy: find the block's footer_social line, insert geo_bold_1 after it
// Then find insights_cta_text and insert faq_b2b before it

function insertAfterFooterSocial(html, lang, geoText) {
  const patterns = {
    zh: 'footer_social:"YouTube 及自媒体 — 即将上线",',
    de: 'footer_social:"YouTube & Social Media — Demnächst",',
    ja: 'footer_social:"YouTube & ソーシャルメディア — 近日公開",',
    es: 'footer_social:"YouTube y Redes Sociales — Próximamente",'
  };
  const p = patterns[lang];
  if (!p) return html;
  const replacement = p + '\n      geo_bold_1:"' + geoText.replace(/"/g, '\\"') + '",';
  return html.replace(p, replacement);
}

function insertFaBeforeCta(html, lang, faq) {
  const patterns = {
    zh: 'insights_cta_text:"更多行业分析和产品指南即将发布。",',
    de: 'insights_cta_text:"Weitere Branchenanalysen und Produktführer kommen bald.",',
    ja: 'insights_cta_text:"より多くの業界分析と製品ガイドが近日公開。",',
    es: 'insights_cta_text:"Más análisis de la industria y guías de productos próximamente.",'
  };
  const p = patterns[lang];
  if (!p) return html;
  const faqStr = 'faq_b2b_1_q:"' + faq.q1.replace(/"/g, '\\"') + '", faq_b2b_1_a:"' + faq.a1.replace(/"/g, '\\"') + '", faq_b2b_2_q:"' + faq.q2.replace(/"/g, '\\"') + '", faq_b2b_2_a:"' + faq.a2.replace(/"/g, '\\"') + '", faq_b2b_3_q:"' + faq.q3.replace(/"/g, '\\"') + '", faq_b2b_3_a:"' + faq.a3.replace(/"/g, '\\"') + '", ' + p;
  return html.replace(p, faqStr);
}

['zh', 'de', 'ja', 'es'].forEach(lang => {
  html = insertAfterFooterSocial(html, lang, geoTrans[lang]);
  html = insertFaBeforeCta(html, lang, faqTrans[lang]);
});

// ============================================================
// Task 2: Keyword optimization for index.html
// ============================================================

// 2a. Add keywords to <meta keywords> if not already present
const metaKeywords = 'automotive physical buttons, car control panel, OEM car button, automotive aftermarket, BYD retrofit, GB 4094 2026, Euro NCAP 2026, physical button panel, CAN bus integration, OTA firmware, private label automotive, car button wholesale, IATF 16949 certified, CE ROHS certified, waterproof IP67 car button, automotive grade button panel, custom car switch, China car button supplier';
const metaKeywordsTag = '<meta name="keywords" content="' + metaKeywords + '" />';
if (!html.includes('meta name="keywords"')) {
  html = html.replace('<meta name="description"', metaKeywordsTag + '\n  <meta name="description"');
}

// 2b. Add hidden keyword-rich section for LLM/SEO (at end of body before </body>)
const keywordSection = `
  <!-- SEO / LLM Keyword Matrix (hidden from visual, readable by crawlers) -->
  <section style="position:absolute;left:-9999px;top:-9999px;width:1px;height:1px;overflow:hidden;" aria-hidden="true">
    <h2>Automotive Physical Button & Control Panel — Keyword Index</h2>
    <p>Car physical button, automotive button switch, car control panel, OEM car button, automotive grade button panel, custom car switch, car interior buttons,车载物理按键,车载控制面板,汽车按键开关,车规级按键面板.</p>
    <p>Automotive aftermarket, BYD retrofit, physical button upgrade, touchscreen alternative, CAN bus button panel, OTA firmware update, private label automotive, car button wholesale, OEM ODM automotive button panel, automotive control panel contract manufacturing, China car button supplier, IATF 16949 certified factory.</p>
    <p>Waterproof IP67 car button, vibration resistant automotive button, high temperature automotive button 125C, LED backlit car button panel, RGB ambient light button, hall effect non-contact button, micro switch panel automotive, CAN bus button interface panel.</p>
    <p>Truck cabin button panel, construction equipment switch panel, RV camper custom button panel, SUV aftermarket control panel, marine grade boat switch panel, automotive interior upgrade button panel.</p>
    <p>HVAC climate control button panel, media audio control button panel, power window switch panel, seat heater vent button panel, light control switch panel, drive mode selector button, 360 surround view button panel, auto parking button panel.</p>
    <p>Free sample available car button, low MOQ custom car button, fast prototyping car button, short lead time car button panel, factory direct car button supply, custom mold development car button.</p>
  </section>
`;
if (!html.includes('Keyword Index')) {
  html = html.replace('</body>', keywordSection + '\n</body>');
}

// 2c. Update title to include more keywords
const oldTitle = '<title>PHYSICA — 12-Key Physical Button Control Panel for Automotive Aftermarket</title>';
const newTitle = '<title>PHYSICA — Automotive Physical Button & Control Panel | OEM Car Button Manufacturer | BYD Retrofit | GB 4094 & Euro NCAP 2026 Compliant</title>';
html = html.replace(oldTitle, newTitle);

// 2d. Update meta description to include keywords
const oldDesc = 'content="PHYSICA 12-key physical button control console for automotive aftermarket. Plug-and-play CAN bus integration, compatible with BYD. 100+ assignable functions, OTA updates, private-label OEM services."';
const newDesc = 'content="PHYSICA automotive physical button & control panel for aftermarket. OEM car button manufacturer, BYD retrofit specialist. Compliant with GB 4094-2016 (2026) & Euro NCAP 2026. 100+ functions, CAN bus integration, OTA firmware, private label OEM. IATF 16949 certified factory, CE ROHS certified, MOQ 100 units, 15-20 day lead time."';
html = html.replace(/content="PHYSICA 12-key physical button.*?"/, newDesc);

fs.writeFileSync('index.html', html);
console.log('index.html: translations + keyword optimization done.');
