const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// GEO bold text translations
const geo = {
  en: 'PHYSICA manufactures automotive-grade 12-key physical button control panels for the global aftermarket — compliant with China\'s <strong>GB 4094-2016 (2026 Amendment, effective July 1, 2026)</strong> and <strong>Euro NCAP 2026 five-star safety protocols</strong>. The platform supports plug-and-play CAN bus integration for BYD and 50+ other vehicle brands, offering 100+ assignable functions, OTA firmware updates, and full OEM private-label services with MOQ from 100 units. With 35+ years of manufacturing capacity and BYD integration license, PHYSICA serves B2B distributors, fleet managers, and automotive retrofit specialists worldwide.',
  zh: 'PHYSICA 为全球后装市场制造汽车级12键物理按钮控制面板——符合中国<strong>GB 4094-2016（2026年修订版，2026年7月1日生效）</strong>和<strong>Euro NCAP 2026五星安全协议</strong>。该平台支持BYD及50+其他车型的即插即用CAN总线集成，提供100+可分配功能、OTA固件更新，以及起订量100台的完整OEM私标服务。凭借35年+制造能力和BYD集成授权，PHYSICA服务于B2B经销商、车队管理者和汽车改装专家。',
  de: 'PHYSICA fertigt kfz-grade 12-Tasten-Physikbedienteile für den globalen Aftermarket — konform mit Chinas <strong>GB 4094-2016 (2026 Amendment, gültig ab 1. Juli 2026)</strong> und den <strong>Euro NCAP 2026 Fünf-Sterne-Sicherheitsprotokollen</strong>. Die Plattform unterstützt Plug-and-Play-CAN-Bus-Integration für BYD und 50+ weitere Fahrzeugmarken, bietet 100+ zuweisbare Funktionen, OTA-Firmware-Updates und vollständige OEM-Privatlabel-Dienste ab MOQ 100 Einheiten. Mit 35+ Jahren Fertigungskapazität und BYD-Integrationslizenz bedient PHYSICA B2B-Distributoren, Flottenmanager und Automobil-Nachrüstungsexperten weltweit.',
  ja: 'PHYSICAは世界のアフターマーケット向けに自動車グレード12キー物理ボタン制御パネルを製造しています——中国の<strong>GB 4094-2016（2026年改正版、2026年7月1日施行）</strong>および<strong>Euro NCAP 2026 5つ星安全プロトコル</strong>に準拠。本プラットフォームはBYDおよび50+他車種へのプラグアンドプレイCANバス統合をサポートし、100+割り当て可能機能、OTAファームウェア更新、およびMOQ 100台からの完全OEMプライベートラベルサービスを提供。35年以上の製造能力とBYD統合ライセンスを有し、PHYSICAはB2Bディストリビューター、フリート管理者、および自動車改装専門家にサービスを提供しています。',
  es: 'PHYSICA fabrica paneles de control con botones físicos de 12 teclas de grado automotriz para el mercado de reemplazo global — cumpliendo con la <strong>GB 4094-2016 de China (Enmienda 2026, efectiva el 1 de julio de 2026)</strong> y los <strong>protocolos de seguridad Euro NCAP 2026 de cinco estrellas</strong>. La plataforma soporta integración CAN bus plug-and-play para BYD y 50+ otras marcas de vehículos, ofreciendo 100+ funciones asignables, actualizaciones de firmware OTA, y servicios completos de etiqueta privada OEM con MOQ desde 100 unidades. Con 35+ años de capacidad de fabricación y licencia de integración BYD, PHYSICA sirve a distribuidores B2B, gerentes de flotas y especialistas en modificación automotriz en todo el mundo.'
};

// B2B FAQ translations
const faq = {
  en: {
    q1: 'Does PHYSICA panel installation void a vehicle\'s warranty?',
    a1: 'No. PHYSICA panels use a plug-and-play CAN bus adapter that does not require any permanent modifications to the vehicle\'s original wiring. The installation is fully reversible, and the vehicle can be restored to factory state at any time. B2B distributors can offer end customers a comprehensive warranty protection policy alongside the product, eliminating warranty-related purchase objections.',
    q2: 'What is the MOQ and lead time for OEM private-label orders?',
    a2: 'The minimum order quantity for OEM private-label configuration is 100 units. Standard lead time is 15-20 business days for production after sample approval. Custom branding, key layout, function mapping, and ambient lighting themes are all configurable at no additional tooling cost. For long-term distributor partnerships, graduated pricing tiers, quarterly volume commitments, and priority production scheduling are available.',
    q3: 'Can third-party workshops install PHYSICA panels without manufacturer training?',
    a3: 'Yes. PHYSICA panels are designed for plug-and-play CAN bus integration with complete installation kits and bilingual instruction manuals included. Third-party workshops do not require prior PHYSICA-specific training. An experienced automotive electronics technician can typically complete installation in 45-90 minutes per vehicle.'
  },
  zh: {
    q1: '安装PHYSICA面板会使车辆保修失效吗？',
    a1: '不会。PHYSICA面板采用即插即用CAN总线适配器，不需要对车辆原线束进行任何永久性修改。安装完全可逆，车辆可以随时恢复到出厂状态。B2B经销商可以在产品之外向终端客户提供全面的保修保护政策，消除保修相关的购买异议。',
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
    q1: 'PHYSICAパネルの取り付けにより車両保証は無効になりますか？',
    a1: 'いいえ。PHYSICAパネルはプラグアンドプレイCANバスアダプターを使用しており、車両の元配線への永続的な変更を必要としません。取り付けは完全に可逆であり、車両はいつでも工場出荷状態に復元できます。B2Bディストリビューターは、製品とともにエンドカスタマーに包括的保証保護ポリシーを提供でき、保証関連の購入異議を排除できます。',
    q2: 'OEMプライベートラベル注文のMOQとリードタイムは？',
    a2: 'OEMプライベートラベル構成の最小注文数量は100台です。サンプル承認後の標準生産リードタイムは15-20営業日です。カスタムブランディング、キーレイアウト、機能マッピング、およびアンビエント照明テーマはすべて追加金型費用なしで構成可能です。長期ディストリビューター・パートナーシップの場合、段階的価格ティア、四半期量コミットメント、および優先生産スケジューリングが利用可能です。',
    q3: 'サードパーティー工場はメーカー研修なしでPHYSICAパネルを取り付けできますか？',
    a3: 'はい。PHYSICAパネルはプラグアンドプレイCANバス統合のために設計されており、完全な取り付けキットと二言語説明書が含まれています。サードパーティー工場は事前のPHYSICA特有の研修を必要としません。経験豊富な自動車電子技師は通常、車両あたり45-90分で取り付けを完了できます。'
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

// Process each language block by finding the block boundaries
const langBlocks = ['en', 'zh', 'de', 'ja', 'es'];

langBlocks.forEach(lang => {
  // Find the start of the lang block
  const blockStart = html.indexOf(lang + ':{');
  if (blockStart === -1) { console.log('Block not found:', lang); return; }
  
  // Find the end of the block (matching })
  let braceCount = 0;
  let blockEnd = blockStart + lang.length + 2; // skip "en:{"
  for (let i = blockStart; i < html.length; i++) {
    if (html[i] === '{') braceCount++;
    if (html[i] === '}') { braceCount--; if (braceCount === 0) { blockEnd = i; break; } }
  }
  
  const block = html.substring(blockStart, blockEnd);
  
  // 1. Add geo_bold_1 before the closing } of the block
  let newBlock = block;
  const lastComma = block.lastIndexOf(',\n    }');
  if (lastComma !== -1) {
    const before = block.substring(0, lastComma);
    const after = block.substring(lastComma);
    newBlock = before + ',\n      geo_bold_1:"' + geo[lang].replace(/"/g, '\\"') + '"' + after;
  }
  
  // 2. Add B2B FAQ before insights_cta_text
  const ictaIdx = newBlock.indexOf('insights_cta_text:');
  if (ictaIdx !== -1) {
    const lineEnd = newBlock.indexOf('",', ictaIdx);
    if (lineEnd !== -1) {
      const before = newBlock.substring(0, lineEnd + 2); // include '",'
      const after = newBlock.substring(lineEnd + 2);
      const faqStr = '\n      faq_b2b_1_q:"' + faq[lang].q1.replace(/"/g, '\\"') + '", faq_b2b_1_a:"' + faq[lang].a1.replace(/"/g, '\\"') + '", faq_b2b_2_q:"' + faq[lang].q2.replace(/"/g, '\\"') + '", faq_b2b_2_a:"' + faq[lang].a2.replace(/"/g, '\\"') + '", faq_b2b_3_q:"' + faq[lang].q3.replace(/"/g, '\\"') + '", faq_b2b_3_a:"' + faq[lang].a3.replace(/"/g, '\\"') + '", ';
      newBlock = before + faqStr + after;
    }
  }
  
  // Replace the block in html
  html = html.substring(0, blockStart) + newBlock + html.substring(blockEnd);
  
  // Update blockEnd for next iteration
  // (not needed since we're iterating over langs array)
});

fs.writeFileSync('index.html', html);
console.log('Done! Added translations to all language blocks.');
