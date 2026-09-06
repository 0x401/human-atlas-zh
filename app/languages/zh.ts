/**
 * Chinese (简体中文) — this single file IS the whole language.
 *
 * Adding another language: copy this file to a sibling name such as app/languages/ja.ts and translate — the
 * auto-discovery in ../languages registers it (picker entry, UI copy and structure labels) with no other change.
 * `meta.order` positions it in the picker after English (order 0); languages without an order sort last by code.
 * Keep `code` as the lower-case BCP 47 primary tag and give `htmlLang`, `title` and `description` real values
 * for the <head> metadata.
 *
 *   meta       picker label plus <html lang>/<head> title & description.
 *   copy       UI/system/explanation strings keyed by the canonical English source; keys without a translation
 *              stay English at runtime.
 *   structure  optional labels for every named structure in public/models/atlas.json, keyed by structure id
 *              (each row's trailing comment is the canonical English name to translate from). Structures without
 *              a row simply keep their English name, so a partial table is fine.
 */
import type {Language, MessageDict, StructureDict} from '../languages';
export const meta: Language = {code: 'zh', label: 'Chinese', nativeName: '中文', htmlLang: 'zh-CN', title: '人体图谱 · 交互式三维解剖', description: '交互式人体图谱：浏览已命名的解剖结构、展开器官系统，并在三维中检视单个部件。', order: 1};
export const copy: MessageDict = {
 'The anatomy catalogue could not be loaded.': '解剖图谱数据加载失败。',
 'INTERACTIVE ANATOMY': '交互式人体解剖',
 'Human Atlas': '人体图谱',
 'modeled pieces': '个建模部件',
 'Search anatomy': '搜索解剖结构',
 'Find a structure': '查找结构',
 'About this atlas': '关于本图谱',
 'Anatomical layers': '解剖图层',
 'Explorer panels': '浏览面板',
 'Systems': '系统',
 'Close systems': '关闭系统面板',
 'All': '全部',
 'Skeleton': '骨骼',
 'Organs': '器官',
 'Show only': '仅显示',
 'Show': '显示',
 'pieces visible': '个部件可见',
 'Hide all': '全部隐藏',
 'Find anatomy': '查找解剖结构',
 'Close search': '关闭搜索',
 'Heart, femur, cranial nerve…': '心脏、股骨、脑神经…',
 'Search named anatomical structures': '搜索已命名的解剖结构',
 'No structures match your search.': '没有匹配的解剖结构。',
 'piece': '个部件',
 'pieces': '个部件',
 'Showing up to 80 matches. Refine your search to find smaller structures.': '最多显示 80 条结果，请输入更精确的关键词以查找更细小的结构。',
 'Start with a major organ, or search every named structure.': '从主要器官开始，或搜索全部已命名的结构。',
 'Camera controls': '视角控制',
 'three-quarter view': '四分之三视角',
 'front view': '正面视角',
 'side view': '侧面视角',
 'back view': '背面视角',
 'F': '正',
 'S': '侧',
 'B': '背',
 'Pause rotation': '暂停旋转',
 'Rotate body': '旋转人体',
 'Auto rotate': '自动旋转',
 'Reset': '重置',
 'Reset view and layers': '重置视角与图层',
 'SELECTED STRUCTURE': '已选结构',
 'ANATOMICAL INVENTORY': '解剖结构总览',
 'SEPARATED STRUCTURES': '结构已分离',
 'ADULT HUMAN · MALE': '成年人体 · 男性',
 'Open system layers': '打开系统图层',
 'Explode anatomy': '拆解人体',
 'Assembled': '完整合体',
 'Every piece': '全部分离',
 'Switch language': '切换语言',
 'Assemble and reset': '合体并重置',
 'Drag to pan': '拖动平移',
 'Drag to orbit': '拖动旋转',
 'Pinch to zoom': '双指缩放',
 'Tap to inspect': '点击查看结构',
 'Source & credits': '来源与署名',
 'Preparing the anatomy': '正在准备解剖模型',
 'Loading': '正在加载',
 'Reload viewer': '重新加载',
 'ANATOMY': '解剖',
 'System overview · structure identified from source anatomy': '系统概述 · 该结构依据原始解剖数据识别',
 'Atlas reference': '图谱编号',
 'Selected pieces': '已选部件',
 'Included structures': '包含的结构',
 'And': '另有',
 'more modeled pieces.': '个建模部件。',
 'View anatomical source': '查看解剖数据来源',
 'Show surrounding anatomy': '显示周围结构',
 'Isolate structure': '单独显示此结构',
 'Clear selection': '清除选择',
 'SOURCE & SCOPE': '来源与范围',
 'A body, revealed.': '一具身体，由此展开。',
 'Explore the adult male reference anatomy from BodyParts3D.': '探索来自 BodyParts3D 的成年男性参考解剖模型。',
 'Male · BodyParts3D': '男性 · BodyParts3D',
 '2,234 individual meshes and 3,432 named concepts from an adult male reference anatomy.': '来自成年男性参考解剖模型的 2,234 个独立网格与 3,432 个命名概念。',
 'This reference does not contain every human structure or variation. Named concepts can contain multiple pieces; each source mesh is rendered once.': '本参考模型并未涵盖人体的全部结构与变异。一个命名概念可包含多个部件；每个源网格仅渲染一次。',
 'Colors and system groupings are designed for exploration. The geometry is simplified for the web, and short explanations provide general educational context. This is an anatomical reference, not a diagnostic or surgical tool.': '配色与系统分组为便于探索而设计；几何体已针对网页做了简化，简短说明仅提供一般性科普背景。本图谱是解剖学参考资料，不能作为诊断或手术工具。',
 'Source': '来源',
 'BodyParts3D, © The Database Center for Life Science licensed under CC Attribution 4.0 International.': 'BodyParts3D，© 生命科学数据库中心（The Database Center for Life Science），依据 CC BY 4.0 国际许可协议授权使用。',
 'Dataset license': '数据集许可协议',
 'Original geometry & metadata': '原始几何与元数据',
 'Read the source publication': '阅读原始文献',
 // Anatomy copy resolved through translate() from the canonical English text in anatomy.ts (SYSTEMS names, descriptions and curated explanations).
 'Muscles': '肌肉',
 'Heart': '心脏',
 'Sensory organs': '感官',
 'Arteries': '动脉',
 'Veins': '静脉',
 'Nervous system': '神经系统',
 'Respiratory': '呼吸系统',
 'Digestive': '消化系统',
 'Urinary': '泌尿系统',
 'Lymphatic': '淋巴系统',
 'Endocrine': '内分泌系统',
 'Reproductive': '生殖系统',
 'Body surface': '体表',
 'Connective tissue': '结缔组织',
 'Bones form the supporting framework of the body, protect organs, and provide attachment points for muscles. Their internal tissue also stores minerals and produces blood cells.': '骨构成人体的支撑框架，保护内脏器官，并为肌肉提供附着点；骨组织还储存矿物质并生成血细胞。',
 'Skeletal muscles generate movement by pulling on their attachments. Together with tendons, they move joints, stabilize posture, and produce heat.': '骨骼肌通过牵拉其附着点产生运动。它们与肌腱协同使关节活动、维持姿势并产生热量。',
 'The heart is a muscular pump with four chambers. Its valves direct blood forward through the pulmonary and systemic circuits.': '心脏是具有四个腔室的肌性泵，其瓣膜引导血液沿肺循环与体循环单向向前流动。',
 'These structures contribute to special senses, including sight, hearing, and balance. Their specialized tissues detect stimuli and work with the nervous system to convey information.': '这些结构参与视觉、听觉和平衡等特殊感觉；其特化组织感受刺激，并与神经系统协同传递信息。',
 'The heart drives blood through the circulation. Arteries carry blood away from the heart to supply tissues or, in the pulmonary circuit, to the lungs.': '心脏推动血液在循环系统中流动。动脉把血液从心脏输送到各组织，或在肺循环中将血液送至肺。',
 'Veins return blood toward the heart. Superficial and deep networks collect blood from the tissues; the pulmonary veins bring oxygenated blood back from the lungs.': '静脉将血液送回心脏。浅、深静脉网收集组织回流的血液，肺静脉则把肺内氧合的血液运回心脏。',
 'The brain, spinal cord, and peripheral nerves carry and process signals. They support sensation, movement, coordination, and automatic regulation of body functions.': '脑、脊髓和周围神经负责传导与处理信号，支撑感觉、运动、协调以及机体功能的自主调节。',
 'The airways conduct air to the lungs, where oxygen and carbon dioxide move between air and blood. Breathing depends on pressure changes produced by respiratory muscles.': '呼吸道将空气导入肺内，氧气与二氧化碳在肺中于空气和血液之间交换；呼吸依赖于呼吸肌产生的压力变化。',
 'The digestive tract breaks down food, absorbs nutrients and water, and moves waste onward. Accessory organs contribute bile and digestive enzymes.': '消化管负责分解食物、吸收营养物质和水分，并推送残渣继续前行；附属器官提供胆汁与消化酶。',
 'The kidneys filter blood and regulate fluid, electrolyte, and acid–base balance. Urine travels through the ureters to the bladder and exits through the urethra.': '肾脏过滤血液，调节体液、电解质和酸碱平衡；尿液经输尿管进入膀胱，再经尿道排出体外。',
 'Lymphatic vessels return excess tissue fluid to the circulation. Lymph nodes and other lymphoid organs support immune surveillance and responses.': '淋巴管将多余的组织液送回血液循环；淋巴结和其他淋巴器官承担免疫监视与免疫应答。',
 'Endocrine organs release hormones into the blood to coordinate processes such as metabolism, growth, stress responses, and reproduction.': '内分泌器官将激素释放入血，以协调整合新陈代谢、生长、应激反应和生殖等过程。',
 'The male reproductive structures represented here contribute to sperm production, maturation, transport, and the production of sex hormones.': '此处呈现的男性生殖结构参与精子的生成、成熟与运输，并产生性激素。',
 'The body surface provides an outer anatomical reference. The integumentary system forms a protective barrier and contributes to sensation and temperature regulation.': '体表提供人体外部的形态参照。皮肤及其附属结构构成保护屏障，并参与感觉与体温调节。',
 'Cartilage, ligaments, and other connective tissues support, connect, and separate structures. Their roles include stabilizing joints and distributing mechanical loads.': '软骨、韧带及其他结缔组织起支持、连接和分隔结构的作用，包括稳定关节和分散机械负荷。',
 'A muscular pump in the chest. Its right side sends blood to the lungs; its left side sends blood through the systemic circulation.': '位于胸腔内的肌性泵。右半心将血液送入肺，左半心则将血液射入体循环。',
 'A large organ beneath the right side of the diaphragm. It processes absorbed nutrients, produces bile, and synthesizes many proteins carried in the blood.': '位于膈右侧下方的大器官。它处理吸收的营养物质、生成胆汁，并合成多种随血液运输的蛋白质。',
 'The central organ of the nervous system. Its interconnected regions support perception, movement, memory, language, and the regulation of bodily functions.': '神经系统的中枢器官。其相互连通的各区域支撑感知、运动、记忆、语言以及机体功能的调节。',
 'A muscular chamber between the esophagus and small intestine. It stores and mixes food with acid and enzymes before releasing it into the duodenum.': '位于食管与小肠之间的肌性囊腔。它储存食物并使其与胃酸和消化酶混合，随后排入十二指肠。',
 'A lymphoid organ in the upper left abdomen. It filters blood, removes aging blood cells, and participates in immune responses.': '位于左上腹的淋巴器官。它过滤血液、清除衰老的血细胞，并参与免疫应答。',
 'An abdominal organ with digestive and endocrine roles. It supplies enzymes to the small intestine and releases hormones including insulin and glucagon.': '兼有消化与内分泌功能的腹腔器官。它向小肠提供消化酶，并分泌包括胰岛素和胰高血糖素在内的激素。',
 'A muscular reservoir in the pelvis that stores urine arriving from the kidneys through the ureters.': '位于骨盆内的肌性储尿器官，储存由肾脏经输尿管送来的尿液。',
 'The main airway connecting the larynx to the bronchi. Its cartilage supports keep the airway open during breathing.': '连接喉与支气管的主气道，其软骨支架在呼吸时保持气道通畅。',
 'A broad muscle separating the chest and abdomen. When it contracts, it increases chest volume and helps draw air into the lungs.': '分隔胸腔与腹腔的宽阔扁肌。收缩时增大胸廓容积，有助于将空气吸入肺内。',

};

export const structure: StructureDict = {
  "FJ1252":"上颌牙龈", // Gingiva of upper jaw
  "FJ1253":"下颌牙龈", // Gingiva of lower jaw
  "FJ1254":"左下颌第一磨牙(恒牙)", // Left lower first secondary molar tooth
  "FJ1255":"左下颌第一前磨牙(恒牙)", // Left lower first secondary premolar tooth
  "FJ1256":"左下颌第二磨牙(恒牙)", // Left lower second secondary molar tooth
  "FJ1257":"左下颌第二前磨牙(恒牙)", // Left lower second secondary premolar tooth
  "FJ1258":"左下颌中切牙(恒牙)", // Left lower central secondary incisor tooth
  "FJ1259":"左下颌侧切牙(恒牙)", // Left lower lateral secondary incisor tooth
  "FJ1260":"左下颌尖牙(恒牙)", // Left lower secondary canine tooth
  "FJ1261":"左上颌第一磨牙(恒牙)", // Left upper first secondary molar tooth
  "FJ1262":"左上颌第一前磨牙(恒牙)", // Left upper first secondary premolar tooth
  "FJ1263":"左上颌第二磨牙(恒牙)", // Left upper second secondary molar tooth
  "FJ1264":"左上颌第二前磨牙(恒牙)", // Left upper second secondary premolar tooth
  "FJ1265":"左上颌中切牙(恒牙)", // Left upper central secondary incisor tooth
  "FJ1266":"左上颌侧切牙(恒牙)", // Left upper lateral secondary incisor tooth
  "FJ1267":"左上颌尖牙(恒牙)", // Left upper secondary canine tooth
  "FJ1268":"右下颌第一磨牙(恒牙)", // Right lower first secondary molar tooth
  "FJ1269":"右下颌第一前磨牙(恒牙)", // Right lower first secondary premolar tooth
  "FJ1270":"右下颌第二磨牙(恒牙)", // Right lower second secondary molar tooth
  "FJ1271":"右下颌第二前磨牙(恒牙)", // Right lower second secondary premolar tooth
  "FJ1272":"右下颌中切牙(恒牙)", // Right lower central secondary incisor tooth
  "FJ1273":"右下颌侧切牙(恒牙)", // Right lower lateral secondary incisor tooth
  "FJ1274":"右下颌尖牙(恒牙)", // Right lower secondary canine tooth
  "FJ1275":"右上颌第二磨牙(恒牙)", // Right upper second secondary molar tooth
  "FJ1276":"右上颌第一磨牙(恒牙)", // Right upper first secondary molar tooth
  "FJ1277":"右上颌第一前磨牙(恒牙)", // Right upper first secondary premolar tooth
  "FJ1278":"右上颌第二前磨牙(恒牙)", // Right upper second secondary premolar tooth
  "FJ1279":"右上颌中切牙(恒牙)", // Right upper central secondary incisor tooth
  "FJ1280":"右上颌侧切牙(恒牙)", // Right upper lateral secondary incisor tooth
  "FJ1281":"右上颌尖牙(恒牙)", // Right upper secondary canine tooth
  "FJ1282":"左眼球前房", // Anterior chamber of left eyeball
  "FJ1283":"左筛前神经", // Left anterior ethmoidal nerve
  "FJ1284":"左外直肌节制韧带", // Check ligament of left lateral rectus
  "FJ1285":"左脉络膜", // Left choroid
  "FJ1286":"左脉络膜", // Left choroid
  "FJ1287":"左睫状冠", // Left corona ciliaris
  "FJ1288":"左睫状神经节", // Left ciliary ganglion
  "FJ1289":"左角膜", // Left cornea
  "FJ1290":"左额神经", // Left frontal nerve
  "FJ1291":"左总腱环", // Left common tendinous ring
  "FJ1292":"左内直肌节制韧带", // Check ligament of left medial rectus
  "FJ1293":"左动眼神经下支", // Inferior branch of left oculomotor nerve
  "FJ1294":"左下斜肌", // Left inferior oblique
  "FJ1295":"左下直肌", // Left inferior rectus
  "FJ1296":"左滑车下神经", // Left infratrochlear nerve
  "FJ1297":"左虹膜", // Left iris
  "FJ1298":"左泪小管", // Left lacrimal canaliculus
  "FJ1299":"左泪腺", // Left lacrimal gland
  "FJ1300":"左泪腺神经", // Left lacrimal nerve
  "FJ1301":"左泪湖", // Left lacrimal lake
  "FJ1302":"左鼻泪管", // Left nasolacrimal duct
  "FJ1304":"左外直肌", // Left lateral rectus
  "FJ1305":"左晶状体", // Left lens
  "FJ1306":"左上睑提肌", // Left levator palpebrae superioris
  "FJ1308":"左内直肌", // Left medial rectus
  "FJ1309":"左泪囊", // Left lacrimal sac
  "FJ1310":"左鼻睫神经", // Left nasociliary nerve
  "FJ1311":"左鼻睫神经与左睫状神经节交通支", // Communicating branch of left nasociliary nerve with left ciliary ganglion
  "FJ1312":"左眼神经", // Left ophthalmic nerve
  "FJ1313":"左视神经", // Left optic nerve
  "FJ1315":"左筛后神经", // Left posterior ethmoidal nerve
  "FJ1316":"左视网膜视部", // Optic part of left retina
  "FJ1317":"左巩膜", // Left sclera
  "FJ1318":"左睫状长神经", // Left long ciliary nerve
  "FJ1319":"睫状短神经", // Short ciliary nerve
  "FJ1320":"左晶状体悬韧带", // Suspensory ligament of left lens
  "FJ1321":"左动眼神经上支", // Superior branch of left oculomotor nerve
  "FJ1322":"左上斜肌", // Left superior oblique
  "FJ1323":"左上直肌", // Left superior rectus
  "FJ1324":"左上睑睑板", // Tarsal plate of left upper eyelid
  "FJ1325":"左眶上神经", // Left supra-orbital nerve
  "FJ1326":"左滑车上神经", // Left supratrochlear nerve
  "FJ1328":"左下睑睑板", // Tarsal plate of left lower eyelid
  "FJ1329":"左上斜肌滑车", // Trochlea of left superior oblique
  "FJ1330":"左滑车神经", // Left trochlear nerve
  "FJ1331":"左玻璃体", // Left vitreous body
  "FJ1332":"右眼球前房", // Anterior chamber of right eyeball
  "FJ1333":"右筛前神经", // Right anterior ethmoidal nerve
  "FJ1334":"右外直肌节制韧带", // Check ligament of right lateral rectus
  "FJ1335":"右内直肌节制韧带", // Check ligament of right medial rectus
  "FJ1336":"右脉络膜", // Right choroid
  "FJ1337":"右脉络膜", // Right choroid
  "FJ1338":"右睫状冠", // Right corona ciliaris
  "FJ1339":"右睫状神经节", // Right ciliary ganglion
  "FJ1340":"右角膜", // Right cornea
  "FJ1341":"右额神经", // Right frontal nerve
  "FJ1342":"右总腱环", // Right common tendinous ring
  "FJ1343":"右上睑提肌腱", // Tendon of right levator palpebrae superioris
  "FJ1344":"右动眼神经下支", // Inferior branch of right oculomotor nerve
  "FJ1345":"右下斜肌", // Right inferior oblique
  "FJ1346":"右下直肌", // Right inferior rectus
  "FJ1347":"右滑车下神经", // Right infratrochlear nerve
  "FJ1348":"右虹膜", // Right iris
  "FJ1349":"右泪小管", // Right lacrimal canaliculus
  "FJ1350":"右泪腺", // Right lacrimal gland
  "FJ1351":"右泪腺神经", // Right lacrimal nerve
  "FJ1352":"右泪湖", // Right lacrimal lake
  "FJ1353":"右鼻泪管", // Right nasolacrimal duct
  "FJ1355":"右外直肌", // Right lateral rectus
  "FJ1356":"右晶状体", // Right lens
  "FJ1357":"右上睑提肌", // Right levator palpebrae superioris
  "FJ1359":"右内直肌", // Right medial rectus
  "FJ1360":"右泪囊", // Right lacrimal sac
  "FJ1361":"右鼻睫神经", // Right nasociliary nerve
  "FJ1362":"右鼻睫神经与右睫状神经节交通支", // Communicating branch of right nasociliary nerve with right ciliary ganglion
  "FJ1363":"右眼神经", // Right ophthalmic nerve
  "FJ1364":"右视神经", // Right optic nerve
  "FJ1366":"右筛后神经", // Right posterior ethmoidal nerve
  "FJ1367":"右视网膜视部", // Optic part of right retina
  "FJ1368":"右巩膜", // Right sclera
  "FJ1369":"右睫状长神经", // Right long ciliary nerve
  "FJ1370":"睫状短神经", // Short ciliary nerve
  "FJ1371":"右晶状体悬韧带", // Suspensory ligament of right lens
  "FJ1372":"右动眼神经上支", // Superior branch of right oculomotor nerve
  "FJ1373":"右上斜肌", // Right superior oblique
  "FJ1374":"右上直肌", // Right superior rectus
  "FJ1375":"右上睑睑板", // Tarsal plate of right upper eyelid
  "FJ1376":"右眶上神经", // Right supra-orbital nerve
  "FJ1377":"右滑车上神经", // Right supratrochlear nerve
  "FJ1379":"右下睑睑板", // Tarsal plate of right lower eyelid
  "FJ1380":"右上斜肌滑车", // Trochlea of right superior oblique
  "FJ1381":"右滑车神经", // Right trochlear nerve
  "FJ1382":"右玻璃体", // Right vitreous body
  "FJ1383":"右足第1蚓状肌", // First lumbrical of right foot
  "FJ1383M":"左足第1蚓状肌", // First lumbrical of left foot
  "FJ1384":"右足第1骨间足底肌", // First plantar interosseous of right foot
  "FJ1384M":"左足第1骨间足底肌", // First plantar interosseous of left foot
  "FJ1385":"右足第2蚓状肌", // Second lumbrical of right foot
  "FJ1385M":"左足第2蚓状肌", // Second lumbrical of left foot
  "FJ1386":"右足第2骨间足底肌", // Second plantar interosseous of right foot
  "FJ1386M":"左足第2骨间足底肌", // Second plantar interosseous of left foot
  "FJ1387":"右足第3蚓状肌", // Third lumbrical of right foot
  "FJ1387M":"左足第3蚓状肌", // Third lumbrical of left foot
  "FJ1388":"右足第3骨间足底肌", // Third plantar interosseous of right foot
  "FJ1388M":"左足第3骨间足底肌", // Third plantar interosseous of left foot
  "FJ1389":"右足第4蚓状肌", // Fourth lumbrical of right foot
  "FJ1389M":"左足第4蚓状肌", // Fourth lumbrical of left foot
  "FJ1390":"右足小趾展肌", // Abductor digiti minimi of right foot
  "FJ1390M":"左足小趾展肌", // Abductor digiti minimi of left foot
  "FJ1391":"右足小趾短屈肌", // Flexor digiti minimi brevis of right foot
  "FJ1391M":"左足小趾短屈肌", // Flexor digiti minimi brevis of left foot
  "FJ1392":"右小腿骨间膜", // Interosseous membrane of right leg
  "FJ1392M":"左小腿骨间膜", // Interosseous membrane of left leg
  "FJ1393":"右踇短屈肌外侧头", // Lateral head of right flexor hallucis brevis
  "FJ1393M":"左踇短屈肌外侧头", // Lateral head of left flexor hallucis brevis
  "FJ1394":"右腓肠肌外侧头", // Lateral head of right gastrocnemius
  "FJ1394M":"左腓肠肌外侧头", // Lateral head of left gastrocnemius
  "FJ1395":"右股二头肌长头", // Long head of right biceps femoris
  "FJ1395M":"左股二头肌长头", // Long head of left biceps femoris
  "FJ1396":"右踇短屈肌内侧头", // Medial head of right flexor hallucis brevis
  "FJ1396M":"左踇短屈肌内侧头", // Medial head of left flexor hallucis brevis
  "FJ1397":"右腓肠肌内侧头", // Medial head of right gastrocnemius
  "FJ1397M":"左腓肠肌内侧头", // Medial head of left gastrocnemius
  "FJ1398":"右踇收肌斜头", // Oblique head of right adductor hallucis
  "FJ1398M":"左踇收肌斜头", // Oblique head of left adductor hallucis
  "FJ1399":"右足小趾对跖肌", // Opponens digiti minimi of right foot
  "FJ1399M":"左足小趾对跖肌", // Opponens digiti minimi of left foot
  "FJ1400":"右踇展肌", // Right abductor hallucis
  "FJ1400M":"左踇展肌", // Left abductor hallucis
  "FJ1401":"右短收肌", // Right adductor brevis
  "FJ1401M":"左短收肌", // Left adductor brevis
  "FJ1402":"右长收肌", // Right adductor longus
  "FJ1402M":"左长收肌", // Left adductor longus
  "FJ1403":"右大收肌", // Right adductor magnus
  "FJ1403M":"左大收肌", // Left adductor magnus
  "FJ1404":"右小收肌", // Right adductor minimus
  "FJ1404M":"左小收肌", // Left adductor minimus
  "FJ1405":"右跟腱", // Right calcaneal tendon
  "FJ1405M":"左跟腱", // Left calcaneal tendon
  "FJ1406":"右趾长伸肌", // Right extensor digitorum longus
  "FJ1406M":"左趾长伸肌", // Left extensor digitorum longus
  "FJ1407":"右踇短伸肌", // Right extensor hallucis brevis
  "FJ1407M":"左踇短伸肌", // Left extensor hallucis brevis
  "FJ1408":"右踇长伸肌", // Right extensor hallucis longus
  "FJ1408M":"左踇长伸肌", // Left extensor hallucis longus
  "FJ1409":"右腓骨短肌", // Right fibularis brevis
  "FJ1409M":"左腓骨短肌", // Left fibularis brevis
  "FJ1410":"右腓骨长肌", // Right fibularis longus
  "FJ1410M":"左腓骨长肌", // Left fibularis longus
  "FJ1411":"右第三腓骨肌", // Right fibularis tertius
  "FJ1411M":"左第三腓骨肌", // Left fibularis tertius
  "FJ1412":"右足底方肌", // Right flexor accessorius
  "FJ1412M":"左足底方肌", // Left flexor accessorius
  "FJ1413":"右趾短屈肌", // Right flexor digitorum brevis
  "FJ1413M":"左趾短屈肌", // Left flexor digitorum brevis
  "FJ1414":"右趾长屈肌", // Right flexor digitorum longus
  "FJ1414M":"左趾长屈肌", // Left flexor digitorum longus
  "FJ1415":"右踇长屈肌", // Right flexor hallucis longus
  "FJ1415M":"左踇长屈肌", // Left flexor hallucis longus
  "FJ1416":"右下孖肌", // Right gemellus inferior
  "FJ1416M":"左下孖肌", // Left gemellus inferior
  "FJ1417":"右上孖肌", // Right gemellus superior
  "FJ1417M":"左上孖肌", // Left gemellus superior
  "FJ1418":"右臀大肌", // Right gluteus maximus
  "FJ1418M":"左臀大肌", // Left gluteus maximus
  "FJ1419":"右臀中肌", // Right gluteus medius
  "FJ1419M":"左臀中肌", // Left gluteus medius
  "FJ1420":"右臀小肌", // Right gluteus minimus
  "FJ1420M":"左臀小肌", // Left gluteus minimus
  "FJ1421":"右股薄肌", // Right gracilis
  "FJ1421M":"左股薄肌", // Left gracilis
  "FJ1422":"右髂肌", // Right iliacus
  "FJ1422M":"左髂肌", // Left iliacus
  "FJ1423":"右髂胫束", // Right iliotibial tract
  "FJ1423M":"左髂胫束", // Left iliotibial tract
  "FJ1424":"右足底长韧带", // Right long plantar ligament
  "FJ1424M":"左足底长韧带", // Left long plantar ligament
  "FJ1425":"右闭孔外肌", // Right obturator externus
  "FJ1425M":"左闭孔外肌", // Left obturator externus
  "FJ1426":"右闭孔内肌", // Right obturator internus
  "FJ1426M":"左闭孔内肌", // Left obturator internus
  "FJ1427":"右耻骨肌", // Right pectineus
  "FJ1427M":"左耻骨肌", // Left pectineus
  "FJ1428":"右梨状肌", // Right piriformis
  "FJ1428M":"左梨状肌", // Left piriformis
  "FJ1429":"右跖肌", // Right plantaris
  "FJ1429M":"左跖肌", // Left plantaris
  "FJ1430":"右腘肌", // Right popliteus
  "FJ1430M":"左腘肌", // Left popliteus
  "FJ1431":"右腰大肌", // Right psoas major
  "FJ1431M":"左腰大肌", // Left psoas major
  "FJ1432":"右股方肌", // Right quadratus femoris
  "FJ1432M":"左股方肌", // Left quadratus femoris
  "FJ1433":"右股直肌", // Right rectus femoris
  "FJ1433M":"左股直肌", // Left rectus femoris
  "FJ1434":"右缝匠肌", // Right sartorius
  "FJ1434M":"左缝匠肌", // Left sartorius
  "FJ1435":"右半膜肌", // Right semimembranosus
  "FJ1435M":"左半膜肌", // Left semimembranosus
  "FJ1436":"右半腱肌", // Right semitendinosus
  "FJ1436M":"左半腱肌", // Left semitendinosus
  "FJ1437":"右比目鱼肌", // Right soleus
  "FJ1437M":"左比目鱼肌", // Left soleus
  "FJ1438":"右阔筋膜张肌", // Right tensor fasciae latae
  "FJ1438M":"左阔筋膜张肌", // Left tensor fasciae latae
  "FJ1439":"右胫骨前肌", // Right tibialis anterior
  "FJ1439M":"左胫骨前肌", // Left tibialis anterior
  "FJ1440":"右胫骨后肌", // Right tibialis posterior
  "FJ1440M":"左胫骨后肌", // Left tibialis posterior
  "FJ1441":"右股中间肌", // Right vastus intermedius
  "FJ1441M":"左股中间肌", // Left vastus intermedius
  "FJ1442":"右股外侧肌", // Right vastus lateralis
  "FJ1442M":"左股外侧肌", // Left vastus lateralis
  "FJ1443":"右股内侧肌", // Right vastus medialis
  "FJ1443M":"左股内侧肌", // Left vastus medialis
  "FJ1444":"右股二头肌短头", // Short head of right biceps femoris
  "FJ1444M":"左股二头肌短头", // Short head of left biceps femoris
  "FJ1445":"右踇收肌横头", // Transverse head of right adductor hallucis
  "FJ1445M":"左踇收肌横头", // Transverse head of left adductor hallucis
  "FJ1446":"右胸大肌腹部", // Abdominal part of right pectoralis major
  "FJ1446M":"左胸大肌腹部", // Abdominal part of left pectoralis major
  "FJ1447":"右胸大肌锁骨部", // Clavicular part of right pectoralis major
  "FJ1447M":"左胸大肌锁骨部", // Clavicular part of left pectoralis major
  "FJ1448":"腹白线", // Linea alba
  "FJ1449M":"左尾骨肌", // Left coccygeus
  "FJ1450":"会阴浅肌", // superficial perineal muscle
  "FJ1450M":"肛门外括约肌", // External anal sphincter
  "FJ1451":"肋间外肌", // external intercostal muscle
  "FJ1451M":"肋间外肌", // External intercostal muscle
  "FJ1452":"右腹外斜肌", // Right external oblique
  "FJ1452M":"左腹外斜肌", // Left external oblique
  "FJ1453M":"左髂尾肌", // Left iliococcygeus
  "FJ1454":"肋间最内肌", // innermost intercostal muscle
  "FJ1454M":"肋间最内肌", // Innermost intercostal muscle
  "FJ1455":"肋间内肌", // internal intercostal muscle
  "FJ1455M":"肋间内肌", // Internal intercostal muscle
  "FJ1456":"右胸小肌", // Right pectoralis minor
  "FJ1456M":"左胸小肌", // Left pectoralis minor
  "FJ1457M":"左耻骨尾骨肌", // Left pubococcygeus
  "FJ1458M":"左耻骨直肠肌", // Left puborectalis
  "FJ1459":"右前锯肌", // Right serratus anterior
  "FJ1459M":"左前锯肌", // Left serratus anterior
  "FJ1460":"右锁骨下肌", // Right subclavius
  "FJ1460M":"左锁骨下肌", // Left subclavius
  "FJ1461":"右胸横肌", // Right transversus thoracis
  "FJ1461M":"左胸横肌", // Left transversus thoracis
  "FJ1462":"右肋短提肌群", // Set of right levatores costarum breves
  "FJ1462M":"左肋短提肌群", // Set of left levatores costarum breves
  "FJ1463":"右肋长提肌群", // Set of right levatores costarum longi
  "FJ1463M":"左肋长提肌群", // Set of left levatores costarum longi
  "FJ1464":"右胸大肌胸肋部", // Sternocostal part of right pectoralis major
  "FJ1464M":"左胸大肌胸肋部", // Sternocostal part of left pectoralis major
  "FJ1465":"肛提肌腱弓", // tendinous arch of levator ani
  "FJ1465M":"肛提肌腱弓", // Tendinous arch of levator ani
  "FJ1466":"右手小指展肌", // Abductor digiti minimi of right hand
  "FJ1466M":"左手小指展肌", // Abductor digiti minimi of left hand
  "FJ1467":"右三角肌肩峰部", // Acromial part of right deltoid
  "FJ1467M":"左三角肌肩峰部", // Acromial part of left deltoid
  "FJ1468":"右三角肌锁骨部", // Clavicular part of right deltoid
  "FJ1468M":"左三角肌锁骨部", // Clavicular part of left deltoid
  "FJ1469":"左拇短屈肌", // Left flexor pollicis brevis
  "FJ1469M":"右拇短屈肌", // Right flexor pollicis brevis
  "FJ1470":"右手小指短屈肌", // Flexor digiti minimi brevis of right hand
  "FJ1470M":"左手小指短屈肌", // Flexor digiti minimi brevis of left hand
  "FJ1471":"右屈肌支持带", // Flexor retinaculum of right wrist
  "FJ1471M":"左屈肌支持带", // Flexor retinaculum of left wrist
  "FJ1472":"右尺侧腕伸肌", // Right extensor carpi ulnaris
  "FJ1472M":"左尺侧腕伸肌", // Left extensor carpi ulnaris
  "FJ1473":"右尺侧腕屈肌肱头", // Humeral head of right flexor carpi ulnaris
  "FJ1473M":"左尺侧腕屈肌肱头", // Humeral head of left flexor carpi ulnaris
  "FJ1474":"右旋前圆肌肱头", // Humeral head of right pronator teres
  "FJ1474M":"左旋前圆肌肱头", // Humeral head of left pronator teres
  "FJ1475":"右指浅屈肌", // Right flexor digitorum superficialis
  "FJ1475M":"左指浅屈肌", // Left flexor digitorum superficialis
  "FJ1476":"右前臂骨间膜", // Interosseous membrane of right forearm
  "FJ1476M":"左前臂骨间膜", // Interosseous membrane of left forearm
  "FJ1477":"右肱三头肌外侧头", // Lateral head of right triceps brachii
  "FJ1477M":"左肱三头肌外侧头", // Lateral head of left triceps brachii
  "FJ1478":"右肱二头肌长头", // Long head of right biceps brachii
  "FJ1478M":"左肱二头肌长头", // Long head of left biceps brachii
  "FJ1479":"右肱三头肌长头", // Long head of right triceps brachii
  "FJ1479M":"左肱三头肌长头", // Long head of left triceps brachii
  "FJ1480":"右肱三头肌内侧头", // Medial head of right triceps brachii
  "FJ1480M":"左肱三头肌内侧头", // Medial head of left triceps brachii
  "FJ1481":"右拇收肌斜头", // Oblique head of right adductor pollicis
  "FJ1481M":"左拇收肌斜头", // Oblique head of left adductor pollicis
  "FJ1482":"右手小指对掌肌", // Opponens digiti minimi of right hand
  "FJ1482M":"左手小指对掌肌", // Opponens digiti minimi of left hand
  "FJ1483":"右拇短展肌", // Right abductor pollicis brevis
  "FJ1483M":"左拇短展肌", // Left abductor pollicis brevis
  "FJ1484":"右拇长展肌", // Right abductor pollicis longus
  "FJ1484M":"左拇长展肌", // Left abductor pollicis longus
  "FJ1485":"右肘肌", // Right anconeus
  "FJ1485M":"左肘肌", // Left anconeus
  "FJ1486":"右肱肌", // Right brachialis
  "FJ1486M":"左肱肌", // Left brachialis
  "FJ1487":"右肱桡肌", // Right brachioradialis
  "FJ1487M":"左肱桡肌", // Left brachioradialis
  "FJ1488":"右喙肱肌", // Right coracobrachialis
  "FJ1488M":"左喙肱肌", // Left coracobrachialis
  "FJ1489":"右桡侧腕短伸肌", // Right extensor carpi radialis brevis
  "FJ1489M":"左桡侧腕短伸肌", // Left extensor carpi radialis brevis
  "FJ1490":"右桡侧腕长伸肌", // Right extensor carpi radialis longus
  "FJ1490M":"左桡侧腕长伸肌", // Left extensor carpi radialis longus
  "FJ1491":"右小指伸肌", // Right extensor digiti minimi
  "FJ1491M":"左小指伸肌", // Left extensor digiti minimi
  "FJ1492":"右指伸肌", // Right extensor digitorum
  "FJ1492M":"左指伸肌", // Left extensor digitorum
  "FJ1493":"右示指伸肌", // Right extensor indicis
  "FJ1493M":"左示指伸肌", // Left extensor indicis
  "FJ1494":"右拇短伸肌", // Right extensor pollicis brevis
  "FJ1494M":"左拇短伸肌", // Left extensor pollicis brevis
  "FJ1495":"右拇长伸肌", // Right extensor pollicis longus
  "FJ1495M":"左拇长伸肌", // Left extensor pollicis longus
  "FJ1496":"右桡侧腕屈肌", // Right flexor carpi radialis
  "FJ1496M":"左桡侧腕屈肌", // Left flexor carpi radialis
  "FJ1497":"右指深屈肌", // Right flexor digitorum profundus
  "FJ1497M":"左指深屈肌", // Left flexor digitorum profundus
  "FJ1498":"右拇长屈肌", // Right flexor pollicis longus
  "FJ1498M":"左拇长屈肌", // Left flexor pollicis longus
  "FJ1499":"右指浅屈肌", // Right flexor digitorum superficialis
  "FJ1499M":"左指浅屈肌", // Left flexor digitorum superficialis
  "FJ1500":"右冈下肌", // Right infraspinatus muscle
  "FJ1500M":"左冈下肌", // Left infraspinatus muscle
  "FJ1501":"右拇指对掌肌", // Right opponens pollicis
  "FJ1501M":"左拇指对掌肌", // Left opponens pollicis
  "FJ1502":"右掌长肌", // Right palmaris longus
  "FJ1502M":"左掌长肌", // Left palmaris longus
  "FJ1503":"右旋前方肌", // Right pronator quadratus
  "FJ1503M":"左旋前方肌", // Left pronator quadratus
  "FJ1504":"右肩胛下肌", // Right subscapularis
  "FJ1504M":"左肩胛下肌", // Left subscapularis
  "FJ1505":"右旋后肌", // Right supinator
  "FJ1505M":"左旋后肌", // Left supinator
  "FJ1506":"右冈上肌", // Right supraspinatus
  "FJ1506M":"左冈上肌", // Left supraspinatus
  "FJ1507":"右大圆肌", // Right teres major
  "FJ1507M":"左大圆肌", // Left teres major
  "FJ1508":"右小圆肌", // Right teres minor
  "FJ1508M":"左小圆肌", // Left teres minor
  "FJ1509":"右手骨间背侧肌群", // Set of dorsal interossei of right hand
  "FJ1509M":"左手骨间背侧肌群", // Set of dorsal interossei of left hand
  "FJ1510":"右手蚓状肌群", // Set of lumbricals of right hand
  "FJ1510M":"左手蚓状肌群", // Set of lumbricals of left hand
  "FJ1511":"右手骨间掌侧肌群", // Set of palmar interossei of right hand
  "FJ1511M":"左手骨间掌侧肌群", // Set of palmar interossei of left hand
  "FJ1512":"右肱二头肌短头", // Short head of right biceps brachii
  "FJ1512M":"左肱二头肌短头", // Short head of left biceps brachii
  "FJ1513":"右三角肌脊柱部", // Spinal part of right deltoid
  "FJ1513M":"左三角肌脊柱部", // Spinal part of left deltoid
  "FJ1514":"右拇短屈肌浅头", // Superficial head of right flexor pollicis brevis
  "FJ1514M":"左拇短屈肌浅头", // Superficial head of left flexor pollicis brevis
  "FJ1515":"右拇收肌横头", // Transverse head of right adductor pollicis
  "FJ1515M":"左拇收肌横头", // Transverse head of left adductor pollicis
  "FJ1516":"右旋前圆肌尺头", // Ulnar head of right pronator teres
  "FJ1516M":"左旋前圆肌尺头", // Ulnar head of left pronator teres
  "FJ1517":"右尺侧腕伸肌", // Right extensor carpi ulnaris
  "FJ1517M":"左尺侧腕伸肌", // Left extensor carpi ulnaris
  "FJ1518":"右尺侧腕屈肌尺头", // Ulnar head of right flexor carpi ulnaris
  "FJ1518M":"左尺侧腕屈肌尺头", // Ulnar head of left flexor carpi ulnaris
  "FJ1520":"右斜方肌升部", // Ascending part of right trapezius
  "FJ1520M":"左斜方肌升部", // Ascending part of left trapezius
  "FJ1521":"右斜方肌降部", // Descending part of right trapezius
  "FJ1521M":"左斜方肌降部", // Descending part of left trapezius
  "FJ1522":"右腰回旋肌", // Right lumbar rotator
  "FJ1522M":"左腰回旋肌", // Left lumbar rotator
  "FJ1524":"右颈回旋肌", // Right cervical rotator
  "FJ1524M":"左颈回旋肌", // Left cervical rotator
  "FJ1525":"胸回旋肌", // thoracic rotator
  "FJ1525M":"胸回旋肌", // Thoracic rotator
  "FJ1526":"右颈髂肋肌", // Right iliocostalis cervicis
  "FJ1526M":"左颈髂肋肌", // Left iliocostalis cervicis
  "FJ1527":"右腰髂肋肌", // Right iliocostalis lumborum
  "FJ1527M":"左腰髂肋肌", // Left iliocostalis lumborum
  "FJ1528":"右胸髂肋肌", // Right iliocostalis thoracis
  "FJ1528M":"左胸髂肋肌", // Left iliocostalis thoracis
  "FJ1532":"右肩胛提肌", // Right levator scapulae
  "FJ1532M":"左肩胛提肌", // Left levator scapulae
  "FJ1533":"右头最长肌", // Right longissimus capitis
  "FJ1533M":"左头最长肌", // Left longissimus capitis
  "FJ1534":"右颈最长肌", // Right longissimus cervicis
  "FJ1534M":"左颈最长肌", // Left longissimus cervicis
  "FJ1535":"右胸最长肌", // Right longissimus thoracis
  "FJ1535M":"左胸最长肌", // Left longissimus thoracis
  "FJ1536":"右大菱形肌", // Right rhomboid major
  "FJ1536M":"左大菱形肌", // Left rhomboid major
  "FJ1537":"右小菱形肌", // Right rhomboid minor
  "FJ1537M":"左小菱形肌", // Left rhomboid minor
  "FJ1538":"右头半棘肌", // Right semispinalis capitis
  "FJ1538M":"左头半棘肌", // Left semispinalis capitis
  "FJ1539":"右颈半棘肌", // Right semispinalis cervicis
  "FJ1539M":"左颈半棘肌", // Left semispinalis cervicis
  "FJ1540":"右胸半棘肌", // Right semispinalis thoracis
  "FJ1540M":"左胸半棘肌", // Left semispinalis thoracis
  "FJ1541":"右下后锯肌", // Right serratus posterior inferior
  "FJ1541M":"左下后锯肌", // Left serratus posterior inferior
  "FJ1542":"右上后锯肌", // Right serratus posterior superior
  "FJ1542M":"左上后锯肌", // Left serratus posterior superior
  "FJ1543":"棘肌", // spinalis
  "FJ1543M":"棘肌", // Spinalis
  "FJ1544":"右胸棘肌", // Right spinalis thoracis
  "FJ1544M":"左胸棘肌", // Left spinalis thoracis
  "FJ1545":"右头夹肌", // Right splenius capitis
  "FJ1545M":"左头夹肌", // Left splenius capitis
  "FJ1546":"右颈夹肌", // Right splenius cervicis
  "FJ1546M":"左颈夹肌", // Left splenius cervicis
  "FJ1547":"腰横突间外侧肌", // lateral lumbar intertransversarius
  "FJ1547M":"腰横突间外侧肌", // Lateral lumbar intertransversarius
  "FJ1548":"腰横突间内侧肌", // medial lumbar intertransversarius
  "FJ1548M":"腰横突间内侧肌", // Medial lumbar intertransversarius
  "FJ1549":"颈横突间前肌群", // set of anterior cervical intertransversarii
  "FJ1549M":"颈横突间前肌群", // Set of anterior cervical intertransversarii
  "FJ1550":"腰棘间肌群", // set of interspinales lumborum
  "FJ1550M":"腰棘间肌群", // Set of interspinales lumborum
  "FJ1551":"右胸棘间肌", // Right interspinalis thoracis
  "FJ1551M":"左胸棘间肌", // Left interspinalis thoracis
  "FJ1552":"颈棘间肌群", // set of interspinales cervicis
  "FJ1552M":"颈棘间肌群", // Set of interspinales cervicis
  "FJ1553":"颈横突间后肌群", // set of posterior cervical intertransversarii
  "FJ1553M":"颈横突间后肌群", // Set of posterior cervical intertransversarii
  "FJ1554":"右斜方肌横部", // Transverse part of right trapezius
  "FJ1554M":"左斜方肌横部", // Transverse part of left trapezius
  "FJ1555":"左二腹肌", // Left digastric
  "FJ1556":"右二腹肌", // Right digastric
  "FJ1557":"左颈长肌下斜部", // Inferior oblique part of left longus colli
  "FJ1558":"左颈阔肌", // Left platysma
  "FJ1559":"左颏舌骨肌", // Left geniohyoid
  "FJ1560":"左二腹肌", // Left digastric
  "FJ1561":"左头长肌", // Left longus capitis
  "FJ1562":"左下颌舌骨肌", // Left mylohyoid
  "FJ1563":"左头下斜肌", // Left obliquus capitis inferior
  "FJ1564":"左头上斜肌", // Left obliquus capitis superior
  "FJ1565":"左肩胛舌骨肌", // Left omohyoid
  "FJ1566":"左头前直肌", // Left rectus capitis anterior
  "FJ1567":"左头后大直肌", // Left rectus capitis posterior major
  "FJ1568":"左头后小直肌", // Left rectus capitis posterior minor
  "FJ1569":"左头外侧直肌", // Left rectus capitis lateralis
  "FJ1570":"左前斜角肌", // Left scalenus anterior
  "FJ1571":"左中斜角肌", // Left scalenus medius
  "FJ1572":"左后斜角肌", // Left scalenus posterior
  "FJ1573":"左胸锁乳突肌", // Left sternocleidomastoid
  "FJ1574":"左胸骨舌骨肌", // Left sternohyoid
  "FJ1575":"左胸骨甲状肌", // Left sternothyroid
  "FJ1576":"左茎突舌骨肌", // Left stylohyoid
  "FJ1577":"左甲状舌骨肌", // Left thyrohyoid
  "FJ1578":"左二腹肌", // Left digastric
  "FJ1579":"右二腹肌", // Right digastric
  "FJ1580":"右颏舌骨肌", // Right geniohyoid
  "FJ1581":"右中间腱", // Right intermediate tendon
  "FJ1582":"右头长肌", // Right longus capitis
  "FJ1583":"右下颌舌骨肌", // Right mylohyoid
  "FJ1584":"右头下斜肌", // Right obliquus capitis inferior
  "FJ1585":"右头上斜肌", // Right obliquus capitis superior
  "FJ1586":"右肩胛舌骨肌", // Right omohyoid
  "FJ1587":"右颈阔肌", // Right platysma
  "FJ1588":"右头前直肌", // Right rectus capitis anterior
  "FJ1589":"右头后大直肌", // Right rectus capitis posterior major
  "FJ1590":"右头后小直肌", // Right rectus capitis posterior minor
  "FJ1591":"右头外侧直肌", // Right rectus capitis lateralis
  "FJ1592":"右前斜角肌", // Right scalenus anterior
  "FJ1593":"右中斜角肌", // Right scalenus medius
  "FJ1594":"右后斜角肌", // Right scalenus posterior
  "FJ1595":"右胸锁乳突肌", // Right sternocleidomastoid
  "FJ1596":"右胸骨舌骨肌", // Right sternohyoid
  "FJ1597":"右胸骨甲状肌", // Right sternothyroid
  "FJ1598":"右茎突舌骨肌", // Right stylohyoid
  "FJ1599":"右甲状舌骨肌", // Right thyrohyoid
  "FJ1600":"左颈长肌上斜部", // Superior oblique part of left longus colli
  "FJ1601":"左颈长肌垂直中间部", // Vertical intermediate part of left longus colli
  "FJ1654":"右大脑前动脉", // Right anterior cerebral artery
  "FJ1654M":"左大脑前动脉", // Left anterior cerebral artery
  "FJ1655":"前交通动脉", // Anterior communicating artery
  "FJ1656":"小脑前下动脉", // anterior inferior cerebellar artery
  "FJ1656M":"小脑前下动脉", // Anterior inferior cerebellar artery
  "FJ1657":"右脊髓前动脉", // Right anterior spinal artery
  "FJ1657M":"左脊髓前动脉", // Left anterior spinal artery
  "FJ1658":"右脉络丛前动脉", // Right anterior choroidal artery
  "FJ1658M":"左脉络丛前动脉", // Left anterior choroidal artery
  "FJ1659":"右颞前动脉", // Right anterior temporal artery
  "FJ1659M":"左颞前动脉", // Left anterior temporal artery
  "FJ1660":"右大脑中动脉岛部", // Insular part of right middle cerebral artery
  "FJ1660M":"左大脑中动脉岛部", // Insular part of left middle cerebral artery
  "FJ1661":"右枕外侧动脉颞前支", // Anterior temporal branch of right lateral occipital artery
  "FJ1661M":"左枕外侧动脉颞前支", // Anterior temporal branch of left lateral occipital artery
  "FJ1662":"右大脑中动脉前外侧中央支", // Anterolateral central branch of right middle cerebral artery
  "FJ1662M":"左大脑中动脉前外侧中央支", // Anterolateral central branch of left middle cerebral artery
  "FJ1663":"右大脑中动脉前外侧中央支", // Anterolateral central branch of right middle cerebral artery
  "FJ1663M":"左大脑中动脉前外侧中央支", // Anterolateral central branch of left middle cerebral artery
  "FJ1664":"中央沟动脉", // artery of central sulcus
  "FJ1664M":"中央沟动脉", // Artery of central sulcus
  "FJ1665":"中央沟动脉", // artery of central sulcus
  "FJ1665M":"中央沟动脉", // Artery of central sulcus
  "FJ1666":"右中央后沟动脉", // Artery of right postcentral sulcus
  "FJ1666M":"左中央后沟动脉", // Artery of left postcentral sulcus
  "FJ1667":"右顶前动脉", // Right anterior parietal artery
  "FJ1667M":"左顶前动脉", // Left anterior parietal artery
  "FJ1668":"右中央前沟动脉", // Artery of right precentral sulcus
  "FJ1668M":"左中央前沟动脉", // Artery of left precentral sulcus
  "FJ1669":"右中央前沟动脉", // Artery of right precentral sulcus
  "FJ1669M":"左中央前沟动脉", // Artery of left precentral sulcus
  "FJ1670":"右中央前沟动脉", // Artery of right precentral sulcus
  "FJ1670M":"左中央前沟动脉", // Artery of left precentral sulcus
  "FJ1671":"右胼周动脉楔前支", // Precuneal branch of right pericallosal artery
  "FJ1671M":"左胼周动脉楔前支", // Precuneal branch of left pericallosal artery
  "FJ1672":"基底动脉", // Basilar artery
  "FJ1673":"右大脑中动脉至右角回支", // Branch of right middle cerebral artery to right angular gyrus
  "FJ1673M":"左大脑中动脉至左角回支", // Branch of left middle cerebral artery to left angular gyrus
  "FJ1674":"右脉络丛前动脉至右内囊后肢支", // Branch of right anterior choroidal artery to posterior limb of right internal capsule
  "FJ1674M":"左脉络丛前动脉至左内囊后肢支", // Branch of left anterior choroidal artery to posterior limb of left internal capsule
  "FJ1675":"右丘脑膝状体动脉", // Right thalamogeniculate artery
  "FJ1675M":"左丘脑膝状体动脉", // Left thalamogeniculate artery
  "FJ1676":"右胼缘动脉", // Right callosomarginal artery
  "FJ1676M":"左胼缘动脉", // Left callosomarginal artery
  "FJ1677":"右胼胝体压部动脉", // Right splenial artery
  "FJ1677M":"左胼胝体压部动脉", // Left splenial artery
  "FJ1678":"右胼胝体压部动脉", // Right splenial artery
  "FJ1678M":"左胼胝体压部动脉", // Left splenial artery
  "FJ1679":"右后交通动脉下丘脑支", // Hypothalamic branch of right posterior communicating artery
  "FJ1679M":"左后交通动脉下丘脑支", // Hypothalamic branch of left posterior communicating artery
  "FJ1680":"右枕外侧动脉颞中支", // Middle temporal branch of right lateral occipital artery
  "FJ1680M":"左枕外侧动脉颞中支", // Middle temporal branch of left lateral occipital artery
  "FJ1681":"右胼缘动脉中间内侧支", // Intermediomedial branch of right callosomarginal artery
  "FJ1681M":"左胼缘动脉中间内侧支", // Intermediomedial branch of left callosomarginal artery
  "FJ1682":"右颈内动脉", // Right internal carotid artery
  "FJ1682M":"左颈内动脉", // Left internal carotid artery
  "FJ1683":"右小脑上动脉外侧支", // Lateral branch of right superior cerebellar artery
  "FJ1683M":"左小脑上动脉外侧支", // Lateral branch of left superior cerebellar artery
  "FJ1684":"右脑桥动脉外侧支", // Lateral branch of right pontine artery
  "FJ1684M":"左脑桥动脉外侧支", // Lateral branch of left pontine artery
  "FJ1685":"右额底外侧动脉", // Right lateral frontobasal artery
  "FJ1685M":"左额底外侧动脉", // Left lateral frontobasal artery
  "FJ1686":"右额底外侧动脉", // Right lateral frontobasal artery
  "FJ1686M":"左额底外侧动脉", // Left lateral frontobasal artery
  "FJ1687":"右枕外侧动脉", // Right lateral occipital artery
  "FJ1687M":"左枕外侧动脉", // Left lateral occipital artery
  "FJ1688":"右小脑上动脉内侧支", // Medial branch of right superior cerebellar artery
  "FJ1688M":"左小脑上动脉内侧支", // Medial branch of left superior cerebellar artery
  "FJ1689":"右脑桥动脉内侧支", // Medial branch of right pontine artery
  "FJ1689M":"左脑桥动脉内侧支", // Medial branch of left pontine artery
  "FJ1690":"右额底内侧动脉", // Right medial frontobasal artery
  "FJ1690M":"左额底内侧动脉", // Left medial frontobasal artery
  "FJ1691":"右枕内侧动脉", // Right medial occipital artery
  "FJ1691M":"左枕内侧动脉", // Left medial occipital artery
  "FJ1692":"右大脑中动脉蝶部", // Sphenoid part of right middle cerebral artery
  "FJ1692M":"左大脑中动脉蝶部", // Sphenoid part of left middle cerebral artery
  "FJ1693":"右大脑中动脉颞中支", // Middle temporal branch of right middle cerebral artery
  "FJ1693M":"左大脑中动脉颞中支", // Middle temporal branch of left middle cerebral artery
  "FJ1694":"右大脑中动脉岛部", // Insular part of right middle cerebral artery
  "FJ1694M":"左大脑中动脉岛部", // Insular part of left middle cerebral artery
  "FJ1695":"右眼动脉", // Right ophthalmic artery
  "FJ1695M":"左眼动脉", // Left ophthalmic artery
  "FJ1696":"右胼缘动脉中央旁支", // Paracentral branch of right callosomarginal artery
  "FJ1696M":"左胼缘动脉中央旁支", // Paracentral branch of left callosomarginal artery
  "FJ1697":"右胼缘动脉中央旁支", // Paracentral branch of right callosomarginal artery
  "FJ1697M":"左胼缘动脉中央旁支", // Paracentral branch of left callosomarginal artery
  "FJ1698":"右胼缘动脉中央旁支", // Paracentral branch of right callosomarginal artery
  "FJ1698M":"左胼缘动脉中央旁支", // Paracentral branch of left callosomarginal artery
  "FJ1699":"右胼周动脉", // Right pericallosal artery
  "FJ1699M":"左胼周动脉", // Left pericallosal artery
  "FJ1700":"右小脑后下动脉", // Right posterior inferior cerebellar artery
  "FJ1700M":"左小脑后下动脉", // Left posterior inferior cerebellar artery
  "FJ1701":"右小脑后下动脉", // Right posterior inferior cerebellar artery
  "FJ1701M":"左小脑后下动脉", // Left posterior inferior cerebellar artery
  "FJ1702":"右小脑后下动脉", // Right posterior inferior cerebellar artery
  "FJ1702M":"左小脑后下动脉", // Left posterior inferior cerebellar artery
  "FJ1703":"右小脑后下动脉", // Right posterior inferior cerebellar artery
  "FJ1703M":"左小脑后下动脉", // Left posterior inferior cerebellar artery
  "FJ1704":"右小脑后下动脉", // Right posterior inferior cerebellar artery
  "FJ1704M":"左小脑后下动脉", // Left posterior inferior cerebellar artery
  "FJ1705":"右小脑后下动脉", // Right posterior inferior cerebellar artery
  "FJ1705M":"左小脑后下动脉", // Left posterior inferior cerebellar artery
  "FJ1706":"右小脑后下动脉", // Right posterior inferior cerebellar artery
  "FJ1706M":"左小脑后下动脉", // Left posterior inferior cerebellar artery
  "FJ1707":"右小脑后下动脉", // Right posterior inferior cerebellar artery
  "FJ1707M":"左小脑后下动脉", // Left posterior inferior cerebellar artery
  "FJ1708":"右小脑后下动脉", // Right posterior inferior cerebellar artery
  "FJ1708M":"左小脑后下动脉", // Left posterior inferior cerebellar artery
  "FJ1709":"右小脑后下动脉", // Right posterior inferior cerebellar artery
  "FJ1709M":"左小脑后下动脉", // Left posterior inferior cerebellar artery
  "FJ1710":"右小脑后下动脉", // Right posterior inferior cerebellar artery
  "FJ1710M":"左小脑后下动脉", // Left posterior inferior cerebellar artery
  "FJ1711":"右小脑后下动脉", // Right posterior inferior cerebellar artery
  "FJ1711M":"左小脑后下动脉", // Left posterior inferior cerebellar artery
  "FJ1712":"右颞极动脉", // Right polar temporal artery
  "FJ1712M":"左颞极动脉", // Left polar temporal artery
  "FJ1713":"右后交通动脉", // Right posterior communicating artery
  "FJ1713M":"左后交通动脉", // Left posterior communicating artery
  "FJ1714":"右大脑后动脉交通后部", // Postcommunicating part of right posterior cerebral artery
  "FJ1714M":"左大脑后动脉交通后部", // Postcommunicating part of left posterior cerebral artery
  "FJ1715":"右小脑后下动脉", // Right posterior inferior cerebellar artery
  "FJ1715M":"左小脑后下动脉", // Left posterior inferior cerebellar artery
  "FJ1716":"右顶后动脉", // Right posterior parietal artery
  "FJ1716M":"左顶后动脉", // Left posterior parietal artery
  "FJ1717":"右大脑中动脉颞后支", // Posterior temporal branch of right middle cerebral artery
  "FJ1717M":"左大脑中动脉颞后支", // Posterior temporal branch of left middle cerebral artery
  "FJ1718":"右大脑中动脉下终支主干", // Trunk of inferior terminal branch of right middle cerebral artery
  "FJ1718M":"左大脑中动脉下终支主干", // Trunk of inferior terminal branch of left middle cerebral artery
  "FJ1719":"枕外侧动脉颞后支群", // set of posterior temporal branches of lateral occipital artery
  "FJ1719M":"枕外侧动脉颞后支群", // Set of posterior temporal branches of lateral occipital artery
  "FJ1720":"右丘脑穿动脉", // Right thalamoperforating artery
  "FJ1720M":"左丘脑穿动脉", // Left thalamoperforating artery
  "FJ1721":"右大脑后动脉后内侧中央支", // Posteromedial central branch of right posterior cerebral artery
  "FJ1721M":"左大脑后动脉后内侧中央支", // Posteromedial central branch of left posterior cerebral artery
  "FJ1722":"右胼缘动脉后内侧支", // Posteromedial branch of right callosomarginal artery
  "FJ1722M":"左胼缘动脉后内侧支", // Posteromedial branch of left callosomarginal artery
  "FJ1723":"右大脑后动脉交通前部", // Precommunicating part of right posterior cerebral artery
  "FJ1723M":"左大脑后动脉交通前部", // Precommunicating part of left posterior cerebral artery
  "FJ1724":"右额前动脉", // Right prefrontal artery
  "FJ1724M":"左额前动脉", // Left prefrontal artery
  "FJ1725":"右椎动脉", // Right vertebral artery
  "FJ1725M":"左椎动脉", // Left vertebral artery
  "FJ1726":"右小脑上动脉", // Right superior cerebellar artery
  "FJ1726M":"左小脑上动脉", // Left superior cerebellar artery
  "FJ1727":"右脉络膜后内侧动脉", // Right posterior medial choroidal artery
  "FJ1727M":"左脉络膜后内侧动脉", // Left posterior medial choroidal artery
  "FJ1728":"右小脑上动脉内侧支蚓上支", // Superior vermian branch of medial branch of right superior cerebellar artery
  "FJ1728M":"左小脑上动脉内侧支蚓上支", // Superior vermian branch of medial branch of left superior cerebellar artery
  "FJ1729":"右大脑中动脉颞枕支", // Temporo-occipital branch of right middle cerebral artery
  "FJ1729M":"左大脑中动脉颞枕支", // Temporo-occipital branch of left middle cerebral artery
  "FJ1730":"第三脑室", // Third ventricle
  "FJ1731":"第四脑室", // Fourth ventricle
  "FJ1732":"左角回", // Left angular gyrus
  "FJ1733":"右角回", // Right angular gyrus
  "FJ1734":"前连合", // Anterior commissure
  "FJ1735":"左上丘臂", // Brachium of left superior colliculus
  "FJ1736":"右上丘臂", // Brachium of right superior colliculus
  "FJ1737":"脊髓中央管", // Central canal of spinal cord
  "FJ1738":"中脑导水管", // Cerebral aqueduct
  "FJ1739":"左扣带回", // Left cingulate gyrus
  "FJ1740":"右扣带回", // Right cingulate gyrus
  "FJ1741":"前脑穹窿连合", // Commissure of fornix of forebrain
  "FJ1742":"胼胝体", // Corpus callosum
  "FJ1743":"缰", // Habenula
  "FJ1744":"左额下回", // Left inferior frontal gyrus
  "FJ1745":"右额下回", // Right inferior frontal gyrus
  "FJ1746":"左颞下回", // Left inferior temporal gyrus
  "FJ1747":"右颞下回", // Right inferior temporal gyrus
  "FJ1748":"左岛叶", // Left insula
  "FJ1749":"右岛叶", // Right insula
  "FJ1750":"左内囊", // Left internal capsule
  "FJ1751":"右内囊", // Right internal capsule
  "FJ1752":"室间孔", // Interventricular foramen
  "FJ1753":"左杏仁体", // Left amygdala
  "FJ1754":"左尾状核", // Left caudate nucleus
  "FJ1755":"大脑半球脉络丛", // Choroid plexus of cerebral hemisphere
  "FJ1756":"左前脑穹窿", // Left fornix of forebrain
  "FJ1757":"左苍白球", // Left globus pallidus
  "FJ1758":"左大脑半球白质", // White matter of left cerebral hemisphere
  "FJ1759":"左海马", // Left hippocampus
  "FJ1760":"下丘脑", // Hypothalamus
  "FJ1761":"左下丘臂", // Brachium of left inferior colliculus
  "FJ1762":"左下丘", // Left inferior colliculus
  "FJ1763":"脚间窝", // Interpeduncular fossa
  "FJ1764":"终板", // Lamina terminalis
  "FJ1766":"左外侧膝状体", // Left lateral geniculate body
  "FJ1767":"左侧脑室", // Left lateral ventricle
  "FJ1768":"乳头体", // Mammillary body
  "FJ1769":"延髓", // Medulla oblongata
  "FJ1770":"中脑", // Midbrain
  "FJ1771":"视交叉", // Optic chiasm
  "FJ1772":"左视神经", // Left optic nerve
  "FJ1773":"左视束", // Left optic tract
  "FJ1774":"中脑脚", // Peduncle of midbrain
  "FJ1775":"脑桥", // Pons
  "FJ1776":"左壳核", // Left putamen
  "FJ1777":"左丘脑髓纹", // Left stria medullaris of thalamus
  "FJ1778":"左终纹", // Left stria terminalis
  "FJ1779":"左上丘", // Left superior colliculus
  "FJ1780":"灰结节", // Tuber cinereum
  "FJ1781":"小脑", // Cerebellum
  "FJ1782":"左丘脑", // Left thalamus
  "FJ1783":"左梭状回", // Left fusiform gyrus
  "FJ1784":"右梭状回", // Right fusiform gyrus
  "FJ1785":"左海马旁回", // Left parahippocampal gyrus
  "FJ1786":"右海马旁回", // Right parahippocampal gyrus
  "FJ1787":"左额中回", // Left middle frontal gyrus
  "FJ1788":"右额中回", // Right middle frontal gyrus
  "FJ1789":"左颞中回", // Left middle temporal gyrus
  "FJ1790":"右颞中回", // Right middle temporal gyrus
  "FJ1791":"左枕叶", // Left occipital lobe
  "FJ1792":"右枕叶", // Right occipital lobe
  "FJ1793":"眶回", // Orbital gyrus
  "FJ1794":"眶回", // Orbital gyrus
  "FJ1795":"松果体", // Pineal body
  "FJ1796":"垂体", // Pituitary gland
  "FJ1797":"左中央后回", // Left postcentral gyrus
  "FJ1798":"右中央后回", // Right postcentral gyrus
  "FJ1799":"后连合", // Posterior commissure
  "FJ1800":"左中央前回", // Left precentral gyrus
  "FJ1801":"右中央前回", // Right precentral gyrus
  "FJ1802":"右尾状核", // Right caudate nucleus
  "FJ1803":"大脑半球脉络丛", // Choroid plexus of cerebral hemisphere
  "FJ1804":"右前脑穹窿", // Right fornix of forebrain
  "FJ1805":"右苍白球", // Right globus pallidus
  "FJ1806":"右大脑半球白质", // White matter of right cerebral hemisphere
  "FJ1807":"右海马", // Right hippocampus
  "FJ1808":"下丘脑", // Hypothalamus
  "FJ1809":"右下丘臂", // Brachium of right inferior colliculus
  "FJ1810":"右下丘", // Right inferior colliculus
  "FJ1811":"脚间窝", // Interpeduncular fossa
  "FJ1812":"终板", // Lamina terminalis
  "FJ1813":"右外侧膝状体", // Right lateral geniculate body
  "FJ1814":"右侧脑室", // Right lateral ventricle
  "FJ1815":"乳头体", // Mammillary body
  "FJ1816":"右内侧膝状体", // Right medial geniculate body
  "FJ1816M":"左内侧膝状体", // Left medial geniculate body
  "FJ1817":"中脑", // Midbrain
  "FJ1818":"视交叉", // Optic chiasm
  "FJ1819":"右视神经", // Right optic nerve
  "FJ1820":"右视束", // Right optic tract
  "FJ1821":"中脑脚", // Peduncle of midbrain
  "FJ1822":"脑桥", // Pons
  "FJ1823":"右壳核", // Right putamen
  "FJ1824":"右丘脑髓纹", // Right stria medullaris of thalamus
  "FJ1825":"终纹", // Stria terminalis
  "FJ1826":"右上丘", // Right superior colliculus
  "FJ1827":"右丘脑", // Right thalamus
  "FJ1828":"灰结节", // Tuber cinereum
  "FJ1829":"右杏仁体", // Right amygdala
  "FJ1830":"小脑", // Cerebellum
  "FJ1831":"延髓", // Medulla oblongata
  "FJ1832":"端脑中隔", // Septum of telencephalon
  "FJ1833":"左额上回", // Left superior frontal gyrus
  "FJ1834":"右额上回", // Right superior frontal gyrus
  "FJ1835":"左顶上小叶", // Left superior parietal lobule
  "FJ1836":"右顶上小叶", // Right superior parietal lobule
  "FJ1837":"左颞上回前部", // Anterior part of left superior temporal gyrus
  "FJ1838":"右颞上回前部", // Anterior part of right superior temporal gyrus
  "FJ1839":"左颞上回后部", // Posterior part of left superior temporal gyrus
  "FJ1840":"右颞上回后部", // Posterior part of right superior temporal gyrus
  "FJ1841":"左缘上回", // Left supramarginal gyrus
  "FJ1842":"右缘上回", // Right supramarginal gyrus
  "FJ1843":"小脑幕", // Tentorium cerebelli
  "FJ1844":"基底动脉", // Basilar artery
  "FJ1846":"腹腔动脉", // Celiac artery
  "FJ1853":"肝门静脉", // Hepatic portal vein
  "FJ1858":"肝段IX", // Hepatovenous segment IX
  "FJ1867":"肝中静脉属支", // Tributary of middle hepatic vein
  "FJ1874":"左肝动脉左叶支", // Left lobe branch of left hepatic artery
  "FJ1883":"左肝胆管树尾状叶属支", // Caudate lobe tributary of left hepatic biliary tree
  "FJ1893":"左门静脉", // Left portal vein
  "FJ1895":"胰", // Pancreas
  "FJ1896":"胰管", // Pancreatic duct
  "FJ1913":"右门静脉", // Right portal vein
  "FJ1914":"右门静脉尾状叶支", // Caudate lobe branch of right portal vein
  "FJ1916":"右肝动脉尾状叶支", // Caudate lobe branch of right hepatic artery
  "FJ1924":"右肝动脉右叶支", // Right lobe branch of right hepatic artery
  "FJ1928":"肠系膜上动脉", // Superior mesenteric artery
  "FJ1931":"胸降主动脉", // Descending thoracic aorta
  "FJ1932":"腹主动脉", // Abdominal aorta
  "FJ1933":"支气管动脉", // Bronchial artery
  "FJ1934":"食管动脉", // Esophageal artery
  "FJ1935":"右肋间上动脉", // Right superior intercostal artery
  "FJ1936":"右腹壁上动脉", // Right superior epigastric artery
  "FJ1937":"右胸廓内动脉", // Right internal thoracic artery
  "FJ1938":"右胸外侧动脉", // Right lateral thoracic artery
  "FJ1939":"右第1肋间后动脉", // Right first posterior intercostal artery
  "FJ1950":"右第2肋间后动脉", // Right second posterior intercostal artery
  "FJ1961":"肋间后动脉", // Posterior intercostal arteries
  "FJ1967":"右肋下动脉", // Right subcostal artery
  "FJ1969":"右肌膈动脉", // Right musculophrenic artery
  "FJ1970":"左肋间上动脉", // Left superior intercostal artery
  "FJ1971":"左腹壁上动脉", // Left superior epigastric artery
  "FJ1972":"左胸廓内动脉", // Left internal thoracic artery
  "FJ1973":"左第1肋间后动脉", // Left first posterior intercostal artery
  "FJ1974":"左第2肋间后动脉", // Left second posterior intercostal artery
  "FJ1975":"肋间后动脉", // Posterior intercostal arteries
  "FJ1976":"左胸外侧动脉", // Left lateral thoracic artery
  "FJ1977":"左肋下动脉", // Left subcostal artery
  "FJ1979":"左肌膈动脉", // Left musculophrenic artery
  "FJ1981":"副半奇静脉", // Accessory hemiazygos vein
  "FJ1985":"肋间前静脉群", // Set of anterior intercostal veins
  "FJ1986":"左肋间上静脉", // Left superior intercostal vein
  "FJ1987":"左肋下静脉", // Left subcostal vein
  "FJ1988":"左肌膈静脉", // Left musculophrenic vein
  "FJ1991":"右肋间上静脉", // Right superior intercostal vein
  "FJ1993":"右胸廓内静脉", // Right internal thoracic vein
  "FJ1994":"肋间前静脉群", // Set of anterior intercostal veins
  "FJ1995":"右肋下静脉", // Right subcostal vein
  "FJ1996":"右肌膈静脉", // Right musculophrenic vein
  "FJ2011":"肠系膜上动脉", // Superior mesenteric artery
  "FJ2013":"腹腔动脉", // Celiac artery
  "FJ2025":"结肠边缘动脉", // Marginal colic artery
  "FJ2034":"回结肠动脉下支回肠支", // Ileal branch of inferior branch of ileocolic artery
  "FJ2038":"右肾动脉", // Right renal artery
  "FJ2041":"右前段动脉", // Right anterior segmental artery
  "FJ2042":"右肾动脉上段支", // Superior segmental branch of right renal artery
  "FJ2043":"右肾动脉下段支", // Inferior segmental branch of right renal artery
  "FJ2044":"右前段动脉", // Right anterior segmental artery
  "FJ2045":"右肾动脉后段支", // Posterior segmental branch of right renal artery
  "FJ2046":"左肾动脉", // Left renal artery
  "FJ2049":"左肾动脉下段支", // Inferior segmental branch of left renal artery
  "FJ2052":"左肾动脉上段支", // Superior segmental branch of left renal artery
  "FJ2053":"左肾动脉后段支", // Posterior segmental branch of left renal artery
  "FJ2054":"左肾动脉后段支", // Posterior segmental branch of left renal artery
  "FJ2055":"右足背动脉", // Right dorsalis pedis artery
  "FJ2056":"阴茎背深静脉", // Deep dorsal vein of penis
  "FJ2057":"右旋股外侧动脉降支", // Descending branch of right lateral circumflex femoral artery
  "FJ2058":"远侧穿动脉", // Distal perforating artery
  "FJ2059":"左足背静脉弓", // Dorsal venous arch of left foot
  "FJ2060":"左足背静脉弓", // Dorsal venous arch of left foot
  "FJ2061":"右足背静脉弓", // Dorsal venous arch of right foot
  "FJ2062":"右足背静脉弓", // Dorsal venous arch of right foot
  "FJ2063":"左旋股外侧动脉降支", // Descending branch of left lateral circumflex femoral artery
  "FJ2064":"远侧穿动脉", // Distal perforating artery
  "FJ2065":"左胫前动脉", // Left anterior tibial artery
  "FJ2066":"左胫前返动脉", // Left anterior tibial recurrent artery
  "FJ2067":"左弓状动脉", // Left arcuate artery
  "FJ2068":"左足底深动脉", // Left deep plantar artery
  "FJ2069":"左膝降动脉", // Left descending genicular artery
  "FJ2072":"足趾背动脉", // Dorsal digital artery of foot
  "FJ2073":"左足背动脉", // Left dorsalis pedis artery
  "FJ2074":"左股动脉", // Left femoral artery
  "FJ2076":"左膝下外侧动脉", // Left inferior lateral genicular artery
  "FJ2077":"左膝下内侧动脉", // Left inferior medial genicular artery
  "FJ2078":"左旋股外侧动脉", // Left lateral circumflex femoral artery
  "FJ2079":"左足底外侧动脉", // Left lateral plantar artery
  "FJ2080":"左膝上外侧动脉", // Left lateral superior genicular artery
  "FJ2081":"左跗外侧动脉", // Left lateral tarsal artery
  "FJ2082":"左足底内侧动脉", // Left medial plantar artery
  "FJ2083":"左膝上内侧动脉", // Left medial superior genicular artery
  "FJ2084":"左膝中动脉", // Left middle genicular artery
  "FJ2085":"左足底弓", // Left plantar arch
  "FJ2086":"左腘动脉", // Left popliteal artery
  "FJ2087":"左胫后动脉", // Left posterior tibial artery
  "FJ2089":"左足底内侧浅动脉", // Left superficial medial plantar artery
  "FJ2090":"穿动脉群", // Set of perforating arteries
  "FJ2091":"胫后动脉跟支群", // Set of calcaneal branches of posterior tibial artery
  "FJ2092":"趾足底总动脉群", // Set of common plantar digital arteries
  "FJ2093":"趾背动脉群", // Set of dorsal digital arteries
  "FJ2094":"穿动脉群", // Set of perforating arteries
  "FJ2095":"趾足底固有动脉群", // Set of plantar digital arteries proper
  "FJ2096":"足底跖动脉", // Plantar metatarsal artery
  "FJ2097":"左胫前静脉", // Left anterior tibial vein
  "FJ2099":"左股深静脉", // Left deep femoral vein
  "FJ2100":"穿静脉群", // Set of perforating veins
  "FJ2102":"左股静脉", // Left femoral vein
  "FJ2103":"左大隐静脉", // Left great saphenous vein
  "FJ2107":"左膝静脉", // Left genicular vein
  "FJ2108":"左膝静脉", // Left genicular vein
  "FJ2113":"足底静脉弓属支", // Tributary of plantar venous arch
  "FJ2115":"足底静脉弓属支", // Tributary of plantar venous arch
  "FJ2117":"左腘静脉", // Left popliteal vein
  "FJ2118":"左胫后静脉", // Left posterior tibial vein
  "FJ2119":"穿静脉群", // Set of perforating veins
  "FJ2120":"趾足底静脉群", // Set of plantar digital veins
  "FJ2121":"左小隐静脉", // Left small saphenous vein
  "FJ2122":"左腹壁浅静脉", // Left superficial epigastric vein
  "FJ2124":"左膝静脉", // Left genicular vein
  "FJ2125":"左膝静脉", // Left genicular vein
  "FJ2127":"穿动脉群", // Set of perforating arteries
  "FJ2128":"左足足底静脉弓", // Plantar venous arch of left foot
  "FJ2129":"右足足底静脉弓", // Plantar venous arch of right foot
  "FJ2130":"右胫前动脉", // Right anterior tibial artery
  "FJ2131":"右胫前返动脉", // Right anterior tibial recurrent artery
  "FJ2132":"右胫前静脉", // Right anterior tibial vein
  "FJ2133":"右弓状动脉", // Right arcuate artery
  "FJ2135":"右股深静脉", // Right deep femoral vein
  "FJ2136":"右足底深动脉", // Right deep plantar artery
  "FJ2137":"右膝降动脉", // Right descending genicular artery
  "FJ2138":"穿静脉群", // Set of perforating veins
  "FJ2141":"足趾背动脉", // Dorsal digital artery of foot
  "FJ2143":"右股动脉", // Right femoral artery
  "FJ2144":"右股静脉", // Right femoral vein
  "FJ2145":"右大隐静脉", // Right great saphenous vein
  "FJ2150":"右膝下外侧动脉", // Right inferior lateral genicular artery
  "FJ2151":"右膝静脉", // Right genicular vein
  "FJ2152":"右膝下内侧动脉", // Right inferior medial genicular artery
  "FJ2153":"右膝静脉", // Right genicular vein
  "FJ2158":"右旋股外侧动脉", // Right lateral circumflex femoral artery
  "FJ2159":"右足底外侧动脉", // Right lateral plantar artery
  "FJ2160":"足底静脉弓属支", // Tributary of plantar venous arch
  "FJ2162":"右膝上外侧动脉", // Right lateral superior genicular artery
  "FJ2163":"右跗外侧动脉", // Right lateral tarsal artery
  "FJ2164":"右足底内侧动脉", // Right medial plantar artery
  "FJ2165":"足底静脉弓属支", // Tributary of plantar venous arch
  "FJ2166":"右膝上内侧动脉", // Right medial superior genicular artery
  "FJ2167":"右膝中动脉", // Right middle genicular artery
  "FJ2169":"右足底弓", // Right plantar arch
  "FJ2170":"右腘动脉", // Right popliteal artery
  "FJ2171":"右腘静脉", // Right popliteal vein
  "FJ2172":"右胫后动脉", // Right posterior tibial artery
  "FJ2173":"右胫后静脉", // Right posterior tibial vein
  "FJ2174":"穿静脉群", // Set of perforating veins
  "FJ2175":"趾足底静脉群", // Set of plantar digital veins
  "FJ2176":"右小隐静脉", // Right small saphenous vein
  "FJ2178":"右腹壁浅静脉", // Right superficial epigastric vein
  "FJ2179":"右足底内侧浅动脉", // Right superficial medial plantar artery
  "FJ2181":"右膝静脉", // Right genicular vein
  "FJ2182":"右膝静脉", // Right genicular vein
  "FJ2183":"左胫前静脉", // Left anterior tibial vein
  "FJ2184":"左腓静脉", // Left fibular vein
  "FJ2185":"趾背静脉群", // Set of dorsal digital veins
  "FJ2186":"掌背静脉", // Dorsal metacarpal vein
  "FJ2187":"左腓静脉", // Left fibular vein
  "FJ2188":"左旋股外侧静脉", // Left lateral circumflex femoral vein
  "FJ2189":"左旋股内侧静脉", // Left medial circumflex femoral vein
  "FJ2190":"右腓静脉", // Right fibular vein
  "FJ2191":"足底跖静脉", // Plantar metatarsal vein
  "FJ2192":"穿静脉群", // Set of perforating veins
  "FJ2193":"右胫前静脉", // Right anterior tibial vein
  "FJ2194":"右腓静脉", // Right fibular vein
  "FJ2195":"胫后动脉跟支群", // Set of calcaneal branches of posterior tibial artery
  "FJ2196":"趾足底总动脉群", // Set of common plantar digital arteries
  "FJ2197":"趾背动脉群", // Set of dorsal digital arteries
  "FJ2198":"趾背静脉群", // Set of dorsal digital veins
  "FJ2199":"掌背静脉", // Dorsal metacarpal vein
  "FJ2200":"右腓静脉", // Right fibular vein
  "FJ2201":"右旋股外侧静脉", // Right lateral circumflex femoral vein
  "FJ2202":"右旋股内侧静脉", // Right medial circumflex femoral vein
  "FJ2203":"穿动脉群", // Set of perforating arteries
  "FJ2204":"趾足底固有动脉群", // Set of plantar digital arteries proper
  "FJ2205":"趾足底固有动脉群", // Set of plantar digital arteries proper
  "FJ2206":"足底跖动脉", // Plantar metatarsal artery
  "FJ2207":"足底跖静脉", // Plantar metatarsal vein
  "FJ2208":"阴茎背浅静脉", // Superficial dorsal vein of penis
  "FJ2209":"右甲状腺下动脉", // Right inferior thyroid artery
  "FJ2210":"左甲状腺下动脉", // Left inferior thyroid artery
  "FJ2211":"左胸肩峰动脉肩峰支", // Acromial branch of left thoraco-acromial artery
  "FJ2212":"左旋肱前动脉", // Left anterior circumflex humeral artery
  "FJ2213":"左旋肱前静脉", // Left anterior circumflex humeral vein
  "FJ2214":"左骨间前动脉", // Left anterior interosseous artery
  "FJ2215":"左尺侧下副动脉", // Left inferior ulnar collateral artery
  "FJ2216":"左腋动脉", // Left axillary artery
  "FJ2217":"左腋静脉", // Left axillary vein
  "FJ2218":"左贵要静脉", // Left basilic vein
  "FJ2219":"左肱动脉", // Left brachial artery
  "FJ2220":"左头静脉", // Left cephalic vein
  "FJ2221":"左旋肩胛动脉", // Left circumflex scapular artery
  "FJ2222":"左旋肩胛静脉", // Left circumflex scapular vein
  "FJ2223":"左骨间总动脉", // Left common interosseous artery
  "FJ2224":"左肋颈干", // Left costocervical trunk
  "FJ2225":"左肱深动脉", // Left deep brachial artery
  "FJ2226":"左颈深动脉", // Left deep cervical artery
  "FJ2227":"左掌深弓", // Left deep palmar arch
  "FJ2228":"左手背静脉网", // Dorsal venous network of left hand
  "FJ2229":"左掌深静脉弓", // Left deep palmar venous arch
  "FJ2230":"左胸肩峰动脉三角肌支", // Deltoid branch of left thoraco-acromial artery
  "FJ2231":"左桡动脉腕背支", // Dorsal carpal branch of left radial artery
  "FJ2232":"左肩胛背动脉", // Left dorsal scapular artery
  "FJ2233":"左胸外侧静脉", // Left lateral thoracic vein
  "FJ2234":"左前臂正中静脉", // Left median antebrachial vein
  "FJ2235":"左肘正中静脉", // Left median cubital vein
  "FJ2236":"左尺动脉腕背支", // Left dorsal carpal branch of ulnar artery
  "FJ2237":"左掌心动脉", // Left palmar metacarpal artery
  "FJ2238":"左掌心静脉", // Left palmar metacarpal vein
  "FJ2239":"左旋肱后动脉", // Left posterior circumflex humeral artery
  "FJ2240":"左旋肱后动脉", // Left posterior circumflex humeral artery
  "FJ2241":"左尺侧返动脉后支", // Left posterior ulnar recurrent artery
  "FJ2242":"左桡动脉", // Left radial artery
  "FJ2243":"左桡侧返动脉", // Left radial recurrent artery
  "FJ2244":"左桡静脉", // Left radial vein
  "FJ2245":"左骨间返动脉", // Left recurrent interosseous artery
  "FJ2246":"左肩胛下动脉", // Left subscapular artery
  "FJ2247":"左肩胛下静脉", // Left subscapular vein
  "FJ2248":"左掌浅动脉弓", // Left superficial palmar arterial arch
  "FJ2249":"左掌浅静脉弓", // Left superficial palmar venous arch
  "FJ2250":"左肩胛上静脉", // Left suprascapular vein
  "FJ2251":"左肩胛上动脉", // Left suprascapular artery
  "FJ2252":"左胸肩峰动脉干", // Trunk of left thoraco-acromial artery
  "FJ2253":"左胸背动脉", // Left thoracodorsal artery
  "FJ2254":"左胸背静脉", // Left thoracodorsal vein
  "FJ2255":"左甲状颈干", // Left thyrocervical trunk
  "FJ2256":"左颈浅动脉", // Left superficial cervical artery
  "FJ2257":"左颈横动脉", // Left transverse cervical artery
  "FJ2258":"左尺动脉", // Left ulnar artery
  "FJ2259":"左尺侧返动脉前支", // Left anterior ulnar recurrent artery
  "FJ2260":"左尺静脉", // Left ulnar vein
  "FJ2261":"左肱深动脉桡侧副支", // Radial collateral branch of left deep brachial artery
  "FJ2262":"右肱深动脉桡侧副支", // Radial collateral branch of right deep brachial artery
  "FJ2263":"右胸肩峰动脉肩峰支", // Acromial branch of right thoraco-acromial artery
  "FJ2264":"右旋肱前动脉", // Right anterior circumflex humeral artery
  "FJ2265":"右旋肱前静脉", // Right anterior circumflex humeral vein
  "FJ2266":"右骨间前动脉", // Right anterior interosseous artery
  "FJ2267":"右尺侧下副动脉", // Right inferior ulnar collateral artery
  "FJ2268":"右腋动脉", // Right axillary artery
  "FJ2269":"右腋静脉", // Right axillary vein
  "FJ2270":"右贵要静脉", // Right basilic vein
  "FJ2271":"右肱动脉", // Right brachial artery
  "FJ2272":"右头静脉", // Right cephalic vein
  "FJ2273":"右旋肩胛动脉", // Right circumflex scapular artery
  "FJ2274":"右旋肩胛静脉", // Right circumflex scapular vein
  "FJ2275":"右骨间总动脉", // Right common interosseous artery
  "FJ2276":"右肋颈干", // Right costocervical trunk
  "FJ2277":"右肱深动脉", // Right deep brachial artery
  "FJ2278":"右颈深动脉", // Right deep cervical artery
  "FJ2279":"右掌深弓", // Right deep palmar arch
  "FJ2280":"右手背静脉网", // Dorsal venous network of right hand
  "FJ2281":"右掌深静脉弓", // Right deep palmar venous arch
  "FJ2282":"右胸肩峰动脉三角肌支", // Deltoid branch of right thoraco-acromial artery
  "FJ2283":"右桡动脉腕背支", // Dorsal carpal branch of right radial artery
  "FJ2284":"右肩胛背动脉", // Right dorsal scapular artery
  "FJ2285":"右胸外侧静脉", // Right lateral thoracic vein
  "FJ2286":"右前臂正中静脉", // Right median antebrachial vein
  "FJ2287":"右肘正中静脉", // Right median cubital vein
  "FJ2288":"右尺动脉腕背支", // Right dorsal carpal branch of ulnar artery
  "FJ2289":"右掌心动脉", // Right palmar metacarpal artery
  "FJ2290":"右掌心静脉", // Right palmar metacarpal vein
  "FJ2291":"右旋肱后动脉", // Right posterior circumflex humeral artery
  "FJ2292":"右旋肱后动脉", // Right posterior circumflex humeral artery
  "FJ2293":"右尺侧返动脉后支", // Right posterior ulnar recurrent artery
  "FJ2294":"右桡动脉", // Right radial artery
  "FJ2295":"右桡侧返动脉", // Right radial recurrent artery
  "FJ2296":"右桡静脉", // Right radial vein
  "FJ2297":"右骨间返动脉", // Right recurrent interosseous artery
  "FJ2298":"右肩胛下动脉", // Right subscapular artery
  "FJ2299":"右肩胛下静脉", // Right subscapular vein
  "FJ2300":"右掌浅动脉弓", // Right superficial palmar arterial arch
  "FJ2301":"右掌浅静脉弓", // Right superficial palmar venous arch
  "FJ2302":"右肩胛上静脉", // Right suprascapular vein
  "FJ2303":"右肩胛上动脉", // Right suprascapular artery
  "FJ2304":"右胸肩峰动脉干", // Trunk of right thoraco-acromial artery
  "FJ2305":"右胸背动脉", // Right thoracodorsal artery
  "FJ2306":"右胸背静脉", // Right thoracodorsal vein
  "FJ2307":"右甲状颈干", // Right thyrocervical trunk
  "FJ2308":"右颈浅动脉", // Right superficial cervical artery
  "FJ2309":"右颈横动脉", // Right transverse cervical artery
  "FJ2310":"右尺动脉", // Right ulnar artery
  "FJ2311":"右尺侧返动脉前支", // Right anterior ulnar recurrent artery
  "FJ2312":"右尺静脉", // Right ulnar vein
  "FJ2313":"左臂内侧静脉", // Left medial brachial vein
  "FJ2314":"左示指桡侧动脉", // Left arteria radialis indicis
  "FJ2315":"左第1指掌侧总动脉", // Left first common palmar digital artery
  "FJ2316":"左第2指掌侧总动脉", // Left second common palmar digital artery
  "FJ2317":"左第3指掌侧总动脉", // Left third common palmar digital artery
  "FJ2318":"趾背动脉群", // Set of dorsal digital arteries
  "FJ2319":"左小指指掌侧固有静脉", // Proper palmar digital vein of left little finger
  "FJ2320":"左掌心静脉", // Left palmar metacarpal vein
  "FJ2321":"左小指指掌侧固有静脉", // Proper palmar digital vein of left little finger
  "FJ2322":"指掌侧总静脉", // Common palmar digital vein
  "FJ2323":"左掌心静脉", // Left palmar metacarpal vein
  "FJ2324":"左示指指掌侧固有静脉", // Proper palmar digital vein of left index finger
  "FJ2325":"左示指指掌侧固有静脉", // Proper palmar digital vein of left index finger
  "FJ2326":"左中指指掌侧固有静脉", // Proper palmar digital vein of left middle finger
  "FJ2327":"左环指指掌侧固有静脉", // Proper palmar digital vein of left ring finger
  "FJ2328":"左环指指掌侧固有静脉", // Proper palmar digital vein of left ring finger
  "FJ2329":"左小指指掌侧固有静脉", // Proper palmar digital vein of left little finger
  "FJ2330":"左胸肩峰动脉胸肌支", // Pectoral branch of left thoraco-acromial artery
  "FJ2331":"左肱深动脉中副支", // Middle collateral branch of left deep brachial artery
  "FJ2332":"左示指桡侧动脉", // Left arteria radialis indicis
  "FJ2333":"左示指尺侧指掌侧固有动脉", // Medial proper palmar digital artery of left index finger
  "FJ2334":"左中指桡侧指掌侧固有动脉", // Lateral proper palmar digital artery of left middle finger
  "FJ2335":"左环指桡侧指掌侧固有动脉", // Lateral proper palmar digital artery of left ring finger
  "FJ2336":"左小指桡侧指掌侧固有动脉", // Lateral proper palmar digital artery of left little finger
  "FJ2337":"左第4指掌侧总动脉", // Left fourth common palmar digital artery
  "FJ2338":"左拇主要动脉", // Left arteria princeps pollicis
  "FJ2339":"左拇主要动脉", // Left arteria princeps pollicis
  "FJ2340":"左中指指掌侧固有静脉", // Proper palmar digital vein of left middle finger
  "FJ2341":"右臂内侧静脉", // Right medial brachial vein
  "FJ2342":"右示指桡侧动脉", // Right arteria radialis indicis
  "FJ2343":"右第1指掌侧总动脉", // Right first common palmar digital artery
  "FJ2344":"右第2指掌侧总动脉", // Right second common palmar digital artery
  "FJ2345":"右第3指掌侧总动脉", // Right third common palmar digital artery
  "FJ2346":"趾背动脉群", // Set of dorsal digital arteries
  "FJ2347":"掌背动脉群", // Set of dorsal metacarpal arteries
  "FJ2348":"掌背动脉群", // Set of dorsal metacarpal arteries
  "FJ2349":"右小指指掌侧固有静脉", // Proper palmar digital vein of right little finger
  "FJ2350":"右掌心静脉", // Right palmar metacarpal vein
  "FJ2351":"右小指指掌侧固有静脉", // Proper palmar digital vein of right little finger
  "FJ2352":"指掌侧总静脉", // Common palmar digital vein
  "FJ2353":"右掌心静脉", // Right palmar metacarpal vein
  "FJ2354":"右示指指掌侧固有静脉", // Proper palmar digital vein of right index finger
  "FJ2355":"右示指指掌侧固有静脉", // Proper palmar digital vein of right index finger
  "FJ2356":"右中指指掌侧固有静脉", // Proper palmar digital vein of right middle finger
  "FJ2357":"右中指指掌侧固有静脉", // Proper palmar digital vein of right middle finger
  "FJ2358":"右环指指掌侧固有静脉", // Proper palmar digital vein of right ring finger
  "FJ2359":"右环指指掌侧固有静脉", // Proper palmar digital vein of right ring finger
  "FJ2360":"右小指指掌侧固有静脉", // Proper palmar digital vein of right little finger
  "FJ2361":"右胸肩峰动脉胸肌支", // Pectoral branch of right thoraco-acromial artery
  "FJ2362":"右肱深动脉中副支", // Middle collateral branch of right deep brachial artery
  "FJ2363":"右示指桡侧动脉", // Right arteria radialis indicis
  "FJ2364":"右示指尺侧指掌侧固有动脉", // Medial proper palmar digital artery of right index finger
  "FJ2365":"右中指桡侧指掌侧固有动脉", // Lateral proper palmar digital artery of right middle finger
  "FJ2366":"右环指桡侧指掌侧固有动脉", // Lateral proper palmar digital artery of right ring finger
  "FJ2367":"右中指尺侧指掌侧固有动脉", // Medial proper palmar digital artery of right middle finger
  "FJ2368":"右小指桡侧指掌侧固有动脉", // Lateral proper palmar digital artery of right little finger
  "FJ2369":"右环指尺侧指掌侧固有动脉", // Medial proper palmar digital artery of right ring finger
  "FJ2370":"右第4指掌侧总动脉", // Right fourth common palmar digital artery
  "FJ2371":"右拇主要动脉", // Right arteria princeps pollicis
  "FJ2372":"右拇主要动脉", // Right arteria princeps pollicis
  "FJ2373":"右尺侧上副动脉", // Right superior ulnar collateral artery
  "FJ2374":"左尺侧上副动脉", // Left superior ulnar collateral artery
  "FJ2386":"右肝动脉尾状叶支", // Caudate lobe branch of right hepatic artery
  "FJ2394":"右肝动脉右叶支", // Right lobe branch of right hepatic artery
  "FJ2404":"左门静脉", // Left portal vein
  "FJ2405":"右门静脉", // Right portal vein
  "FJ2409":"肝段VII", // Hepatovenous segment VII
  "FJ2414":"肝中静脉", // Middle hepatic vein
  "FJ2415":"左肝静脉", // Left hepatic vein
  "FJ2416":"右肝静脉", // Right hepatic vein
  "FJ2417":"肺动脉瓣左前瓣", // Left anterior cusp of pulmonary valve
  "FJ2418":"左心室外侧乳头肌前外侧头", // Anterolateral head of lateral papillary muscle of left ventricle
  "FJ2419":"右心室前乳头肌", // Anterior papillary muscle of right ventricle
  "FJ2420":"二尖瓣前叶", // Anterior leaflet of mitral valve
  "FJ2421":"三尖瓣前叶", // Anterior leaflet of tricuspid valve
  "FJ2422":"左心室腔", // Cavity of left ventricle
  "FJ2423":"右心室腔", // Cavity of right ventricle
  "FJ2424":"右心房腔", // Cavity of right atrium
  "FJ2425":"左心房腔", // Cavity of left atrium
  "FJ2426":"主动脉瓣左后瓣", // Left posterior cusp of aortic valve
  "FJ2427":"肺动脉瓣后瓣", // Posterior cusp of pulmonary valve
  "FJ2428":"心室壁", // Wall of ventricle
  "FJ2429":"左心室外侧乳头肌", // Lateral papillary muscle of left ventricle
  "FJ2430":"右心室后乳头肌", // Posterior papillary muscle of right ventricle
  "FJ2431":"主动脉瓣右后瓣", // Right posterior cusp of aortic valve
  "FJ2432":"二尖瓣后叶", // Posterior leaflet of mitral valve
  "FJ2433":"三尖瓣后叶", // Posterior leaflet of tricuspid valve
  "FJ2434":"肺动脉瓣右前瓣", // Right anterior cusp of pulmonary valve
  "FJ2435":"主动脉瓣前瓣", // Anterior cusp of aortic valve
  "FJ2436":"三尖瓣隔叶", // Septal leaflet of tricuspid valve
  "FJ2437":"右心室隔侧乳头肌", // Septal papillary muscle of right ventricle
  "FJ2438":"左心房壁", // Wall of left atrium
  "FJ2439":"右心房壁", // Wall of right atrium
  "FJ2440":"环状软骨", // Cricoid cartilage
  "FJ2441":"下舌段支气管树", // Inferior lingular bronchial tree
  "FJ2442":"左内底段支气管树", // Left medial basal segmental bronchial tree
  "FJ2443":"左前段支气管树", // Left anterior segmental bronchial tree
  "FJ2444":"左尖段支气管树", // Left apical segmental bronchial tree
  "FJ2445":"左外底段支气管树", // Left lateral basal segmental bronchial tree
  "FJ2446":"左后底段支气管树", // Left posterior basal segmental bronchial tree
  "FJ2447":"左后段支气管树", // Left posterior segmental bronchial tree
  "FJ2448":"左肺上段支气管树", // Left superior segmental bronchial tree
  "FJ2449":"外侧段支气管树", // Lateral segmental bronchial tree
  "FJ2450":"左主支气管", // Left main bronchus
  "FJ2451":"内侧段支气管树", // Medial segmental bronchial tree
  "FJ2452":"右前底段支气管树", // Right anterior basal segmental bronchial tree
  "FJ2453":"右前段支气管树", // Right anterior segmental bronchial tree
  "FJ2454":"右尖段支气管树", // Right apical segmental bronchial tree
  "FJ2455":"右外底段支气管树", // Right lateral basal segmental bronchial tree
  "FJ2456":"右内底段支气管树", // Right medial basal segmental bronchial tree
  "FJ2457":"右后底段支气管树", // Right posterior basal segmental bronchial tree
  "FJ2458":"右后段支气管树", // Right posterior segmental bronchial tree
  "FJ2459":"右肺上段支气管树", // Right superior segmental bronchial tree
  "FJ2460":"左尖段支气管树", // Left apical segmental bronchial tree
  "FJ2461":"左尖段支气管树", // Left apical segmental bronchial tree
  "FJ2462":"左尖段支气管树", // Left apical segmental bronchial tree
  "FJ2463":"左尖段支气管树", // Left apical segmental bronchial tree
  "FJ2464":"左尖段支气管树", // Left apical segmental bronchial tree
  "FJ2465":"左后段支气管树", // Left posterior segmental bronchial tree
  "FJ2466":"左后段支气管树", // Left posterior segmental bronchial tree
  "FJ2467":"左前段支气管树", // Left anterior segmental bronchial tree
  "FJ2468":"左前段支气管树", // Left anterior segmental bronchial tree
  "FJ2469":"左前段支气管树", // Left anterior segmental bronchial tree
  "FJ2470":"右后底段支气管树", // Right posterior basal segmental bronchial tree
  "FJ2471":"左前段支气管树", // Left anterior segmental bronchial tree
  "FJ2472":"左前段支气管树", // Left anterior segmental bronchial tree
  "FJ2473":"左前段支气管树", // Left anterior segmental bronchial tree
  "FJ2474":"左前段支气管树", // Left anterior segmental bronchial tree
  "FJ2475":"下舌段支气管树", // Inferior lingular bronchial tree
  "FJ2476":"上舌段支气管树", // Superior lingular bronchial tree
  "FJ2477":"上舌段支气管树", // Superior lingular bronchial tree
  "FJ2478":"上舌段支气管树", // Superior lingular bronchial tree
  "FJ2479":"左肺上段支气管树", // Left superior segmental bronchial tree
  "FJ2480":"左肺上段支气管树", // Left superior segmental bronchial tree
  "FJ2481":"右后底段支气管树", // Right posterior basal segmental bronchial tree
  "FJ2482":"左肺上段支气管树", // Left superior segmental bronchial tree
  "FJ2483":"左肺上段支气管树", // Left superior segmental bronchial tree
  "FJ2484":"左肺上段支气管树", // Left superior segmental bronchial tree
  "FJ2485":"左肺上段支气管树", // Left superior segmental bronchial tree
  "FJ2486":"右后底段支气管树", // Right posterior basal segmental bronchial tree
  "FJ2487":"右后底段支气管树", // Right posterior basal segmental bronchial tree
  "FJ2488":"右内底段支气管树", // Right medial basal segmental bronchial tree
  "FJ2489":"右后底段支气管树", // Right posterior basal segmental bronchial tree
  "FJ2490":"右外底段支气管树", // Right lateral basal segmental bronchial tree
  "FJ2491":"右外底段支气管树", // Right lateral basal segmental bronchial tree
  "FJ2492":"右外底段支气管树", // Right lateral basal segmental bronchial tree
  "FJ2493":"右前底段支气管树", // Right anterior basal segmental bronchial tree
  "FJ2494":"右前底段支气管树", // Right anterior basal segmental bronchial tree
  "FJ2495":"右肺上段支气管树", // Right superior segmental bronchial tree
  "FJ2496":"右肺上段支气管树", // Right superior segmental bronchial tree
  "FJ2497":"右肺上段支气管树", // Right superior segmental bronchial tree
  "FJ2498":"右肺上段支气管树", // Right superior segmental bronchial tree
  "FJ2499":"右肺上段支气管树", // Right superior segmental bronchial tree
  "FJ2500":"右肺上段支气管树", // Right superior segmental bronchial tree
  "FJ2501":"右肺上段支气管树", // Right superior segmental bronchial tree
  "FJ2502":"右肺上段支气管树", // Right superior segmental bronchial tree
  "FJ2503":"外侧段支气管树", // Lateral segmental bronchial tree
  "FJ2504":"外侧段支气管树", // Lateral segmental bronchial tree
  "FJ2505":"外侧段支气管树", // Lateral segmental bronchial tree
  "FJ2506":"内侧段支气管树", // Medial segmental bronchial tree
  "FJ2507":"内侧段支气管树", // Medial segmental bronchial tree
  "FJ2508":"内侧段支气管树", // Medial segmental bronchial tree
  "FJ2509":"右前段支气管树", // Right anterior segmental bronchial tree
  "FJ2510":"右前段支气管树", // Right anterior segmental bronchial tree
  "FJ2511":"右前段支气管树", // Right anterior segmental bronchial tree
  "FJ2512":"右前段支气管树", // Right anterior segmental bronchial tree
  "FJ2513":"右前段支气管树", // Right anterior segmental bronchial tree
  "FJ2514":"右前段支气管树", // Right anterior segmental bronchial tree
  "FJ2515":"右后段支气管树", // Right posterior segmental bronchial tree
  "FJ2516":"右后段支气管树", // Right posterior segmental bronchial tree
  "FJ2517":"右后段支气管树", // Right posterior segmental bronchial tree
  "FJ2518":"右后段支气管树", // Right posterior segmental bronchial tree
  "FJ2519":"右后段支气管树", // Right posterior segmental bronchial tree
  "FJ2520":"右尖段支气管树", // Right apical segmental bronchial tree
  "FJ2521":"右尖段支气管树", // Right apical segmental bronchial tree
  "FJ2522":"右尖段支气管树", // Right apical segmental bronchial tree
  "FJ2523":"右尖段支气管树", // Right apical segmental bronchial tree
  "FJ2524":"右尖段支气管树", // Right apical segmental bronchial tree
  "FJ2525":"右尖段支气管树", // Right apical segmental bronchial tree
  "FJ2526":"右尖段支气管树", // Right apical segmental bronchial tree
  "FJ2527":"左后底段支气管树", // Left posterior basal segmental bronchial tree
  "FJ2528":"左后底段支气管树", // Left posterior basal segmental bronchial tree
  "FJ2529":"左后底段支气管树", // Left posterior basal segmental bronchial tree
  "FJ2530":"左后底段支气管树", // Left posterior basal segmental bronchial tree
  "FJ2531":"左后底段支气管树", // Left posterior basal segmental bronchial tree
  "FJ2532":"左外底段支气管树", // Left lateral basal segmental bronchial tree
  "FJ2533":"左外底段支气管树", // Left lateral basal segmental bronchial tree
  "FJ2534":"左外底段支气管树", // Left lateral basal segmental bronchial tree
  "FJ2535":"左前底段支气管树", // Left anterior basal segmental bronchial tree
  "FJ2536":"左前底段支气管树", // Left anterior basal segmental bronchial tree
  "FJ2537":"左内底段支气管树", // Left medial basal segmental bronchial tree
  "FJ2538":"左前底段支气管树", // Left anterior basal segmental bronchial tree
  "FJ2539":"右主支气管", // Right main bronchus proper
  "FJ2540":"上舌段支气管树", // Superior lingular bronchial tree
  "FJ2541":"气管", // Trachea
  "FJ2542":"左尾骨肌", // Left coccygeus
  "FJ2543":"肛门外括约肌", // External anal sphincter
  "FJ2544":"左髂尾肌", // Left iliococcygeus
  "FJ2545":"左耻骨尾骨肌", // Left pubococcygeus
  "FJ2546":"左耻骨直肠肌", // Left puborectalis
  "FJ2547":"右尾骨肌", // Right coccygeus
  "FJ2548":"肛门外括约肌", // External anal sphincter
  "FJ2549":"右髂尾肌", // Right iliococcygeus
  "FJ2550":"右耻骨尾骨肌", // Right pubococcygeus
  "FJ2551":"右耻骨直肠肌", // Right puborectalis
  "FJ2552":"肛提肌腱弓", // Tendinous arch of levator ani
  "FJ2553":"肛提肌腱弓", // Tendinous arch of levator ani
  "FJ2554":"右鼻翼大软骨", // Right major alar cartilage
  "FJ2555":"左鼻翼大软骨", // Left major alar cartilage
  "FJ2556":"左鼻外侧软骨", // Left lateral nasal cartilage
  "FJ2557":"鼻中隔软骨", // Septal nasal cartilage
  "FJ2558":"右鼻外侧软骨", // Right lateral nasal cartilage
  "FJ2561":"脾", // Spleen
  "FJ2562":"脾动脉", // Splenic artery
  "FJ2563":"食管", // Esophagus
  "FJ2564":"胃", // Stomach
  "FJ2565":"阑尾", // Appendix
  "FJ2566":"升结肠", // Ascending colon
  "FJ2567":"降结肠", // Descending colon
  "FJ2568":"结肠游离带", // Taenia libera
  "FJ2569":"结肠系膜带", // Taenia mesocolica
  "FJ2570":"结肠网膜带", // Taenia omentalis
  "FJ2571":"直肠", // Rectum
  "FJ2572":"横结肠", // Transverse colon
  "FJ2573":"十二指肠", // Duodenum
  "FJ2574":"回肠近段", // Proximal part of ileum
  "FJ2575":"回肠近段", // Proximal part of ileum
  "FJ2576":"回肠中段", // Middle part of ileum
  "FJ2577":"回肠中段", // Middle part of ileum
  "FJ2578":"回肠中段", // Middle part of ileum
  "FJ2579":"回肠中段", // Middle part of ileum
  "FJ2580":"回肠中段", // Middle part of ileum
  "FJ2581":"回肠中段", // Middle part of ileum
  "FJ2582":"回肠中段", // Middle part of ileum
  "FJ2583":"回肠中段", // Middle part of ileum
  "FJ2584":"回肠中段", // Middle part of ileum
  "FJ2585":"回肠近段", // Proximal part of ileum
  "FJ2586":"回肠中段", // Middle part of ileum
  "FJ2587":"回肠远段", // Distal part of ileum
  "FJ2588":"回肠远段", // Distal part of ileum
  "FJ2589":"回肠远段", // Distal part of ileum
  "FJ2590":"回肠远段", // Distal part of ileum
  "FJ2591":"回肠远段", // Distal part of ileum
  "FJ2592":"回肠远段", // Distal part of ileum
  "FJ2593":"回肠远段", // Distal part of ileum
  "FJ2594":"回肠远段", // Distal part of ileum
  "FJ2595":"回肠远段", // Distal part of ileum
  "FJ2596":"回肠近段", // Proximal part of ileum
  "FJ2597":"回肠远段", // Distal part of ileum
  "FJ2598":"回肠远段", // Distal part of ileum
  "FJ2599":"回盲交界", // Ileocecal junction
  "FJ2600":"回肠近段", // Proximal part of ileum
  "FJ2601":"回肠近段", // Proximal part of ileum
  "FJ2602":"回肠近段", // Proximal part of ileum
  "FJ2603":"回肠近段", // Proximal part of ileum
  "FJ2604":"回肠近段", // Proximal part of ileum
  "FJ2605":"回肠近段", // Proximal part of ileum
  "FJ2606":"空肠近段", // Proximal part of jejunum
  "FJ2607":"空肠中段", // Middle part of jejunum
  "FJ2608":"空肠中段", // Middle part of jejunum
  "FJ2609":"空肠中段", // Middle part of jejunum
  "FJ2610":"空肠中段", // Middle part of jejunum
  "FJ2611":"空肠远段", // Distal part of jejunum
  "FJ2612":"空肠远段", // Distal part of jejunum
  "FJ2613":"空肠远段", // Distal part of jejunum
  "FJ2614":"空肠远段", // Distal part of jejunum
  "FJ2615":"空肠远段", // Distal part of jejunum
  "FJ2616":"空肠远段", // Distal part of jejunum
  "FJ2617":"空肠近段", // Proximal part of jejunum
  "FJ2618":"空肠远段", // Distal part of jejunum
  "FJ2619":"空肠远段", // Distal part of jejunum
  "FJ2620":"空肠远段", // Distal part of jejunum
  "FJ2621":"空肠远段", // Distal part of jejunum
  "FJ2622":"空肠近段", // Proximal part of jejunum
  "FJ2623":"空肠近段", // Proximal part of jejunum
  "FJ2624":"空肠近段", // Proximal part of jejunum
  "FJ2625":"空肠近段", // Proximal part of jejunum
  "FJ2626":"空肠近段", // Proximal part of jejunum
  "FJ2627":"空肠近段", // Proximal part of jejunum
  "FJ2628":"空肠中段", // Middle part of jejunum
  "FJ2629":"胰实质", // Parenchyma of pancreas
  "FJ2630":"胰管树", // Pancreatic duct tree
  "FJ2631":"左冠状动脉前室间支主干", // Trunk of anterior interventricular branch of left coronary artery
  "FJ2632":"左冠状动脉前室间支右侧第1前支", // First right anterior branch of anterior interventricular branch of left coronary artery
  "FJ2633":"左冠状动脉前降支对角支", // Diagonal branch of anterior descending branch of left coronary artery
  "FJ2634":"左冠状动脉前降支对角支", // Diagonal branch of anterior descending branch of left coronary artery
  "FJ2635":"左冠状动脉前降支对角支", // Diagonal branch of anterior descending branch of left coronary artery
  "FJ2636":"左冠状动脉前降支对角支", // Diagonal branch of anterior descending branch of left coronary artery
  "FJ2637":"左冠状动脉前降支对角支", // Diagonal branch of anterior descending branch of left coronary artery
  "FJ2638":"左冠状动脉前降支对角支", // Diagonal branch of anterior descending branch of left coronary artery
  "FJ2639":"左冠状动脉前降支对角支", // Diagonal branch of anterior descending branch of left coronary artery
  "FJ2640":"左冠状动脉前降支对角支", // Diagonal branch of anterior descending branch of left coronary artery
  "FJ2641":"左冠状动脉前室间支右侧第3前支", // Third right anterior branch of anterior interventricular branch of left coronary artery
  "FJ2642":"左冠状动脉前降支对角支", // Diagonal branch of anterior descending branch of left coronary artery
  "FJ2643":"左冠状动脉前室间支动脉圆锥支", // Conus branch of anterior interventricular branch of left coronary artery
  "FJ2644":"左冠状动脉前室间支动脉圆锥支", // Conus branch of anterior interventricular branch of left coronary artery
  "FJ2645":"左冠状动脉前室间支右侧第1前支", // First right anterior branch of anterior interventricular branch of left coronary artery
  "FJ2646":"左冠状动脉前室间支右侧第2前支", // Second right anterior branch of anterior interventricular branch of left coronary artery
  "FJ2647":"左冠状动脉前室间支右侧第3前支", // Third right anterior branch of anterior interventricular branch of left coronary artery
  "FJ2648":"左冠状动脉前降支对角支", // Diagonal branch of anterior descending branch of left coronary artery
  "FJ2649":"左冠状动脉旋支", // Circumflex branch of left coronary artery
  "FJ2650":"左冠状动脉旋支", // Circumflex branch of left coronary artery
  "FJ2651":"左冠状动脉旋支", // Circumflex branch of left coronary artery
  "FJ2652":"左冠状动脉旋支", // Circumflex branch of left coronary artery
  "FJ2653":"左冠状动脉旋支", // Circumflex branch of left coronary artery
  "FJ2654":"左冠状动脉旋支", // Circumflex branch of left coronary artery
  "FJ2655":"冠状窦", // Coronary sinus
  "FJ2656":"心大静脉", // Great cardiac vein
  "FJ2657":"前室间静脉", // Anterior interventricular vein
  "FJ2658":"前室间静脉", // Anterior interventricular vein
  "FJ2659":"前室间静脉", // Anterior interventricular vein
  "FJ2660":"前室间静脉", // Anterior interventricular vein
  "FJ2661":"前室间静脉", // Anterior interventricular vein
  "FJ2662":"前室间静脉", // Anterior interventricular vein
  "FJ2663":"前室间静脉", // Anterior interventricular vein
  "FJ2664":"前室间静脉", // Anterior interventricular vein
  "FJ2665":"前室间静脉", // Anterior interventricular vein
  "FJ2667":"右冠状动脉缘支", // Marginal branch of right coronary artery
  "FJ2668":"右冠状动脉缘支", // Marginal branch of right coronary artery
  "FJ2670":"右动脉圆锥支", // Right conus artery
  "FJ2671":"右冠状动脉第1心室前支", // First anterior ventricular branch of right coronary artery
  "FJ2672":"右冠状动脉缘支", // Marginal branch of right coronary artery
  "FJ2673":"右冠状动脉第1心室前支", // First anterior ventricular branch of right coronary artery
  "FJ2674":"右冠状动脉缘支", // Marginal branch of right coronary artery
  "FJ2675":"右冠状动脉缘支", // Marginal branch of right coronary artery
  "FJ2676":"右动脉圆锥支", // Right conus artery
  "FJ2677":"右冠状动脉第1心室前支", // First anterior ventricular branch of right coronary artery
  "FJ2678":"心中静脉", // Middle cardiac vein
  "FJ2679":"心中静脉", // Middle cardiac vein
  "FJ2680":"心中静脉", // Middle cardiac vein
  "FJ2681":"心中静脉", // Middle cardiac vein
  "FJ2682":"心中静脉", // Middle cardiac vein
  "FJ2683":"心中静脉", // Middle cardiac vein
  "FJ2684":"心中静脉", // Middle cardiac vein
  "FJ2685":"心中静脉", // Middle cardiac vein
  "FJ2686":"心中静脉", // Middle cardiac vein
  "FJ2687":"心中静脉", // Middle cardiac vein
  "FJ2688":"心中静脉", // Middle cardiac vein
  "FJ2689":"心中静脉", // Middle cardiac vein
  "FJ2690":"心中静脉", // Middle cardiac vein
  "FJ2691":"心中静脉", // Middle cardiac vein
  "FJ2692":"右冠状动脉后室间支", // Posterior interventricular branch of right coronary artery
  "FJ2693":"右冠状动脉后室间支", // Posterior interventricular branch of right coronary artery
  "FJ2694":"右冠状动脉后室间支", // Posterior interventricular branch of right coronary artery
  "FJ2695":"右冠状动脉后室间支", // Posterior interventricular branch of right coronary artery
  "FJ2696":"右冠状动脉后室间支", // Posterior interventricular branch of right coronary artery
  "FJ2697":"右冠状动脉后室间支", // Posterior interventricular branch of right coronary artery
  "FJ2698":"右冠状动脉后室间支", // Posterior interventricular branch of right coronary artery
  "FJ2699":"右冠状动脉后室间支", // Posterior interventricular branch of right coronary artery
  "FJ2700":"右冠状动脉后室间支", // Posterior interventricular branch of right coronary artery
  "FJ2701":"左心室后静脉", // Posterior vein of left ventricle
  "FJ2702":"左心室后静脉", // Posterior vein of left ventricle
  "FJ2703":"左缘静脉", // Left marginal vein
  "FJ2704":"左缘静脉", // Left marginal vein
  "FJ2705":"左缘静脉", // Left marginal vein
  "FJ2706":"左心室后静脉", // Posterior vein of left ventricle
  "FJ2707":"左心室后静脉", // Posterior vein of left ventricle
  "FJ2708":"左心室后静脉", // Posterior vein of left ventricle
  "FJ2709":"左心室后静脉", // Posterior vein of left ventricle
  "FJ2710":"左心室后静脉", // Posterior vein of left ventricle
  "FJ2711":"左心室后静脉", // Posterior vein of left ventricle
  "FJ2712":"左心室后静脉", // Posterior vein of left ventricle
  "FJ2713":"左心室后静脉", // Posterior vein of left ventricle
  "FJ2714":"右冠状动脉第1心室后支", // First posterior ventricular branch of right coronary artery
  "FJ2715":"右冠状动脉第1心室后支", // First posterior ventricular branch of right coronary artery
  "FJ2716":"右冠状动脉第1心室后支", // First posterior ventricular branch of right coronary artery
  "FJ2717":"右冠状动脉第1心室后支", // First posterior ventricular branch of right coronary artery
  "FJ2718":"右冠状动脉第1心室后支", // First posterior ventricular branch of right coronary artery
  "FJ2719":"右冠状动脉第1心室后支", // First posterior ventricular branch of right coronary artery
  "FJ2720":"右冠状动脉第1心室后支", // First posterior ventricular branch of right coronary artery
  "FJ2721":"右冠状动脉第1心室后支", // First posterior ventricular branch of right coronary artery
  "FJ2722":"右冠状动脉第1心室后支", // First posterior ventricular branch of right coronary artery
  "FJ2723":"右冠状动脉主干", // Trunk of right coronary artery
  "FJ2724":"心小静脉", // Small cardiac vein
  "FJ2725":"心前静脉", // Anterior cardiac vein
  "FJ2727":"右缘静脉", // Right marginal vein
  "FJ2728":"右缘静脉", // Right marginal vein
  "FJ2729":"右缘静脉", // Right marginal vein
  "FJ2730":"心前静脉", // Anterior cardiac vein
  "FJ2731":"心小静脉", // Small cardiac vein
  "FJ2732":"前室间动脉室间隔支", // Septal branch of anterior interventricular artery
  "FJ2733":"前室间动脉室间隔支", // Septal branch of anterior interventricular artery
  "FJ2734":"前室间动脉室间隔支", // Septal branch of anterior interventricular artery
  "FJ2735":"右后室间动脉第1室间隔支", // First septal branch of right posterior interventricular artery
  "FJ2736":"右后室间动脉第2室间隔支", // Second septal branch of right posterior interventricular artery
  "FJ2737":"左冠状动脉主干", // Trunk of left coronary artery
  "FJ2738":"左颏舌肌", // Left genioglossus
  "FJ2739":"左舌骨舌肌", // Left hyoglossus
  "FJ2740":"左咽下缩肌", // Left inferior pharyngeal constrictor
  "FJ2741":"左腭帆提肌", // Left levator veli palatini
  "FJ2742":"右咽中缩肌", // Right middle pharyngeal constrictor
  "FJ2743":"左腭咽肌", // Left palatopharyngeus
  "FJ2744":"左翼下颌缝", // Left pterygomandibular raphe
  "FJ2745":"左咽鼓管咽肌", // Left salpingopharyngeus
  "FJ2746":"左茎突咽肌", // Left stylopharyngeus
  "FJ2747":"左咽上缩肌", // Left superior pharyngeal constrictor
  "FJ2748":"左腭帆张肌", // Left tensor veli palatini
  "FJ2749":"咽缝", // Pharyngeal raphe
  "FJ2750":"右颏舌肌", // Right genioglossus
  "FJ2751":"右舌骨舌肌", // Right hyoglossus
  "FJ2752":"右咽下缩肌", // Right inferior pharyngeal constrictor
  "FJ2753":"右腭帆提肌", // Right levator veli palatini
  "FJ2754":"左咽中缩肌", // Left middle pharyngeal constrictor
  "FJ2755":"右腭咽肌", // Right palatopharyngeus
  "FJ2756":"右翼下颌缝", // Right pterygomandibular raphe
  "FJ2757":"右咽鼓管咽肌", // Right salpingopharyngeus
  "FJ2758":"右茎突咽肌", // Right stylopharyngeus
  "FJ2759":"右咽上缩肌", // Right superior pharyngeal constrictor
  "FJ2760":"右腭帆张肌", // Right tensor veli palatini
  "FJ2761":"舌", // Tongue
  "FJ2762":"腭垂肌", // Uvular muscle
  "FJ2763":"左茎突舌骨韧带", // Left stylohyoid ligament
  "FJ2764":"右茎突舌骨韧带", // Right stylohyoid ligament
  "FJ2765":"左舌下腺", // Left sublingual gland
  "FJ2766":"左下颌下腺", // Left submandibular gland
  "FJ2767":"右舌下腺", // Right sublingual gland
  "FJ2768":"右下颌下腺", // Right submandibular gland
  "FJ2769":"环状软骨", // Cricoid cartilage
  "FJ2770":"会厌", // Epiglottis
  "FJ2771":"舌骨会厌韧带", // Hyo-epiglottic ligament
  "FJ2772":"舌骨", // Hyoid bone
  "FJ2773":"左楔状软骨", // Left cuneiform cartilage
  "FJ2774":"左杓会厌肌", // Left aryepiglotticus
  "FJ2775":"左杓状软骨", // Left arytenoid cartilage
  "FJ2776":"左小角软骨", // Left corniculate cartilage
  "FJ2777":"左弹性圆锥", // Left conus elasticus
  "FJ2778":"左环杓侧肌", // Left lateral crico-arytenoid
  "FJ2779":"左甲状舌骨外侧韧带", // Left lateral thyrohyoid ligament
  "FJ2780":"左杓斜肌", // Left oblique arytenoid
  "FJ2781":"左环甲肌斜部", // Oblique part of left cricothyroid
  "FJ2782":"左环杓后肌", // Left posterior crico-arytenoid
  "FJ2783":"左环甲肌直部", // Straight part of left cricothyroid
  "FJ2784":"左甲杓肌", // Left thyro-arytenoid
  "FJ2785":"左甲杓肌", // Left thyro-arytenoid
  "FJ2786":"左甲状舌骨膜", // Left thyrohyoid membrane
  "FJ2787":"左声韧带", // Left vocal ligament
  "FJ2788":"左声带肌", // Left vocalis
  "FJ2789":"环甲正中韧带", // Median cricothyroid ligament
  "FJ2790":"甲状舌骨正中韧带", // Median thyrohyoid ligament
  "FJ2791":"右杓会厌肌", // Right aryepiglotticus
  "FJ2792":"右杓状软骨", // Right arytenoid cartilage
  "FJ2793":"右小角软骨", // Right corniculate cartilage
  "FJ2794":"右弹性圆锥", // Right conus elasticus
  "FJ2795":"右楔状软骨", // Right cuneiform cartilage
  "FJ2796":"右环杓侧肌", // Right lateral crico-arytenoid
  "FJ2797":"右甲状舌骨外侧韧带", // Right lateral thyrohyoid ligament
  "FJ2798":"右杓斜肌", // Right oblique arytenoid
  "FJ2799":"右环甲肌斜部", // Oblique part of right cricothyroid
  "FJ2800":"右环杓后肌", // Right posterior crico-arytenoid
  "FJ2801":"右环甲肌直部", // Straight part of right cricothyroid
  "FJ2802":"右甲杓肌", // Right thyro-arytenoid
  "FJ2803":"右甲杓肌", // Right thyro-arytenoid
  "FJ2804":"右甲状舌骨膜", // Right thyrohyoid membrane
  "FJ2805":"右声韧带", // Right vocal ligament
  "FJ2806":"右声带肌", // Right vocalis
  "FJ2807":"甲状会厌韧带", // Thyro-epiglottic ligament
  "FJ2808":"甲状软骨", // Thyroid cartilage
  "FJ2809":"杓横肌", // Transverse arytenoid
  "FJ2810":"皮肤", // Skin
  "FJ2811":"外耳", // External ear
  "FJ2812":"眉", // Eyebrow
  "FJ2813":"头发", // Hair of head
  "FJ2814":"唇", // Lip
  "FJ2815":"阴毛", // Pubic hair
  "FJ2816":"肝尾状叶", // Caudate lobe of liver
  "FJ2817":"胆囊", // Gallbladder
  "FJ2818":"肝段II", // Hepatovenous segment II
  "FJ2819":"肝段III", // Hepatovenous segment III
  "FJ2820":"肝段IV", // Hepatovenous segment IV
  "FJ2821":"肝段V", // Hepatovenous segment V
  "FJ2822":"肝段VI", // Hepatovenous segment VI
  "FJ2823":"肝段VIII", // Hepatovenous segment VIII
  "FJ2824":"肝段VIII", // Hepatovenous segment VIII
  "FJ2881":"左后底段动脉", // Left posterior basal segmental artery
  "FJ2882":"左外底段动脉", // Left lateral basal segmental artery
  "FJ2883":"左前底段动脉", // Left anterior basal segmental artery
  "FJ2884":"左内底段动脉", // Left medial basal segmental artery
  "FJ2885":"左内底段动脉", // Left medial basal segmental artery
  "FJ2886":"左前底段动脉", // Left anterior basal segmental artery
  "FJ2887":"左前底段动脉", // Left anterior basal segmental artery
  "FJ2888":"左肺上段动脉", // Left superior segmental artery
  "FJ2889":"左肺上段动脉", // Left superior segmental artery
  "FJ2890":"左肺上段动脉", // Left superior segmental artery
  "FJ2891":"左肺上段动脉", // Left superior segmental artery
  "FJ2892":"左后底段动脉", // Left posterior basal segmental artery
  "FJ2893":"左肺上段动脉", // Left superior segmental artery
  "FJ2894":"左肺上段动脉", // Left superior segmental artery
  "FJ2895":"左肺上段动脉", // Left superior segmental artery
  "FJ2896":"下舌段动脉", // Inferior lingular artery
  "FJ2897":"下舌段动脉", // Inferior lingular artery
  "FJ2898":"上舌段动脉", // Superior lingular artery
  "FJ2899":"上舌段动脉", // Superior lingular artery
  "FJ2900":"上舌段动脉", // Superior lingular artery
  "FJ2901":"上舌段动脉", // Superior lingular artery
  "FJ2902":"左前段动脉", // Left anterior segmental artery
  "FJ2903":"左后底段动脉", // Left posterior basal segmental artery
  "FJ2904":"左前段动脉", // Left anterior segmental artery
  "FJ2905":"左前段动脉", // Left anterior segmental artery
  "FJ2906":"左前段动脉", // Left anterior segmental artery
  "FJ2907":"左前段动脉", // Left anterior segmental artery
  "FJ2908":"左前段动脉", // Left anterior segmental artery
  "FJ2909":"左前段动脉", // Left anterior segmental artery
  "FJ2910":"左前段动脉", // Left anterior segmental artery
  "FJ2911":"左后段动脉", // Left posterior segmental artery
  "FJ2912":"左后段动脉", // Left posterior segmental artery
  "FJ2913":"左后段动脉", // Left posterior segmental artery
  "FJ2914":"左后底段动脉", // Left posterior basal segmental artery
  "FJ2915":"左尖段动脉", // Left apical segmental artery
  "FJ2916":"左尖段动脉", // Left apical segmental artery
  "FJ2917":"左尖段动脉", // Left apical segmental artery
  "FJ2918":"左尖段动脉", // Left apical segmental artery
  "FJ2919":"左后底段动脉", // Left posterior basal segmental artery
  "FJ2920":"左后底段动脉", // Left posterior basal segmental artery
  "FJ2921":"左外底段动脉", // Left lateral basal segmental artery
  "FJ2922":"左外底段动脉", // Left lateral basal segmental artery
  "FJ2923":"左外底段动脉", // Left lateral basal segmental artery
  "FJ2924":"左肺动脉", // Left pulmonary artery
  "FJ2925":"左肺上静脉", // Left superior pulmonary vein
  "FJ2926":"左后段静脉", // Left posterior segmental vein
  "FJ2927":"左后段静脉", // Left posterior segmental vein
  "FJ2928":"左后段静脉", // Left posterior segmental vein
  "FJ2929":"左后段静脉", // Left posterior segmental vein
  "FJ2930":"左前段静脉", // Left anterior segmental vein
  "FJ2931":"左前段静脉", // Left anterior segmental vein
  "FJ2932":"左前段静脉", // Left anterior segmental vein
  "FJ2933":"左肺上静脉", // Left superior pulmonary vein
  "FJ2934":"下舌段静脉", // Inferior lingular vein
  "FJ2935":"下舌段静脉", // Inferior lingular vein
  "FJ2936":"左尖段静脉", // Left apical segmental vein
  "FJ2937":"上舌段静脉", // Superior lingular vein
  "FJ2938":"上舌段静脉", // Superior lingular vein
  "FJ2939":"左后段静脉", // Left posterior segmental vein
  "FJ2940":"左后段静脉", // Left posterior segmental vein
  "FJ2941":"左后段静脉", // Left posterior segmental vein
  "FJ2942":"左后段静脉", // Left posterior segmental vein
  "FJ2943":"左后段静脉", // Left posterior segmental vein
  "FJ2944":"左肺下静脉", // Left inferior pulmonary vein
  "FJ2945":"左后底段静脉", // Left posterior basal segmental vein
  "FJ2946":"左后底段静脉", // Left posterior basal segmental vein
  "FJ2947":"左尖段静脉", // Left apical segmental vein
  "FJ2948":"左后底段静脉", // Left posterior basal segmental vein
  "FJ2949":"左后底段静脉", // Left posterior basal segmental vein
  "FJ2950":"左肺下静脉", // Left inferior pulmonary vein
  "FJ2951":"左外底段静脉", // Left lateral basal segmental vein
  "FJ2952":"左外底段静脉", // Left lateral basal segmental vein
  "FJ2953":"左外底段静脉", // Left lateral basal segmental vein
  "FJ2954":"左外底段静脉", // Left lateral basal segmental vein
  "FJ2955":"左肺下静脉", // Left inferior pulmonary vein
  "FJ2956":"左前底段静脉", // Left anterior basal segmental vein
  "FJ2957":"左前底段静脉", // Left anterior basal segmental vein
  "FJ2958":"左尖段静脉", // Left apical segmental vein
  "FJ2959":"左前底段静脉", // Left anterior basal segmental vein
  "FJ2960":"左前底段静脉", // Left anterior basal segmental vein
  "FJ2961":"左尖段静脉", // Left apical segmental vein
  "FJ2962":"左尖段静脉", // Left apical segmental vein
  "FJ2963":"左尖段静脉", // Left apical segmental vein
  "FJ2964":"左尖段静脉", // Left apical segmental vein
  "FJ2965":"左后段静脉", // Left posterior segmental vein
  "FJ2966":"肺动脉干", // Pulmonary trunk
  "FJ2967":"右尖段动脉尖部", // Apical part of right apical segmental artery
  "FJ2968":"右后段动脉尖部", // Apical part of right posterior segmental artery
  "FJ2969":"右后段动脉尖部", // Apical part of right posterior segmental artery
  "FJ2970":"右后段动脉后部", // Posterior part of right posterior segmental artery
  "FJ2971":"右后段动脉后部", // Posterior part of right posterior segmental artery
  "FJ2972":"右后段动脉后部", // Posterior part of right posterior segmental artery
  "FJ2973":"右肺上叶动脉", // Right upper lobar artery
  "FJ2974":"右前段动脉后支", // Posterior branch of right anterior segmental artery
  "FJ2975":"右前段动脉前支", // Anterior branch of right anterior segmental artery
  "FJ2976":"右前段动脉前支", // Anterior branch of right anterior segmental artery
  "FJ2977":"右前段动脉前支", // Anterior branch of right anterior segmental artery
  "FJ2978":"右尖段动脉前部", // Anterior part of right apical segmental artery
  "FJ2979":"右前段动脉前支", // Anterior branch of right anterior segmental artery
  "FJ2980":"右前段动脉后支", // Posterior branch of right anterior segmental artery
  "FJ2981":"右前段动脉后支", // Posterior branch of right anterior segmental artery
  "FJ2982":"外侧段动脉前支", // Anterior branch of lateral segmental artery
  "FJ2983":"外侧段动脉后支", // Posterior branch of lateral segmental artery
  "FJ2984":"外侧段动脉后支", // Posterior branch of lateral segmental artery
  "FJ2985":"外侧段动脉前支", // Anterior branch of lateral segmental artery
  "FJ2986":"内侧段动脉上支", // Superior branch of medial segmental artery
  "FJ2987":"内侧段动脉下支", // Inferior branch of medial segmental artery
  "FJ2988":"内侧段动脉下支", // Inferior branch of medial segmental artery
  "FJ2989":"右尖段动脉前部", // Anterior part of right apical segmental artery
  "FJ2990":"内侧段动脉上支", // Superior branch of medial segmental artery
  "FJ2991":"右肺上段动脉外侧支", // Lateral branch of right superior segmental artery
  "FJ2992":"右肺上段动脉外侧支", // Lateral branch of right superior segmental artery
  "FJ2993":"右肺上段动脉外侧支", // Lateral branch of right superior segmental artery
  "FJ2994":"右肺上段动脉内侧支", // Medial branch of right superior segmental artery
  "FJ2995":"右肺上段动脉内侧支", // Medial branch of right superior segmental artery
  "FJ2996":"右肺上段动脉内侧支", // Medial branch of right superior segmental artery
  "FJ2997":"右肺上段动脉上支", // Superior branch of right superior segmental artery
  "FJ2998":"右肺上段动脉上支", // Superior branch of right superior segmental artery
  "FJ2999":"右肺上段动脉上支", // Superior branch of right superior segmental artery
  "FJ3000":"右尖段动脉前部", // Anterior part of right apical segmental artery
  "FJ3001":"右前底段动脉外侧支", // Lateral branch of right anterior basal segmental artery
  "FJ3002":"右前底段动脉底支", // Basal branch of right anterior basal segmental artery
  "FJ3003":"右前底段动脉底支", // Basal branch of right anterior basal segmental artery
  "FJ3004":"右外底段动脉外侧支", // Lateral branch of right lateral basal segmental artery
  "FJ3005":"右外底段动脉外侧支", // Lateral branch of right lateral basal segmental artery
  "FJ3006":"右外底段动脉外侧支", // Lateral branch of right lateral basal segmental artery
  "FJ3007":"右外底段动脉外侧支", // Lateral branch of right lateral basal segmental artery
  "FJ3008":"右后底段动脉内侧底支", // Mediobasal branch of right posterior basal segmental artery
  "FJ3009":"右后底段动脉亚上段副支", // Accessory subsuperior branch of right posterior basal segmental artery
  "FJ3010":"右后底段动脉亚上段副支", // Accessory subsuperior branch of right posterior basal segmental artery
  "FJ3011":"右尖段动脉前部", // Anterior part of right apical segmental artery
  "FJ3012":"右后底段动脉内侧底支", // Mediobasal branch of right posterior basal segmental artery
  "FJ3013":"右后底段动脉外侧底支", // Laterobasal branch of right posterior basal segmental artery
  "FJ3014":"右后底段动脉外侧底支", // Laterobasal branch of right posterior basal segmental artery
  "FJ3015":"右尖段动脉尖部", // Apical part of right apical segmental artery
  "FJ3016":"右尖段动脉尖部", // Apical part of right apical segmental artery
  "FJ3017":"右尖段动脉尖部", // Apical part of right apical segmental artery
  "FJ3018":"右后段动脉尖部", // Apical part of right posterior segmental artery
  "FJ3019":"右肺动脉", // Right pulmonary artery
  "FJ3020":"右肺上静脉", // Right superior pulmonary vein
  "FJ3021":"右前段静脉下部", // Inferior part of right anterior segmental vein
  "FJ3022":"右后段静脉", // Right posterior segmental vein
  "FJ3023":"右后段静脉", // Right posterior segmental vein
  "FJ3024":"右后段静脉", // Right posterior segmental vein
  "FJ3025":"右后段静脉", // Right posterior segmental vein
  "FJ3026":"右后段静脉", // Right posterior segmental vein
  "FJ3027":"右前段静脉上部", // Superior part of right anterior segmental vein
  "FJ3028":"右前段静脉", // Right anterior segmental vein
  "FJ3029":"右前段静脉", // Right anterior segmental vein
  "FJ3030":"内侧段静脉上部", // Superior part of medial segmental vein
  "FJ3031":"右尖段静脉干", // Trunk of right apical segmental vein
  "FJ3032":"内侧段静脉下部", // Inferior part of medial segmental vein
  "FJ3033":"内侧段静脉下部", // Inferior part of medial segmental vein
  "FJ3034":"外侧段静脉前部", // Anterior part of lateral segmental vein
  "FJ3035":"外侧段静脉前部", // Anterior part of lateral segmental vein
  "FJ3036":"外侧段静脉前部", // Anterior part of lateral segmental vein
  "FJ3037":"外侧段静脉后部", // Posterior part of lateral segmental vein
  "FJ3038":"外侧段静脉后部", // Posterior part of lateral segmental vein
  "FJ3039":"外侧段静脉后部", // Posterior part of lateral segmental vein
  "FJ3040":"右肺下静脉", // Right inferior pulmonary vein
  "FJ3041":"右后底段静脉", // Right posterior basal segmental vein
  "FJ3042":"右尖段静脉前部", // Anterior part of right apical segmental vein
  "FJ3043":"右后底段静脉", // Right posterior basal segmental vein
  "FJ3044":"右后底段静脉", // Right posterior basal segmental vein
  "FJ3045":"右后底段静脉", // Right posterior basal segmental vein
  "FJ3046":"右后底段静脉", // Right posterior basal segmental vein
  "FJ3047":"右后底段静脉", // Right posterior basal segmental vein
  "FJ3048":"右后底段静脉", // Right posterior basal segmental vein
  "FJ3049":"右前底段静脉", // Right anterior basal segmental vein
  "FJ3050":"右肺上段静脉", // Right superior segmental vein
  "FJ3051":"右肺上段静脉", // Right superior segmental vein
  "FJ3052":"右肺上段静脉", // Right superior segmental vein
  "FJ3053":"右尖段静脉前部", // Anterior part of right apical segmental vein
  "FJ3054":"右内底段静脉", // Right medial basal segmental vein
  "FJ3055":"右内底段静脉", // Right medial basal segmental vein
  "FJ3056":"右前底段静脉", // Right anterior basal segmental vein
  "FJ3057":"右后底段静脉", // Right posterior basal segmental vein
  "FJ3058":"右后底段静脉", // Right posterior basal segmental vein
  "FJ3059":"右外底段静脉", // Right lateral basal segmental vein
  "FJ3060":"右外底段静脉", // Right lateral basal segmental vein
  "FJ3061":"右外底段静脉", // Right lateral basal segmental vein
  "FJ3062":"右外底段静脉", // Right lateral basal segmental vein
  "FJ3063":"右肺上段静脉", // Right superior segmental vein
  "FJ3064":"右尖段静脉尖部", // Apical part of right apical segmental vein
  "FJ3065":"右肺上段静脉", // Right superior segmental vein
  "FJ3066":"右肺上段静脉", // Right superior segmental vein
  "FJ3067":"右尖段静脉尖部", // Apical part of right apical segmental vein
  "FJ3068":"右尖段静脉尖部", // Apical part of right apical segmental vein
  "FJ3069":"右后段静脉", // Right posterior segmental vein
  "FJ3070":"右后段静脉", // Right posterior segmental vein
  "FJ3071":"右肝胆管树前上属支", // Anterior superior tributary of right hepatic biliary tree
  "FJ3072":"右肝胆管树前下属支", // Anterior inferior tributary of right hepatic biliary tree
  "FJ3073":"右门静脉前上段支", // Anterior superior segmental branch of right portal vein
  "FJ3074":"右门静脉前下段支", // Anterior inferior segmental branch of right portal vein
  "FJ3075":"肝前下段动脉", // Anterior inferior segmental hepatic artery
  "FJ3076":"肝前上段动脉", // Anterior superior segmental hepatic artery
  "FJ3077":"左肝动脉尾状叶支", // Caudate lobe branch of left hepatic artery
  "FJ3078":"肝总动脉", // Common hepatic artery
  "FJ3079":"肝总管", // Common hepatic duct
  "FJ3080":"胆囊管", // Cystic duct
  "FJ3081":"肝固有动脉", // Hepatic artery proper
  "FJ3082":"肝前门静脉", // Pre-hepatic portal vein
  "FJ3083":"肝中静脉前下段属支", // Anterior inferior segmental tributary of middle hepatic vein
  "FJ3084":"肝中静脉内侧下段属支", // Medial inferior segmental tributary of middle hepatic vein
  "FJ3085":"肝中静脉内侧下段属支", // Medial inferior segmental tributary of middle hepatic vein
  "FJ3086":"肝中静脉前下段属支", // Anterior inferior segmental tributary of middle hepatic vein
  "FJ3088":"左肝胆管树外侧上属支", // Lateral superior tributary of left hepatic biliary tree
  "FJ3089":"左肝胆管树外侧下属支", // Lateral inferior tributary of left hepatic biliary tree
  "FJ3090":"左肝胆管树外侧上属支", // Lateral superior tributary of left hepatic biliary tree
  "FJ3091":"肝外侧上段动脉", // Lateral superior segmental hepatic artery
  "FJ3092":"肝外侧下段动脉", // Lateral inferior segmental hepatic artery
  "FJ3093":"肝外侧上段动脉", // Lateral superior segmental hepatic artery
  "FJ3094":"左肝尾状叶管", // Left duct of caudate lobe of liver
  "FJ3095":"左肝动脉干", // Trunk of left hepatic artery
  "FJ3096":"左肝管", // Left hepatic duct
  "FJ3097":"左肝静脉外侧下段属支", // Lateral inferior segmental tributary of left hepatic vein
  "FJ3098":"左肝静脉外侧上段属支", // Lateral superior segmental tributary of left hepatic vein
  "FJ3099":"左肝静脉外侧下段属支", // Lateral inferior segmental tributary of left hepatic vein
  "FJ3100":"左肝静脉外侧下段属支", // Lateral inferior segmental tributary of left hepatic vein
  "FJ3101":"左肝静脉内侧上段属支", // Medial superior segmental tributary of left hepatic vein
  "FJ3102":"左门静脉干", // Trunk of left portal vein
  "FJ3103":"左肝胆管树内侧下属支", // Medial inferior tributary of left hepatic biliary tree
  "FJ3104":"左肝胆管树内侧上属支", // Medial superior tributary of left hepatic biliary tree
  "FJ3105":"左肝胆管树内侧上属支", // Medial superior tributary of left hepatic biliary tree
  "FJ3106":"肝内侧下段动脉", // Medial inferior segmental hepatic artery
  "FJ3107":"肝内侧上段动脉", // Medial superior segmental hepatic artery
  "FJ3108":"右肝胆管树后下属支", // Posterior inferior tributary of right hepatic biliary tree
  "FJ3109":"右肝胆管树后上属支", // Posterior superior tributary of right hepatic biliary tree
  "FJ3110":"右肝胆管树后上属支", // Posterior superior tributary of right hepatic biliary tree
  "FJ3111":"右门静脉后下段支", // Posterior inferior segmental branch of right portal vein
  "FJ3112":"右门静脉后上段支", // Posterior superior segmental branch of right portal vein
  "FJ3113":"右门静脉后上段支", // Posterior superior segmental branch of right portal vein
  "FJ3114":"肝后下段动脉", // Posterior inferior segmental hepatic artery
  "FJ3115":"肝后上段动脉", // Posterior superior segmental hepatic artery
  "FJ3116":"肝后上段动脉", // Posterior superior segmental hepatic artery
  "FJ3117":"右肝动脉干", // Trunk of right hepatic artery
  "FJ3118":"右肝静脉后下段属支", // Posterior inferior segmental tributary of right hepatic vein
  "FJ3119":"右肝静脉后上段属支", // Posterior superior segmental tributary of right hepatic vein
  "FJ3120":"右肝静脉后下段属支", // Posterior inferior segmental tributary of right hepatic vein
  "FJ3121":"右肝静脉前上段属支", // Anterior superior segmental tributary of right hepatic vein
  "FJ3122":"右门静脉干", // Trunk of right portal vein
  "FJ3123":"右肝管", // Right hepatic duct
  "FJ3124":"左门静脉尾状叶支", // Caudate lobe branch of left portal vein
  "FJ3125":"左门静脉外侧下段支", // Lateral inferior segmental branch of left portal vein
  "FJ3126":"左门静脉外侧上段支", // Lateral superior segmental branch of left portal vein
  "FJ3127":"左门静脉内侧上段支", // Medial superior segmental branch of left portal vein
  "FJ3128":"左门静脉内侧下段支", // Medial inferior segmental branch of left portal vein
  "FJ3129":"左肾上腺", // Left adrenal gland
  "FJ3130":"右肾上腺", // Right adrenal gland
  "FJ3131":"膈", // Diaphragm
  "FJ3132":"阴茎海绵体", // Corpus cavernosum of penis
  "FJ3133":"尿道海绵体", // Corpus spongiosum of penis
  "FJ3134":"阴茎头", // Glans penis
  "FJ3135":"左输精管", // Left deferent duct
  "FJ3136":"左附睾", // Left epididymis
  "FJ3137":"左精囊", // Left seminal vesicle
  "FJ3138":"左睾丸", // Left testis
  "FJ3139":"前列腺", // Prostate
  "FJ3140":"右输精管", // Right deferent duct
  "FJ3141":"右附睾", // Right epididymis
  "FJ3142":"右睾丸", // Right testis
  "FJ3143":"右精囊", // Right seminal vesicle
  "FJ3144":"左输尿管", // Left ureter
  "FJ3145":"左肾", // Left kidney
  "FJ3146":"右输尿管", // Right ureter
  "FJ3147":"右肾", // Right kidney
  "FJ3148":"尿道", // Urethra
  "FJ3149":"膀胱", // Urinary bladder
  "FJ3150":"左胸腺叶", // Left lobe of thymus
  "FJ3151":"右胸腺叶", // Right lobe of thymus
  "FJ3152":"右髋骨", // Right hip bone
  "FJ3153":"剑突", // Xiphoid process
  "FJ3154":"第10胸椎", // Tenth thoracic vertebra
  "FJ3155":"第11胸椎", // Eleventh thoracic vertebra
  "FJ3156":"第12胸椎", // Twelfth thoracic vertebra
  "FJ3157":"第1腰椎", // First lumbar vertebra
  "FJ3158":"第1胸椎", // First thoracic vertebra
  "FJ3159":"第2腰椎", // Second lumbar vertebra
  "FJ3160":"第2胸椎", // Second thoracic vertebra
  "FJ3161":"第3颈椎", // Third cervical vertebra
  "FJ3162":"第3腰椎", // Third lumbar vertebra
  "FJ3163":"第3胸椎", // Third thoracic vertebra
  "FJ3164":"第4颈椎", // Fourth cervical vertebra
  "FJ3165":"第4腰椎", // Fourth lumbar vertebra
  "FJ3166":"第4胸椎", // Fourth thoracic vertebra
  "FJ3167":"第5颈椎", // Fifth cervical vertebra
  "FJ3168":"第5腰椎", // Fifth lumbar vertebra
  "FJ3169":"第5胸椎", // Fifth thoracic vertebra
  "FJ3170":"第6颈椎", // Sixth cervical vertebra
  "FJ3171":"第6胸椎", // Sixth thoracic vertebra
  "FJ3172":"第7颈椎", // Seventh cervical vertebra
  "FJ3173":"第7胸椎", // Seventh thoracic vertebra
  "FJ3174":"第8胸椎", // Eighth thoracic vertebra
  "FJ3175":"第9胸椎", // Ninth thoracic vertebra
  "FJ3176":"寰椎", // Atlas
  "FJ3177":"枢椎", // Axis
  "FJ3178":"胸骨体", // Body of sternum
  "FJ3179":"左第2趾远节趾骨", // Distal phalanx of left second toe
  "FJ3180":"左第3趾远节趾骨", // Distal phalanx of left third toe
  "FJ3181":"左第4趾远节趾骨", // Distal phalanx of left fourth toe
  "FJ3182":"左踇趾远节趾骨", // Distal phalanx of left big toe
  "FJ3183":"左示指远节指骨", // Distal phalanx of left index finger
  "FJ3184":"左小指远节指骨", // Distal phalanx of left little finger
  "FJ3185":"左小趾远节趾骨", // Distal phalanx of left little toe
  "FJ3186":"左中指远节指骨", // Distal phalanx of left middle finger
  "FJ3187":"左环指远节指骨", // Distal phalanx of left ring finger
  "FJ3188":"左拇指远节指骨", // Distal phalanx of left thumb
  "FJ3189":"右第2趾远节趾骨", // Distal phalanx of right second toe
  "FJ3190":"右第3趾远节趾骨", // Distal phalanx of right third toe
  "FJ3191":"右第4趾远节趾骨", // Distal phalanx of right fourth toe
  "FJ3192":"右踇趾远节趾骨", // Distal phalanx of right big toe
  "FJ3193":"右示指远节指骨", // Distal phalanx of right index finger
  "FJ3194":"右小指远节指骨", // Distal phalanx of right little finger
  "FJ3195":"右小趾远节趾骨", // Distal phalanx of right little toe
  "FJ3196":"右中指远节指骨", // Distal phalanx of right middle finger
  "FJ3197":"右环指远节指骨", // Distal phalanx of right ring finger
  "FJ3198":"右拇指远节指骨", // Distal phalanx of right thumb
  "FJ3199":"筛骨", // Ethmoid
  "FJ3200":"额骨", // Frontal bone
  "FJ3201":"舌骨", // Hyoid bone
  "FJ3202":"枢椎椎间盘", // Intervertebral disk of axis
  "FJ3203":"第4胸椎椎间盘", // Intervertebral disk of fourth thoracic vertebra
  "FJ3204":"第5胸椎椎间盘", // Intervertebral disk of fifth thoracic vertebra
  "FJ3205":"第6胸椎椎间盘", // Intervertebral disk of sixth thoracic vertebra
  "FJ3206":"第7胸椎椎间盘", // Intervertebral disk of seventh thoracic vertebra
  "FJ3207":"第8胸椎椎间盘", // Intervertebral disk of eighth thoracic vertebra
  "FJ3208":"第9胸椎椎间盘", // Intervertebral disk of ninth thoracic vertebra
  "FJ3209":"第10胸椎椎间盘", // Intervertebral disk of tenth thoracic vertebra
  "FJ3210":"第11胸椎椎间盘", // Intervertebral disk of eleventh thoracic vertebra
  "FJ3211":"椎间盘", // Intervertebral disk
  "FJ3212":"第1腰椎椎间盘", // Intervertebral disk of first lumbar vertebra
  "FJ3213":"第3颈椎椎间盘", // Intervertebral disk of third cervical vertebra
  "FJ3214":"第2腰椎椎间盘", // Intervertebral disk of second lumbar vertebra
  "FJ3215":"第3腰椎椎间盘", // Intervertebral disk of third lumbar vertebra
  "FJ3216":"第4腰椎椎间盘", // Intervertebral disk of fourth lumbar vertebra
  "FJ3217":"第5腰椎椎间盘", // Intervertebral disk of fifth lumbar vertebra
  "FJ3218":"第4颈椎椎间盘", // Intervertebral disk of fourth cervical vertebra
  "FJ3219":"第5颈椎椎间盘", // Intervertebral disk of fifth cervical vertebra
  "FJ3220":"第6颈椎椎间盘", // Intervertebral disk of sixth cervical vertebra
  "FJ3221":"第7颈椎椎间盘", // Intervertebral disk of seventh cervical vertebra
  "FJ3222":"第1胸椎椎间盘", // Intervertebral disk of first thoracic vertebra
  "FJ3223":"第2胸椎椎间盘", // Intervertebral disk of second thoracic vertebra
  "FJ3224":"第3胸椎椎间盘", // Intervertebral disk of third thoracic vertebra
  "FJ3225":"左第10肋", // Left tenth rib
  "FJ3226":"左第11肋", // Left eleventh rib
  "FJ3227":"左第12肋", // Left twelfth rib
  "FJ3228":"左第1肋", // Left first rib
  "FJ3229":"左第2肋", // Left second rib
  "FJ3230":"左第3肋", // Left third rib
  "FJ3231":"左第4肋", // Left fourth rib
  "FJ3232":"左第5肋", // Left fifth rib
  "FJ3233":"左第6肋", // Left sixth rib
  "FJ3234":"左第7肋", // Left seventh rib
  "FJ3235":"左第8肋", // Left eighth rib
  "FJ3236":"左第9肋", // Left ninth rib
  "FJ3237":"左锁骨", // Left clavicle
  "FJ3239":"左第1肋软骨", // Left first costal cartilage
  "FJ3240":"左第1掌骨", // Left first metacarpal bone
  "FJ3241":"左第1跖骨", // Left first metatarsal bone
  "FJ3242":"左第2肋软骨", // Left second costal cartilage
  "FJ3243":"左第2掌骨", // Left second metacarpal bone
  "FJ3244":"左第2跖骨", // Left second metatarsal bone
  "FJ3245":"左第3肋软骨", // Left third costal cartilage
  "FJ3246":"左第3掌骨", // Left third metacarpal bone
  "FJ3247":"左第3跖骨", // Left third metatarsal bone
  "FJ3248":"左第4肋软骨", // Left fourth costal cartilage
  "FJ3249":"左第4掌骨", // Left fourth metacarpal bone
  "FJ3250":"左第4跖骨", // Left fourth metatarsal bone
  "FJ3251":"左第5肋软骨", // Left fifth costal cartilage
  "FJ3252":"左第5掌骨", // Left fifth metacarpal bone
  "FJ3253":"左第5跖骨", // Left fifth metatarsal bone
  "FJ3254":"左第6肋软骨", // Left sixth costal cartilage
  "FJ3255":"左第7肋软骨", // Left seventh costal cartilage
  "FJ3256":"左跟骨", // Left calcaneus
  "FJ3257":"左头状骨", // Left capitate
  "FJ3258":"左骰骨", // Left cuboid bone
  "FJ3259":"左股骨", // Left femur
  "FJ3260":"左腓骨", // Left fibula
  "FJ3261":"左钩骨", // Left hamate
  "FJ3262":"左肱骨", // Left humerus
  "FJ3263":"左下鼻甲", // Left inferior nasal concha
  "FJ3264":"左中间楔骨", // Left intermediate cuneiform bone
  "FJ3265":"左泪骨", // Left lacrimal bone
  "FJ3266":"左足籽骨", // Sesamoid bone of left foot
  "FJ3267":"左外侧楔骨", // Left lateral cuneiform bone
  "FJ3268":"左月骨", // Left lunate
  "FJ3269":"左上颌骨", // Left maxilla
  "FJ3270":"左足籽骨", // Sesamoid bone of left foot
  "FJ3271":"左内侧楔骨", // Left medial cuneiform bone
  "FJ3272":"左鼻骨", // Left nasal bone
  "FJ3273":"左腭骨", // Left palatine bone
  "FJ3274":"左顶骨", // Left parietal bone
  "FJ3275":"左髌骨", // Left patella
  "FJ3276":"左豌豆骨", // Left pisiform
  "FJ3277":"左桡骨", // Left radius
  "FJ3278":"左舟骨", // Left scaphoid
  "FJ3279":"左肩胛骨", // Left scapula
  "FJ3280":"左距骨", // Left talus
  "FJ3281":"左颞骨", // Left temporal bone
  "FJ3282":"左胫骨", // Left tibia
  "FJ3283":"左大多角骨", // Left trapezium
  "FJ3284":"左小多角骨", // Left trapezoid
  "FJ3285":"左三角骨", // Left triquetral
  "FJ3286":"左尺骨", // Left ulna
  "FJ3287":"左颧骨", // Left zygomatic bone
  "FJ3288":"左髋骨", // Left hip bone
  "FJ3289":"下颌骨", // Mandible
  "FJ3290":"胸骨柄", // Manubrium
  "FJ3291":"左环指中节指骨", // Middle phalanx of left ring finger
  "FJ3292":"右环指中节指骨", // Middle phalanx of right ring finger
  "FJ3293":"左第2趾中节趾骨", // Middle phalanx of left second toe
  "FJ3294":"左第3趾中节趾骨", // Middle phalanx of left third toe
  "FJ3295":"左第4趾中节趾骨", // Middle phalanx of left fourth toe
  "FJ3296":"左示指中节指骨", // Middle phalanx of left index finger
  "FJ3297":"左小指中节指骨", // Middle phalanx of left little finger
  "FJ3298":"左小趾中节趾骨", // Middle phalanx of left little toe
  "FJ3299":"左中指中节指骨", // Middle phalanx of left middle finger
  "FJ3300":"右第2趾中节趾骨", // Middle phalanx of right second toe
  "FJ3301":"右第3趾中节趾骨", // Middle phalanx of right third toe
  "FJ3302":"右第4趾中节趾骨", // Middle phalanx of right fourth toe
  "FJ3303":"右示指中节指骨", // Middle phalanx of right index finger
  "FJ3304":"右小指中节指骨", // Middle phalanx of right little finger
  "FJ3305":"右小趾中节趾骨", // Middle phalanx of right little toe
  "FJ3306":"右中指中节指骨", // Middle phalanx of right middle finger
  "FJ3307":"左足舟骨", // Navicular bone of left foot
  "FJ3308":"右足舟骨", // Navicular bone of right foot
  "FJ3309":"枕骨", // Occipital bone
  "FJ3310":"右踇趾近节趾骨", // Proximal phalanx of right big toe
  "FJ3311":"左第3趾近节趾骨", // Proximal phalanx of left third toe
  "FJ3312":"左第4趾近节趾骨", // Proximal phalanx of left fourth toe
  "FJ3313":"左示指近节指骨", // Proximal phalanx of left index finger
  "FJ3314":"左小指近节指骨", // Proximal phalanx of left little finger
  "FJ3315":"左小趾近节趾骨", // Proximal phalanx of left little toe
  "FJ3316":"左中指近节指骨", // Proximal phalanx of left middle finger
  "FJ3317":"左环指近节指骨", // Proximal phalanx of left ring finger
  "FJ3318":"左拇指近节指骨", // Proximal phalanx of left thumb
  "FJ3319":"右第2趾近节趾骨", // Proximal phalanx of right second toe
  "FJ3320":"右第3趾近节趾骨", // Proximal phalanx of right third toe
  "FJ3321":"右第4趾近节趾骨", // Proximal phalanx of right fourth toe
  "FJ3322":"右示指近节指骨", // Proximal phalanx of right index finger
  "FJ3323":"右小指近节指骨", // Proximal phalanx of right little finger
  "FJ3324":"右小趾近节趾骨", // Proximal phalanx of right little toe
  "FJ3325":"右中指近节指骨", // Proximal phalanx of right middle finger
  "FJ3326":"右环指近节指骨", // Proximal phalanx of right ring finger
  "FJ3327":"右拇指近节指骨", // Proximal phalanx of right thumb
  "FJ3328":"左第2趾近节趾骨", // Proximal phalanx of left second toe
  "FJ3329":"左踇趾近节趾骨", // Proximal phalanx of left big toe
  "FJ3330":"右第10肋", // Right tenth rib
  "FJ3331":"右第11肋", // Right eleventh rib
  "FJ3332":"右第12肋", // Right twelfth rib
  "FJ3333":"右第1肋软骨", // Right first costal cartilage
  "FJ3334":"右第1肋", // Right first rib
  "FJ3335":"右第2肋软骨", // Right second costal cartilage
  "FJ3336":"右第2肋", // Right second rib
  "FJ3337":"右第3肋软骨", // Right third costal cartilage
  "FJ3338":"右第3肋", // Right third rib
  "FJ3339":"右第4肋软骨", // Right fourth costal cartilage
  "FJ3340":"右第4肋", // Right fourth rib
  "FJ3341":"右第5肋软骨", // Right fifth costal cartilage
  "FJ3342":"右第5肋", // Right fifth rib
  "FJ3343":"右第6肋软骨", // Right sixth costal cartilage
  "FJ3344":"右第6肋", // Right sixth rib
  "FJ3345":"右第7肋软骨", // Right seventh costal cartilage
  "FJ3346":"右第7肋", // Right seventh rib
  "FJ3347":"右第8肋", // Right eighth rib
  "FJ3348":"右第9肋", // Right ninth rib
  "FJ3349":"右桡骨", // Right radius
  "FJ3350":"右第1掌骨", // Right first metacarpal bone
  "FJ3351":"右第1跖骨", // Right first metatarsal bone
  "FJ3352":"右第2掌骨", // Right second metacarpal bone
  "FJ3353":"右第2跖骨", // Right second metatarsal bone
  "FJ3354":"右第3掌骨", // Right third metacarpal bone
  "FJ3355":"右第3跖骨", // Right third metatarsal bone
  "FJ3356":"右第4掌骨", // Right fourth metacarpal bone
  "FJ3357":"右第4跖骨", // Right fourth metatarsal bone
  "FJ3358":"右第5掌骨", // Right fifth metacarpal bone
  "FJ3359":"右第5跖骨", // Right fifth metatarsal bone
  "FJ3360":"右跟骨", // Right calcaneus
  "FJ3361":"右头状骨", // Right capitate
  "FJ3362":"右锁骨", // Right clavicle
  "FJ3364":"右骰骨", // Right cuboid bone
  "FJ3365":"右股骨", // Right femur
  "FJ3366":"右腓骨", // Right fibula
  "FJ3367":"右钩骨", // Right hamate
  "FJ3368":"右肱骨", // Right humerus
  "FJ3369":"右下鼻甲", // Right inferior nasal concha
  "FJ3370":"右中间楔骨", // Right intermediate cuneiform bone
  "FJ3371":"右泪骨", // Right lacrimal bone
  "FJ3372":"右足籽骨", // Sesamoid bone of right foot
  "FJ3373":"右外侧楔骨", // Right lateral cuneiform bone
  "FJ3374":"右月骨", // Right lunate
  "FJ3375":"右上颌骨", // Right maxilla
  "FJ3376":"右足籽骨", // Sesamoid bone of right foot
  "FJ3377":"右内侧楔骨", // Right medial cuneiform bone
  "FJ3378":"右鼻骨", // Right nasal bone
  "FJ3379":"右腭骨", // Right palatine bone
  "FJ3380":"右顶骨", // Right parietal bone
  "FJ3381":"右髌骨", // Right patella
  "FJ3382":"右豌豆骨", // Right pisiform
  "FJ3383":"右舟骨", // Right scaphoid
  "FJ3384":"右肩胛骨", // Right scapula
  "FJ3385":"右距骨", // Right talus
  "FJ3386":"右颞骨", // Right temporal bone
  "FJ3387":"右胫骨", // Right tibia
  "FJ3388":"右大多角骨", // Right trapezium
  "FJ3389":"右小多角骨", // Right trapezoid
  "FJ3390":"右三角骨", // Right triquetral
  "FJ3391":"右尺骨", // Right ulna
  "FJ3392":"右颧骨", // Right zygomatic bone
  "FJ3393":"骶骨", // Sacrum
  "FJ3394":"蝶骨", // Sphenoid bone
  "FJ3395":"犁骨", // Vomer
  "FJ3396":"小肠系膜", // Mesentery of small intestine
  "FJ3397":"阑尾系膜", // Mesoappendix
  "FJ3398":"横结肠系膜", // Transverse mesocolon
  "FJ3399":"左结肠动脉升支", // Ascending branch of left colic artery
  "FJ3400":"左结肠静脉", // Left colic vein
  "FJ3401":"胰十二指肠前下动脉", // Anterior inferior pancreaticoduodenal artery
  "FJ3406":"盲肠前动脉", // Anterior cecal artery
  "FJ3409":"胰十二指肠前上动脉", // Anterior superior pancreaticoduodenal artery
  "FJ3410":"阑尾动脉", // Appendicular artery
  "FJ3411":"主动脉弓", // Arch of aorta
  "FJ3413":"升主动脉", // Ascending aorta
  "FJ3414":"回结肠动脉下支升支", // Ascending branch of inferior branch of ileocolic artery
  "FJ3415":"回结肠静脉", // Ileocolic vein
  "FJ3416":"奇静脉", // Azygos vein
  "FJ3417":"头臂干", // Brachiocephalic artery
  "FJ3418":"主动脉弓支气管支", // Bronchial branch of arch of aorta
  "FJ3419":"胰尾动脉", // Caudal pancreatic artery
  "FJ3420":"脾动脉", // Splenic artery
  "FJ3421":"腹腔干", // Celiac trunk
  "FJ3426":"左阴茎背浅静脉", // Left superficial dorsal vein of penis
  "FJ3427":"降主动脉", // Descending aorta
  "FJ3428":"左结肠动脉降支", // Descending branch of left colic artery
  "FJ3429":"左结肠静脉", // Left colic vein
  "FJ3430":"胰背动脉", // Dorsal pancreatic artery
  "FJ3431":"胸主动脉食管支群", // Set of oesophageal branches of thoracic aorta
  "FJ3432":"胃十二指肠动脉干", // Trunk of gastroduodenal artery
  "FJ3433":"胰大动脉", // Great pancreatic artery
  "FJ3434":"半奇静脉", // Hemiazygos vein
  "FJ3437":"回肠动脉", // Ileal artery
  "FJ3438":"回肠静脉", // Ileal vein
  "FJ3439":"回结肠动脉", // Ileocolic artery
  "FJ3440":"回结肠静脉", // Ileocolic vein
  "FJ3441":"下腔静脉", // Inferior vena cava
  "FJ3442":"肠系膜下动脉", // Inferior mesenteric artery
  "FJ3443":"肠系膜下静脉", // Inferior mesenteric vein
  "FJ3444":"胰下动脉", // Inferior pancreatic artery
  "FJ3446":"胰十二指肠下动脉", // Inferior pancreaticoduodenal artery
  "FJ3447":"膈下静脉", // Inferior phrenic vein
  "FJ3448":"膈下静脉", // Inferior phrenic vein
  "FJ3449":"膈下静脉", // Inferior phrenic vein
  "FJ3450":"膈下静脉", // Inferior phrenic vein
  "FJ3451":"膈下静脉", // Inferior phrenic vein
  "FJ3452":"膈下静脉", // Inferior phrenic vein
  "FJ3458":"左肾动脉前支", // Anterior division of left renal artery
  "FJ3459":"左肾动脉前支", // Anterior division of left renal artery
  "FJ3460":"左肾动脉前支", // Anterior division of left renal artery
  "FJ3461":"左肾动脉前支", // Anterior division of left renal artery
  "FJ3462":"左肾动脉前支", // Anterior division of left renal artery
  "FJ3463":"左肾动脉前支", // Anterior division of left renal artery
  "FJ3464":"左髂总动脉", // Left common iliac artery
  "FJ3465":"左髂总静脉", // Left common iliac vein
  "FJ3466":"左髂外动脉", // Left external iliac artery
  "FJ3467":"左肾上腺下动脉", // Left inferior suprarenal artery
  "FJ3468":"左髂内动脉", // Left internal iliac artery
  "FJ3469":"左髂内静脉", // Left internal iliac vein
  "FJ3470":"左髂内静脉", // Left internal iliac vein
  "FJ3471":"左髂内静脉", // Left internal iliac vein
  "FJ3472":"左肾上腺中动脉", // Left middle suprarenal artery
  "FJ3473":"左肾动脉后支", // Posterior division of left renal artery
  "FJ3474":"左肾动脉后支", // Posterior division of left renal artery
  "FJ3475":"左肾动脉后支", // Posterior division of left renal artery
  "FJ3476":"左肾动脉干", // Trunk of left renal artery
  "FJ3477":"左肾静脉", // Left renal vein
  "FJ3478":"左肾静脉", // Left renal vein
  "FJ3479":"左锁骨下动脉", // Left subclavian artery
  "FJ3480":"左肾上腺静脉", // Left suprarenal vein
  "FJ3481":"左肾动脉输尿管段", // Ureteric segment of left renal artery
  "FJ3482":"左头臂静脉", // Left brachiocephalic vein
  "FJ3483":"左颈总动脉", // Left common carotid artery
  "FJ3484":"左髂外静脉", // Left external iliac vein
  "FJ3485":"左颈内静脉", // Left internal jugular vein
  "FJ3486":"左锁骨下静脉", // Left subclavian vein
  "FJ3493":"左腰升静脉", // Left ascending lumbar vein
  "FJ3494":"左结肠动脉", // Left colic artery
  "FJ3495":"左结肠静脉", // Left colic vein
  "FJ3496":"左阴茎背动脉", // Left dorsal artery of penis
  "FJ3497":"左阴茎背动脉", // Left dorsal artery of penis
  "FJ3499":"左胃动脉", // Left gastric artery
  "FJ3500":"左胃静脉", // Left gastric vein
  "FJ3501":"左胃网膜动脉", // Left gastro-epiploic artery
  "FJ3502":"左胃网膜静脉", // Left gastroepiploic vein
  "FJ3510":"左髂腰静脉", // Left iliolumbar vein
  "FJ3511":"左腹壁下动脉", // Left inferior epigastric artery
  "FJ3512":"左腹壁下静脉", // Left inferior epigastric vein
  "FJ3513":"左臀下静脉", // Left inferior gluteal vein
  "FJ3514":"左膈下动脉", // Left inferior phrenic artery
  "FJ3515":"左膈下动脉", // Left inferior phrenic artery
  "FJ3516":"左膈下动脉", // Left inferior phrenic artery
  "FJ3517":"左膈下动脉", // Left inferior phrenic artery
  "FJ3518":"左膈下动脉", // Left inferior phrenic artery
  "FJ3519":"左膈下动脉", // Left inferior phrenic artery
  "FJ3520":"左膈下动脉", // Left inferior phrenic artery
  "FJ3522":"左髂外静脉", // Left external iliac vein
  "FJ3523":"左髂外静脉", // Left external iliac vein
  "FJ3524":"左髂外静脉", // Left external iliac vein
  "FJ3525":"左阴部内静脉", // Left internal pudendal vein
  "FJ3526":"左骶外侧静脉", // Left lateral sacral vein
  "FJ3527":"左闭孔静脉", // Left obturator vein
  "FJ3529":"左腹壁浅动脉", // Left superficial epigastric artery
  "FJ3530":"左腹壁上静脉", // Left superior epigastric vein
  "FJ3531":"左臀上静脉", // Left superior gluteal vein
  "FJ3532":"左睾丸动脉", // Left testicular artery
  "FJ3533":"左睾丸静脉", // Left testicular vein
  "FJ3534":"结肠缘动脉", // Marginal artery of colon
  "FJ3541":"骶正中静脉", // Median sacral vein
  "FJ3542":"中结肠动脉", // Middle colic artery
  "FJ3543":"中结肠静脉", // Middle colic vein
  "FJ3544":"脾动脉", // Splenic artery
  "FJ3545":"胰十二指肠静脉", // Pancreaticoduodenal vein
  "FJ3546":"胰十二指肠后下动脉", // Posterior inferior pancreaticoduodenal artery
  "FJ3553":"盲肠后动脉", // Posterior cecal artery
  "FJ3557":"胰十二指肠后上动脉", // Posterior superior pancreaticoduodenal artery
  "FJ3558":"右肾动脉前支", // Anterior division of right renal artery
  "FJ3559":"右肾动脉前支", // Anterior division of right renal artery
  "FJ3560":"右肾动脉前支", // Anterior division of right renal artery
  "FJ3561":"右肾动脉前支", // Anterior division of right renal artery
  "FJ3562":"右肾动脉前支", // Anterior division of right renal artery
  "FJ3563":"右肾动脉前支", // Anterior division of right renal artery
  "FJ3564":"右颈总动脉", // Right common carotid artery
  "FJ3565":"右髂总动脉", // Right common iliac artery
  "FJ3566":"右髂总静脉", // Right common iliac vein
  "FJ3567":"右髂外动脉", // Right external iliac artery
  "FJ3568":"右髂外静脉", // Right external iliac vein
  "FJ3569":"右髂内动脉", // Right internal iliac artery
  "FJ3570":"右髂内静脉", // Right internal iliac vein
  "FJ3571":"右髂内静脉", // Right internal iliac vein
  "FJ3572":"右髂内静脉", // Right internal iliac vein
  "FJ3573":"右肾动脉后支", // Posterior division of right renal artery
  "FJ3574":"右肾动脉后支", // Posterior division of right renal artery
  "FJ3575":"右肾动脉后支", // Posterior division of right renal artery
  "FJ3576":"右肾动脉干", // Trunk of right renal artery
  "FJ3577":"右肾静脉", // Right renal vein
  "FJ3578":"右肾静脉", // Right renal vein
  "FJ3579":"右锁骨下动脉", // Right subclavian artery
  "FJ3580":"右肾上腺静脉", // Right suprarenal vein
  "FJ3581":"右肾动脉输尿管段", // Ureteric segment of right renal artery
  "FJ3582":"右肾动脉输尿管段", // Ureteric segment of right renal artery
  "FJ3583":"右头臂静脉", // Right brachiocephalic vein
  "FJ3584":"右肾上腺下动脉", // Right inferior suprarenal artery
  "FJ3585":"右颈内静脉", // Right internal jugular vein
  "FJ3586":"右肾上腺中动脉", // Right middle suprarenal artery
  "FJ3587":"右锁骨下静脉", // Right subclavian vein
  "FJ3589":"右腰升静脉", // Right ascending lumbar vein
  "FJ3590":"右结肠动脉", // Right colic artery
  "FJ3591":"右结肠静脉", // Right colic vein
  "FJ3592":"右阴茎背动脉", // Right dorsal artery of penis
  "FJ3593":"右阴茎背动脉", // Right dorsal artery of penis
  "FJ3594":"右胃动脉", // Right gastric artery
  "FJ3595":"右胃静脉", // Right gastric vein
  "FJ3596":"右胃网膜动脉", // Right gastro-epiploic artery
  "FJ3597":"右胃网膜静脉", // Right gastroepiploic vein
  "FJ3603":"右髂腰静脉", // Right iliolumbar vein
  "FJ3604":"右腹壁下动脉", // Right inferior epigastric artery
  "FJ3605":"右腹壁下静脉", // Right inferior epigastric vein
  "FJ3606":"右臀下静脉", // Right inferior gluteal vein
  "FJ3607":"右髂内静脉", // Right internal iliac vein
  "FJ3608":"右髂内静脉", // Right internal iliac vein
  "FJ3609":"右髂内静脉", // Right internal iliac vein
  "FJ3610":"右阴部内静脉", // Right internal pudendal vein
  "FJ3611":"右骶外侧静脉", // Right lateral sacral vein
  "FJ3612":"右闭孔静脉", // Right obturator vein
  "FJ3614":"右腹壁浅动脉", // Right superficial epigastric artery
  "FJ3615":"右腹壁上静脉", // Right superior epigastric vein
  "FJ3616":"右臀上静脉", // Right superior gluteal vein
  "FJ3617":"右睾丸动脉", // Right testicular artery
  "FJ3618":"右睾丸静脉", // Right testicular vein
  "FJ3619":"右膈下动脉", // Right inferior phrenic artery
  "FJ3620":"右膈下动脉", // Right inferior phrenic artery
  "FJ3621":"右膈下动脉", // Right inferior phrenic artery
  "FJ3622":"右膈下动脉", // Right inferior phrenic artery
  "FJ3623":"右膈下动脉", // Right inferior phrenic artery
  "FJ3624":"右膈下动脉", // Right inferior phrenic artery
  "FJ3625":"右膈下动脉", // Right inferior phrenic artery
  "FJ3626":"右膈下动脉", // Right inferior phrenic artery
  "FJ3631":"腰静脉", // Lumbar vein
  "FJ3632":"腰动脉", // Lumbar artery
  "FJ3635":"腰静脉", // Lumbar vein
  "FJ3636":"腰动脉", // Lumbar artery
  "FJ3637":"右阴茎背浅静脉", // Right superficial dorsal vein of penis
  "FJ3638":"乙状结肠动脉", // Sigmoid artery
  "FJ3639":"乙状结肠静脉", // Sigmoid vein
  "FJ3640":"脾动脉", // Splenic artery
  "FJ3641":"脾静脉", // Splenic vein
  "FJ3644":"肠系膜上动脉干", // Trunk of superior mesenteric artery
  "FJ3645":"上腔静脉", // Superior vena cava
  "FJ3646":"胰十二指肠静脉", // Pancreaticoduodenal vein
  "FJ3647":"肠系膜上静脉", // Superior mesenteric vein
  "FJ3648":"膈上静脉", // Superior phrenic vein
  "FJ3649":"膈上静脉", // Superior phrenic vein
  "FJ3650":"膈上静脉", // Superior phrenic vein
  "FJ3651":"膈上静脉", // Superior phrenic vein
  "FJ3652":"膈上静脉", // Superior phrenic vein
  "FJ3653":"膈上静脉", // Superior phrenic vein
  "FJ3654":"膈上静脉", // Superior phrenic vein
  "FJ3655":"胰十二指肠静脉", // Pancreaticoduodenal vein
  "FJ3656":"直肠上动脉", // Superior rectal artery
  "FJ3657":"直肠上静脉", // Superior rectal vein
  "FJ3658":"腰升静脉", // Ascending lumbar vein
  "FJ3659":"下腔静脉", // Inferior vena cava
  "FMA3710":"血管树", // vascular tree
  "FMA3711":"动脉段", // segment of artery
  "FMA3714":"主动脉弓支气管支", // variant artery
  "FMA3726":"吻合", // anastomosis
  "FMA3727":"血管吻合", // vascular anastomosis
  "FMA3728":"动脉吻合", // arterial anastomosis
  "FMA3729":"静脉吻合", // venous anastomosis
  "FMA3736":"升主动脉", // ascending aorta
  "FMA3768":"主动脉弓", // arch of aorta
  "FMA3784":"降主动脉", // descending aorta
  "FMA3789":"腹主动脉", // abdominal aorta
  "FMA3802":"右冠状动脉主干", // trunk of right coronary artery
  "FMA3807":"右动脉圆锥支", // right conus artery
  "FMA3813":"右冠状动脉前室支", // anterior ventricular branch of right coronary artery
  "FMA3815":"右冠状动脉第1心室前支", // first anterior ventricular branch of right coronary artery
  "FMA3818":"右冠状动脉缘支", // marginal branch of right coronary artery
  "FMA3835":"右冠状动脉第1心室后支", // posterior ventricular branch of right coronary artery
  "FMA3837":"右冠状动脉第1心室后支", // first posterior ventricular branch of right coronary artery
  "FMA3840":"右冠状动脉后室间支", // posterior interventricular branch of right coronary artery
  "FMA3845":"右后室间动脉室间隔支", // septal branch of right posterior interventricular artery
  "FMA3847":"右后室间动脉第1室间隔支", // first septal branch of right posterior interventricular artery
  "FMA3848":"右后室间动脉第2室间隔支", // second septal branch of right posterior interventricular artery
  "FMA3855":"左冠状动脉主干", // trunk of left coronary artery
  "FMA3860":"左冠状动脉前降支对角支", // diagonal branch of anterior descending branch of left coronary artery
  "FMA3868":"左冠状动脉前室间支动脉圆锥支", // conus branch of anterior interventricular branch of left coronary artery
  "FMA3870":"左冠状动脉前室间支右前支", // right anterior branch of anterior interventricular branch of left coronary artery
  "FMA3872":"左冠状动脉前室间支右侧第1前支", // first right anterior branch of anterior interventricular branch of left coronary artery
  "FMA3874":"左冠状动脉前室间支右侧第2前支", // second right anterior branch of anterior interventricular branch of left coronary artery
  "FMA3876":"左冠状动脉前室间支右侧第3前支", // third right anterior branch of anterior interventricular branch of left coronary artery
  "FMA3892":"前室间动脉室间隔支", // septal branch of anterior interventricular artery
  "FMA3895":"左冠状动脉旋支", // circumflex branch of left coronary artery
  "FMA3932":"头臂干", // brachiocephalic artery
  "FMA3939":"颈总动脉", // common carotid artery
  "FMA3941":"右颈总动脉", // right common carotid artery
  "FMA3947":"颈内动脉", // internal carotid artery
  "FMA3949":"右颈内动脉", // right internal carotid artery
  "FMA3951":"锁骨下动脉", // subclavian artery
  "FMA3953":"右锁骨下动脉", // right subclavian artery
  "FMA3956":"椎动脉", // vertebral artery
  "FMA3958":"右椎动脉", // right vertebral artery
  "FMA3960":"胸廓内动脉", // internal thoracic artery
  "FMA3969":"右胸廓内动脉", // right internal thoracic artery
  "FMA3988":"右腹壁上动脉", // right superior epigastric artery
  "FMA3990":"甲状颈干", // thyrocervical trunk
  "FMA3992":"右甲状颈干", // right thyrocervical trunk
  "FMA3994":"第2肋间后动脉", // second posterior intercostal artery
  "FMA4057":"右肩胛背动脉", // right dorsal scapular artery
  "FMA4058":"左颈总动脉", // left common carotid artery
  "FMA4062":"左颈内动脉", // left internal carotid artery
  "FMA4066":"左椎动脉", // left vertebral artery
  "FMA4068":"左胸廓内动脉", // left internal thoracic artery
  "FMA4077":"左肌膈动脉", // left musculophrenic artery
  "FMA4083":"左腹壁上动脉", // left superior epigastric artery
  "FMA4084":"左甲状颈干", // left thyrocervical trunk
  "FMA4086":"左肋颈干", // left costocervical trunk
  "FMA4088":"左肋间上动脉", // left superior intercostal artery
  "FMA4112":"左第2肋间后动脉", // left second posterior intercostal artery
  "FMA4134":"左颈深动脉", // left deep cervical artery
  "FMA4149":"食管动脉", // esophageal artery
  "FMA4176":"肋间后动脉", // posterior intercostal artery
  "FMA4613":"肋下动脉", // subcostal artery
  "FMA4634":"右肋下动脉", // right subcostal artery
  "FMA4654":"左肋下动脉", // left subcostal artery
  "FMA4677":"左冠状动脉前室间支主干", // trunk of branch of coronary artery
  "FMA4694":"左锁骨下动脉", // left subclavian artery
  "FMA4706":"冠状窦", // coronary sinus
  "FMA4707":"心大静脉", // great cardiac vein
  "FMA4708":"左缘静脉", // left marginal vein
  "FMA4712":"左心室后静脉", // posterior vein of left ventricle
  "FMA4713":"心中静脉", // middle cardiac vein
  "FMA4714":"心小静脉", // small cardiac vein
  "FMA4716":"右缘静脉", // right marginal vein
  "FMA4720":"上腔静脉", // superior vena cava
  "FMA4723":"头臂静脉", // brachiocephalic vein
  "FMA4724":"颈内静脉", // internal jugular vein
  "FMA4725":"锁骨下静脉", // subclavian vein
  "FMA4729":"右胸廓内静脉", // internal thoracic vein
  "FMA4731":"腹壁上静脉", // superior epigastric vein
  "FMA4732":"肌膈静脉", // musculophrenic vein
  "FMA4751":"右头臂静脉", // right brachiocephalic vein
  "FMA4754":"右颈内静脉", // right internal jugular vein
  "FMA4755":"右锁骨下静脉", // right subclavian vein
  "FMA4758":"右胸廓内静脉", // right internal thoracic vein
  "FMA4761":"左头臂静脉", // left brachiocephalic vein
  "FMA4762":"左颈内静脉", // left internal jugular vein
  "FMA4763":"左锁骨下静脉", // left subclavian vein
  "FMA4771":"右腹壁上静脉", // right superior epigastric vein
  "FMA4772":"右肌膈静脉", // right musculophrenic vein
  "FMA4785":"左腹壁上静脉", // left superior epigastric vein
  "FMA4786":"左肌膈静脉", // left musculophrenic vein
  "FMA4797":"左肋间上静脉", // left superior intercostal vein
  "FMA4838":"奇静脉", // azygos vein
  "FMA4843":"右腰升静脉", // right ascending lumbar vein
  "FMA4844":"右肋下静脉", // right subcostal vein
  "FMA4877":"右肋间上静脉", // right superior intercostal vein
  "FMA4944":"半奇静脉", // hemiazygos vein
  "FMA4950":"左腰升静脉", // left ascending lumbar vein
  "FMA4951":"左肋下静脉", // left subcostal vein
  "FMA5011":"副半奇静脉", // accessory hemiazygos vein
  "FMA5018":"骨器官", // bone organ
  "FMA5022":"肌器官", // muscle organ
  "FMA5039":"右肋颈干", // right costocervical trunk
  "FMA5041":"右第2肋间后动脉", // right second posterior intercostal artery
  "FMA5042":"右肋间上动脉", // right superior intercostal artery
  "FMA5865":"脑神经", // cranial nerve
  "FMA5884":"神经节", // ganglion
  "FMA5889":"自主神经节", // autonomic ganglion
  "FMA5894":"副交感神经节", // parasympathetic ganglion
  "FMA5895":"颅部副交感神经节", // cranial parasympathetic ganglion
  "FMA5897":"解剖腔隙", // anatomical space
  "FMA5898":"解剖连接", // anatomical junction
  "FMA5913":"神经干", // nerve trunk
  "FMA6964":"睫状神经节", // ciliary ganglion
  "FMA7037":"睫状短神经", // branch of ciliary ganglion
  "FMA7041":"睫状短神经", // short ciliary nerve
  "FMA7131":"食管", // esophagus
  "FMA7145":"膜性器官", // membrane organ
  "FMA7146":"器官成分腺体", // organ component gland
  "FMA7148":"胃", // stomach
  "FMA7163":"皮肤", // skin
  "FMA7196":"脾", // spleen
  "FMA7198":"胰", // pancreas
  "FMA7202":"胆囊", // gallbladder
  "FMA7203":"肾", // kidney
  "FMA7204":"右肾", // right kidney
  "FMA7205":"左肾", // left kidney
  "FMA7206":"十二指肠", // duodenum
  "FMA7210":"睾丸", // testis
  "FMA7211":"右睾丸", // right testis
  "FMA7212":"左睾丸", // left testis
  "FMA7232":"心瓣尖", // cusp of cardiac valve
  "FMA7237":"三尖瓣叶", // leaflet of tricuspid valve
  "FMA7238":"三尖瓣前叶", // anterior leaflet of tricuspid valve
  "FMA7239":"三尖瓣后叶", // posterior leaflet of tricuspid valve
  "FMA7240":"三尖瓣隔叶", // septal leaflet of tricuspid valve
  "FMA7241":"二尖瓣叶", // leaflet of mitral valve
  "FMA7242":"二尖瓣前叶", // anterior leaflet of mitral valve
  "FMA7243":"二尖瓣后叶", // posterior leaflet of mitral valve
  "FMA7247":"肺动脉瓣左前瓣", // left anterior cusp of pulmonary valve
  "FMA7248":"肺动脉瓣尖", // cusp of pulmonary valve
  "FMA7249":"肺动脉瓣右前瓣", // right anterior cusp of pulmonary valve
  "FMA7250":"肺动脉瓣后瓣", // posterior cusp of pulmonary valve
  "FMA7251":"主动脉瓣尖", // cusp of aortic valve
  "FMA7252":"主动脉瓣右后瓣", // right posterior cusp of aortic valve
  "FMA7253":"主动脉瓣前瓣", // anterior cusp of aortic valve
  "FMA7254":"主动脉瓣左后瓣", // left posterior cusp of aortic valve
  "FMA7260":"右心室前乳头肌", // anterior papillary muscle of right ventricle
  "FMA7261":"右心室后乳头肌", // posterior papillary muscle of right ventricle
  "FMA7262":"右心室隔侧乳头肌", // septal papillary muscle of right ventricle
  "FMA7264":"左心室外侧乳头肌", // lateral papillary muscle of left ventricle
  "FMA7265":"左心室外侧乳头肌前外侧头", // anterolateral head of lateral papillary muscle of left ventricle
  "FMA7394":"气管", // trachea
  "FMA7396":"左主支气管", // left main bronchus
  "FMA7405":"左主支气管", // main bronchus
  "FMA7409":"支气管", // bronchus
  "FMA7474":"长骨", // long bone
  "FMA7475":"短骨", // short bone
  "FMA7476":"扁骨", // flat bone
  "FMA7477":"不规则骨", // irregular bone
  "FMA7478":"含气骨", // pneumatized bone
  "FMA7486":"胸骨柄", // manubrium
  "FMA7487":"胸骨体", // body of sternum
  "FMA7488":"剑突", // xiphoid process
  "FMA7538":"软骨器官成分", // cartilage organ component
  "FMA7574":"肋", // rib
  "FMA7591":"肋软骨", // costal cartilage
  "FMA7592":"真肋", // true rib
  "FMA7593":"典型肋", // typical rib
  "FMA7594":"假肋", // false rib
  "FMA7595":"浮肋", // floating rib
  "FMA7596":"非典型肋", // atypical rib
  "FMA7597":"第1肋", // first rib
  "FMA7603":"第1肋软骨", // first costal cartilage
  "FMA7620":"第2肋", // second rib
  "FMA7638":"第3肋", // third rib
  "FMA7646":"支持带", // retinaculum
  "FMA7703":"第2肋软骨", // second costal cartilage
  "FMA7741":"第3肋软骨", // third costal cartilage
  "FMA7749":"第4肋", // fourth rib
  "FMA7768":"第4肋软骨", // fourth costal cartilage
  "FMA7776":"第5肋", // fifth rib
  "FMA7795":"第5肋软骨", // fifth costal cartilage
  "FMA7822":"第6肋软骨", // sixth costal cartilage
  "FMA7830":"第7肋", // seventh rib
  "FMA7849":"第7肋软骨", // seventh costal cartilage
  "FMA7857":"右第1肋", // right first rib
  "FMA7875":"右第1肋软骨", // right first costal cartilage
  "FMA7882":"右第2肋", // right second rib
  "FMA7886":"右第2肋软骨", // right second costal cartilage
  "FMA7909":"右第3肋", // right third rib
  "FMA7913":"右第3肋软骨", // right third costal cartilage
  "FMA7957":"右第4肋", // right fourth rib
  "FMA7976":"右第4肋软骨", // right fourth costal cartilage
  "FMA7987":"左第1肋", // left first rib
  "FMA8005":"左第1肋软骨", // left first costal cartilage
  "FMA8012":"左第2肋", // left second rib
  "FMA8031":"左第2肋软骨", // left second costal cartilage
  "FMA8039":"左第3肋", // left third rib
  "FMA8058":"左第3肋软骨", // left third costal cartilage
  "FMA8066":"右第5肋", // right fifth rib
  "FMA8070":"右第5肋软骨", // right fifth costal cartilage
  "FMA8093":"左第5肋", // left fifth rib
  "FMA8112":"左第5肋软骨", // left fifth costal cartilage
  "FMA8120":"第8肋", // eighth rib
  "FMA8147":"第6肋", // sixth rib
  "FMA8148":"左第4肋", // left fourth rib
  "FMA8167":"左第4肋软骨", // left fourth costal cartilage
  "FMA8175":"右第6肋", // right sixth rib
  "FMA8194":"右第6肋软骨", // right sixth costal cartilage
  "FMA8202":"左第6肋", // left sixth rib
  "FMA8221":"左第6肋软骨", // left sixth costal cartilage
  "FMA8229":"右第7肋", // right seventh rib
  "FMA8248":"右第7肋软骨", // right seventh costal cartilage
  "FMA8256":"左第7肋", // left seventh rib
  "FMA8275":"左第7肋软骨", // left seventh costal cartilage
  "FMA8283":"右第8肋", // right eighth rib
  "FMA8310":"左第8肋", // left eighth rib
  "FMA8337":"第9肋", // ninth rib
  "FMA8364":"右第9肋", // right ninth rib
  "FMA8391":"左第9肋", // left ninth rib
  "FMA8418":"第10肋", // tenth rib
  "FMA8445":"右第10肋", // right tenth rib
  "FMA8472":"左第10肋", // left tenth rib
  "FMA8499":"第11肋", // eleventh rib
  "FMA8515":"第12肋", // twelfth rib
  "FMA8531":"右第11肋", // right eleventh rib
  "FMA8532":"左第11肋", // left eleventh rib
  "FMA8533":"右第12肋", // right twelfth rib
  "FMA8534":"左第12肋", // left twelfth rib
  "FMA8612":"肺动脉干", // pulmonary trunk
  "FMA8615":"肺动脉干", // pulmonary arterial trunk
  "FMA8620":"右前段动脉", // right anterior segmental artery
  "FMA8634":"左尖段动脉", // left apical segmental artery
  "FMA8635":"左后段动脉", // left posterior segmental artery
  "FMA8639":"上舌段动脉", // superior lingular artery
  "FMA8640":"下舌段动脉", // inferior lingular artery
  "FMA8642":"左肺上段动脉", // left superior segmental artery
  "FMA8644":"左内底段动脉", // left medial basal segmental artery
  "FMA8645":"左前底段动脉", // left anterior basal segmental artery
  "FMA8646":"左外底段动脉", // left lateral basal segmental artery
  "FMA8647":"左后底段动脉", // left posterior basal segmental artery
  "FMA8648":"右尖段静脉干", // trunk of pulmonary vein
  "FMA8662":"右前段静脉", // right anterior segmental vein
  "FMA8663":"右后段静脉", // right posterior segmental vein
  "FMA8667":"左前段静脉", // left anterior segmental vein
  "FMA8668":"上舌段静脉", // superior lingular vein
  "FMA8669":"下舌段静脉", // inferior lingular vein
  "FMA8670":"右肺上段静脉", // right superior segmental vein
  "FMA8673":"右前底段静脉", // right anterior basal segmental vein
  "FMA8678":"左前底段静脉", // left anterior basal segmental vein
  "FMA8681":"右尖段静脉尖部", // apical part of right apical segmental vein
  "FMA8683":"右前段静脉上部", // superior part of anterior segmental vein
  "FMA8693":"右前段静脉下部", // inferior part of anterior segmental vein
  "FMA8702":"右肺上叶动脉", // upper lobar artery
  "FMA8707":"左尖段动脉", // apical segmental artery
  "FMA8714":"左肺上段动脉", // superior segmental artery
  "FMA8716":"左内底段动脉", // medial basal segmental artery
  "FMA8717":"左前底段动脉", // anterior basal segmental artery
  "FMA8718":"左外底段动脉", // lateral basal segmental artery
  "FMA8719":"左后底段动脉", // posterior basal segmental artery
  "FMA8755":"肺段动脉", // segmental pulmonary artery
  "FMA9139":"胸椎", // thoracic vertebra
  "FMA9165":"第1胸椎", // first thoracic vertebra
  "FMA9187":"第2胸椎", // second thoracic vertebra
  "FMA9209":"第3胸椎", // third thoracic vertebra
  "FMA9248":"第4胸椎", // fourth thoracic vertebra
  "FMA9291":"右心室腔", // cavity of right ventricle
  "FMA9311":"肺亚段动脉", // subsegmental pulmonary artery
  "FMA9337":"器官腔亚分区", // organ cavity subdivision
  "FMA9338":"室间孔", // anatomical conduit space
  "FMA9411":"肺段静脉", // segmental pulmonary vein
  "FMA9413":"肺亚段静脉", // subsegmental pulmonary vein
  "FMA9419":"外侧段静脉亚段部", // subsegmental part of lateral segmental vein
  "FMA9421":"内侧段静脉亚段部", // subsegmental part of medial segmental vein
  "FMA9422":"右内底段静脉", // right medial basal segmental vein
  "FMA9425":"右外底段静脉", // right lateral basal segmental vein
  "FMA9428":"右后底段静脉", // right posterior basal segmental vein
  "FMA9437":"左尖段静脉", // left apical segmental vein
  "FMA9438":"左后段静脉", // left posterior segmental vein
  "FMA9450":"左外底段静脉", // left lateral basal segmental vein
  "FMA9451":"左后底段静脉", // left posterior basal segmental vein
  "FMA9457":"右心房壁", // wall of right atrium
  "FMA9464":"心腔", // cavity of cardiac chamber
  "FMA9465":"左心房腔", // cavity of left atrium
  "FMA9466":"左心室腔", // cavity of left ventricle
  "FMA9531":"左心房壁", // wall of left atrium
  "FMA9597":"唾液腺", // salivary gland
  "FMA9600":"前列腺", // prostate
  "FMA9604":"肾上腺", // adrenal gland
  "FMA9611":"股骨", // femur
  "FMA9612":"掌骨", // metacarpal bone
  "FMA9613":"顶骨", // parietal bone
  "FMA9615":"环状软骨", // cricoid cartilage
  "FMA9616":"头肌", // muscle of head
  "FMA9617":"颈肌", // muscle of neck
  "FMA9619":"胸部肌", // muscle of thorax
  "FMA9620":"腹肌", // muscle of abdomen
  "FMA9621":"上肢肌", // muscle of upper limb
  "FMA9622":"下肢肌", // muscle of lower limb
  "FMA9623":"会阴肌", // perineal muscle
  "FMA9625":"茎突舌骨肌", // stylohyoid
  "FMA9629":"冈上肌", // supraspinatus
  "FMA9637":"组织部分", // portion of tissue
  "FMA9640":"结缔组织部分", // portion of connective tissue
  "FMA9649":"腹白线", // decussation
  "FMA9657":"解剖线", // anatomical line
  "FMA9703":"鼻泪管", // nasolacrimal duct
  "FMA9704":"输尿管", // ureter
  "FMA9706":"胆管", // bile duct
  "FMA9708":"距骨", // talus
  "FMA9710":"犁骨", // vomer
  "FMA9711":"上颌骨", // maxilla
  "FMA9721":"肌腱", // tendon
  "FMA9756":"肋间外肌", // external intercostal muscle
  "FMA9757":"肋间内肌", // internal intercostal muscle
  "FMA9758":"肋间最内肌", // innermost intercostal muscle
  "FMA9760":"胸横肌", // transversus thoracis
  "FMA9761":"右胸横肌", // right transversus thoracis
  "FMA9762":"左胸横肌", // left transversus thoracis
  "FMA9914":"椎骨", // vertebra
  "FMA9915":"颈椎", // cervical vertebra
  "FMA9921":"腰椎", // lumbar vertebra
  "FMA9922":"第5胸椎", // fifth thoracic vertebra
  "FMA9945":"第6胸椎", // sixth thoracic vertebra
  "FMA9968":"第7胸椎", // seventh thoracic vertebra
  "FMA9991":"第8胸椎", // eighth thoracic vertebra
  "FMA10014":"第9胸椎", // ninth thoracic vertebra
  "FMA10037":"第10胸椎", // tenth thoracic vertebra
  "FMA10059":"第11胸椎", // eleventh thoracic vertebra
  "FMA10081":"第12胸椎", // twelfth thoracic vertebra
  "FMA10419":"胰管", // pancreatic duct
  "FMA10446":"椎间盘", // intervertebral disk
  "FMA10455":"胸椎间盘", // intervertebral disk of thoracic vertebra
  "FMA10458":"第1胸椎椎间盘", // intervertebral disk of first thoracic vertebra
  "FMA10474":"肌器官区", // zone of muscle organ
  "FMA10483":"胸骨柄", // zone of bone organ
  "FMA10552":"左肩胛背动脉", // left dorsal scapular artery
  "FMA10636":"肋颈干", // costocervical trunk
  "FMA10645":"肌膈动脉", // musculophrenic artery
  "FMA10646":"腹壁上动脉", // superior epigastric artery
  "FMA10659":"颈深动脉", // deep cervical artery
  "FMA10660":"右颈深动脉", // right deep cervical artery
  "FMA10662":"甲状腺下动脉", // inferior thyroid artery
  "FMA10663":"肩胛上动脉", // suprascapular artery
  "FMA10664":"颈横动脉", // transverse cervical artery
  "FMA10665":"颈浅动脉", // superficial cervical artery
  "FMA10680":"左甲状腺下动脉", // left inferior thyroid artery
  "FMA10681":"左肩胛上动脉", // left suprascapular artery
  "FMA10682":"左颈横动脉", // left transverse cervical artery
  "FMA10683":"左颈浅动脉", // left superficial cervical artery
  "FMA10692":"右肌膈动脉", // right musculophrenic artery
  "FMA10697":"右甲状腺下动脉", // right inferior thyroid artery
  "FMA10698":"右肩胛上动脉", // right suprascapular artery
  "FMA10699":"右颈横动脉", // right transverse cervical artery
  "FMA10700":"右颈浅动脉", // right superficial cervical artery
  "FMA10704":"主动脉弓支气管支", // variant bronchial artery
  "FMA10951":"下腔静脉", // inferior vena cava
  "FMA11195":"神经树器官段", // segment of neural tree organ
  "FMA11336":"腹白线", // linea alba
  "FMA11337":"连续区带", // zone of continuity
  "FMA11338":"回盲交界", // ileocecal junction
  "FMA11359":"右心房腔", // cavity of right atrium
  "FMA12215":"胸骨柄", // zone of sternum
  "FMA12224":"气管支气管树段", // segment of tracheobronchial tree
  "FMA12516":"牙", // tooth
  "FMA12519":"寰椎", // atlas
  "FMA12520":"枢椎", // axis
  "FMA12521":"第3颈椎", // third cervical vertebra
  "FMA12522":"第4颈椎", // fourth cervical vertebra
  "FMA12523":"第5颈椎", // fifth cervical vertebra
  "FMA12524":"第6颈椎", // sixth cervical vertebra
  "FMA12525":"第7颈椎", // seventh cervical vertebra
  "FMA12823":"切牙", // incisor tooth
  "FMA12845":"肋下静脉", // subcostal vein
  "FMA12846":"心静脉", // cardiac vein
  "FMA12858":"腰升静脉", // ascending lumbar vein
  "FMA13072":"第1腰椎", // first lumbar vertebra
  "FMA13073":"第2腰椎", // second lumbar vertebra
  "FMA13074":"第3腰椎", // third lumbar vertebra
  "FMA13075":"第4腰椎", // fourth lumbar vertebra
  "FMA13076":"第5腰椎", // fifth lumbar vertebra
  "FMA13087":"主动脉段", // segment of aorta
  "FMA13109":"胸小肌", // pectoralis minor
  "FMA13237":"心房腔", // cavity of atrium
  "FMA13238":"心室腔", // cavity of ventricle
  "FMA13256":"心腔壁", // wall of cardiac chamber
  "FMA13278":"肾前段动脉", // anterior segmental artery
  "FMA13279":"左前段动脉", // left anterior segmental artery
  "FMA13280":"左后段动脉", // posterior segmental artery
  "FMA13289":"右内底段静脉", // medial basal segmental vein
  "FMA13290":"前底段静脉", // anterior basal segmental vein
  "FMA13291":"外侧底段静脉", // lateral basal segmental vein
  "FMA13292":"后底段静脉", // posterior basal segmental vein
  "FMA13295":"膈", // diaphragm
  "FMA13303":"肱骨", // humerus
  "FMA13321":"锁骨", // clavicle
  "FMA13322":"右锁骨", // right clavicle
  "FMA13323":"左锁骨", // left clavicle
  "FMA13324":"头静脉", // cephalic vein
  "FMA13325":"右头静脉", // right cephalic vein
  "FMA13326":"左头静脉", // left cephalic vein
  "FMA13329":"腋静脉", // axillary vein
  "FMA13330":"右腋静脉", // right axillary vein
  "FMA13331":"左腋静脉", // left axillary vein
  "FMA13335":"腹外斜肌", // external oblique
  "FMA13336":"右腹外斜肌", // right external oblique
  "FMA13337":"左腹外斜肌", // left external oblique
  "FMA13338":"舌骨下肌", // infrahyoid muscle
  "FMA13341":"胸骨舌骨肌", // sternohyoid
  "FMA13342":"肩胛舌骨肌", // omohyoid
  "FMA13343":"胸骨甲状肌", // sternothyroid
  "FMA13344":"甲状舌骨肌", // thyrohyoid
  "FMA13346":"右胸骨舌骨肌", // right sternohyoid
  "FMA13347":"左胸骨舌骨肌", // left sternohyoid
  "FMA13348":"右肩胛舌骨肌", // right omohyoid
  "FMA13349":"左肩胛舌骨肌", // left omohyoid
  "FMA13350":"右胸骨甲状肌", // right sternothyroid
  "FMA13351":"左胸骨甲状肌", // left sternothyroid
  "FMA13352":"右甲状舌骨肌", // right thyrohyoid
  "FMA13353":"左甲状舌骨肌", // left thyrohyoid
  "FMA13354":"肋间肌", // intercostal muscle
  "FMA13365":"肝尾状叶", // caudate lobe of liver
  "FMA13375":"右胸小肌", // right pectoralis minor
  "FMA13376":"左胸小肌", // left pectoralis minor
  "FMA13379":"大菱形肌", // rhomboid major
  "FMA13380":"小菱形肌", // rhomboid minor
  "FMA13381":"右大菱形肌", // right rhomboid major
  "FMA13382":"左大菱形肌", // left rhomboid major
  "FMA13383":"右小菱形肌", // right rhomboid minor
  "FMA13384":"左小菱形肌", // left rhomboid minor
  "FMA13385":"前斜角肌", // scalenus anterior
  "FMA13386":"中斜角肌", // scalenus medius
  "FMA13387":"后斜角肌", // scalenus posterior
  "FMA13388":"右后斜角肌", // right scalenus posterior
  "FMA13389":"左后斜角肌", // left scalenus posterior
  "FMA13390":"右中斜角肌", // right scalenus medius
  "FMA13391":"左中斜角肌", // left scalenus medius
  "FMA13392":"右前斜角肌", // right scalenus anterior
  "FMA13393":"左前斜角肌", // left scalenus anterior
  "FMA13394":"肩胛骨", // scapula
  "FMA13395":"右肩胛骨", // right scapula
  "FMA13396":"左肩胛骨", // left scapula
  "FMA13397":"前锯肌", // serratus anterior
  "FMA13398":"右前锯肌", // right serratus anterior
  "FMA13399":"左前锯肌", // left serratus anterior
  "FMA13400":"后锯肌", // serratus posterior
  "FMA13401":"上后锯肌", // serratus posterior superior
  "FMA13402":"下后锯肌", // serratus posterior inferior
  "FMA13403":"右上后锯肌", // right serratus posterior superior
  "FMA13404":"左上后锯肌", // left serratus posterior superior
  "FMA13405":"右下后锯肌", // right serratus posterior inferior
  "FMA13406":"左下后锯肌", // left serratus posterior inferior
  "FMA13407":"胸锁乳突肌", // sternocleidomastoid
  "FMA13408":"右胸锁乳突肌", // right sternocleidomastoid
  "FMA13409":"左胸锁乳突肌", // left sternocleidomastoid
  "FMA13410":"锁骨下肌", // subclavius
  "FMA13411":"左锁骨下肌", // left subclavius
  "FMA13412":"右锁骨下肌", // right subclavius
  "FMA13413":"肩胛下肌", // subscapularis
  "FMA13414":"右肩胛下肌", // right subscapularis
  "FMA13415":"左肩胛下肌", // left subscapularis
  "FMA13442":"前段静脉", // anterior segmental vein
  "FMA13443":"后段静脉", // posterior segmental vein
  "FMA13444":"左尖段静脉", // apical segmental vein
  "FMA13445":"右肺上段静脉", // superior segmental vein
  "FMA13495":"第2胸椎椎间盘", // intervertebral disk of second thoracic vertebra
  "FMA13500":"第3胸椎椎间盘", // intervertebral disk of third thoracic vertebra
  "FMA13501":"第4胸椎椎间盘", // intervertebral disk of fourth thoracic vertebra
  "FMA13502":"第5胸椎椎间盘", // intervertebral disk of fifth thoracic vertebra
  "FMA13503":"第6胸椎椎间盘", // intervertebral disk of sixth thoracic vertebra
  "FMA13504":"第7胸椎椎间盘", // intervertebral disk of seventh thoracic vertebra
  "FMA13505":"第8胸椎椎间盘", // intervertebral disk of eighth thoracic vertebra
  "FMA13506":"第9胸椎椎间盘", // intervertebral disk of ninth thoracic vertebra
  "FMA13507":"第10胸椎椎间盘", // intervertebral disk of tenth thoracic vertebra
  "FMA13508":"第11胸椎椎间盘", // intervertebral disk of eleventh thoracic vertebra
  "FMA13883":"心房壁", // wall of atrium
  "FMA13884":"心室壁", // wall of ventricle
  "FMA13889":"垂体", // pituitary gland
  "FMA13894":"腰椎间盘", // intervertebral disk of lumbar vertebra
  "FMA13895":"颈椎间盘", // intervertebral disk of cervical vertebra
  "FMA13896":"第3颈椎椎间盘", // intervertebral disk of third cervical vertebra
  "FMA13897":"第4颈椎椎间盘", // intervertebral disk of fourth cervical vertebra
  "FMA13898":"第5颈椎椎间盘", // intervertebral disk of fifth cervical vertebra
  "FMA13899":"第6颈椎椎间盘", // intervertebral disk of sixth cervical vertebra
  "FMA13900":"第7颈椎椎间盘", // intervertebral disk of seventh cervical vertebra
  "FMA13912":"右冠状动脉室支", // ventricular branch of right coronary artery
  "FMA13914":"左冠状动脉前室间支前支", // anterior branch of anterior interventricular branch of left coronary artery
  "FMA13921":"左冠状动脉前室间支分支", // branch of anterior interventricular branch of left coronary artery
  "FMA14065":"器官成分", // organ component
  "FMA14092":"小肠区", // zone of small intestine
  "FMA14177":"主动脉弓支气管支", // bronchial branch of arch of aorta
  "FMA14284":"静脉树器官", // venous tree organ
  "FMA14293":"胸廓内静脉属支", // tributary of internal thoracic vein
  "FMA14294":"奇静脉属支", // tributary of azygos vein
  "FMA14309":"尖段静脉亚段部", // subsegmental part of apical segmental vein
  "FMA14310":"前段静脉亚段部", // subsegmental part of anterior segmental vein
  "FMA14317":"颈外静脉属支", // tributary of external jugular vein
  "FMA14319":"肩胛上静脉", // suprascapular vein
  "FMA14329":"门静脉主干", // trunk of portal vein
  "FMA14331":"脾静脉", // splenic vein
  "FMA14332":"肠系膜上静脉", // superior mesenteric vein
  "FMA14333":"髂总静脉", // common iliac vein
  "FMA14334":"肾静脉", // renal vein
  "FMA14335":"右肾静脉", // right renal vein
  "FMA14336":"左肾静脉", // left renal vein
  "FMA14337":"肝静脉", // hepatic vein
  "FMA14338":"右肝静脉", // right hepatic vein
  "FMA14339":"左肝静脉", // left hepatic vein
  "FMA14340":"肝中静脉", // middle hepatic vein
  "FMA14341":"右睾丸静脉", // right testicular vein
  "FMA14343":"右肾上腺静脉", // right suprarenal vein
  "FMA14344":"睾丸静脉", // testicular vein
  "FMA14345":"左睾丸静脉", // left testicular vein
  "FMA14348":"肾上腺静脉", // suprarenal vein
  "FMA14349":"左肾上腺静脉", // left suprarenal vein
  "FMA14495":"肝尾状叶", // segment of liver
  "FMA14539":"胆囊管", // cystic duct
  "FMA14540":"大肠段", // segment of large intestine
  "FMA14542":"阑尾", // appendix
  "FMA14544":"直肠", // rectum
  "FMA14545":"升结肠", // ascending colon
  "FMA14546":"横结肠", // transverse colon
  "FMA14547":"降结肠", // descending colon
  "FMA14643":"小肠系膜", // mesentery of small intestine
  "FMA14645":"大肠系膜", // mesentery of large intestine
  "FMA14647":"横结肠系膜", // transverse mesocolon
  "FMA14668":"肝总管", // common hepatic duct
  "FMA14669":"右肝管", // right hepatic duct
  "FMA14670":"左肝管", // left hepatic duct
  "FMA14678":"肝外胆管", // extrahepatic bile duct
  "FMA14734":"膈下动脉", // inferior phrenic artery
  "FMA14735":"腰动脉", // lumbar artery
  "FMA14746":"右膈下动脉", // right inferior phrenic artery
  "FMA14747":"左膈下动脉", // left inferior phrenic artery
  "FMA14749":"肠系膜上动脉", // superior mesenteric artery
  "FMA14750":"肠系膜下动脉", // inferior mesenteric artery
  "FMA14751":"肾动脉", // renal artery
  "FMA14752":"右肾动脉", // right renal artery
  "FMA14753":"左肾动脉", // left renal artery
  "FMA14754":"肾上腺中动脉", // middle suprarenal artery
  "FMA14755":"右肾上腺中动脉", // right middle suprarenal artery
  "FMA14756":"左肾上腺中动脉", // left middle suprarenal artery
  "FMA14758":"睾丸动脉", // testicular artery
  "FMA14759":"右睾丸动脉", // right testicular artery
  "FMA14760":"左睾丸动脉", // left testicular artery
  "FMA14764":"髂总动脉", // common iliac artery
  "FMA14765":"右髂总动脉", // right common iliac artery
  "FMA14766":"左髂总动脉", // left common iliac artery
  "FMA14767":"腹腔干分支主干", // trunk of branch of coeliac artery
  "FMA14768":"左胃动脉", // left gastric artery
  "FMA14769":"肝动脉", // hepatic artery
  "FMA14771":"肝总动脉", // common hepatic artery
  "FMA14772":"肝固有动脉", // hepatic artery proper
  "FMA14773":"脾动脉", // splenic artery
  "FMA14776":"右胃动脉", // right gastric artery
  "FMA14781":"右胃网膜动脉", // right gastro-epiploic artery
  "FMA14782":"胰十二指肠前上动脉", // anterior superior pancreaticoduodenal artery
  "FMA14784":"胰十二指肠后上动脉", // posterior superior pancreaticoduodenal artery
  "FMA14787":"胰背动脉", // dorsal pancreatic artery
  "FMA14790":"胰下动脉", // inferior pancreatic artery
  "FMA14792":"胰大动脉", // great pancreatic artery
  "FMA14793":"胰尾动脉", // caudal pancreatic artery
  "FMA14796":"左胃网膜动脉", // left gastro-epiploic artery
  "FMA14805":"胰十二指肠下动脉", // inferior pancreaticoduodenal artery
  "FMA14809":"回肠动脉", // ileal artery
  "FMA14810":"中结肠动脉", // middle colic artery
  "FMA14811":"右结肠动脉", // right colic artery
  "FMA14812":"腹腔干", // celiac trunk
  "FMA14815":"回结肠动脉", // ileocolic artery
  "FMA14816":"盲肠前动脉", // anterior cecal artery
  "FMA14817":"盲肠后动脉", // posterior cecal artery
  "FMA14818":"阑尾动脉", // appendicular artery
  "FMA14819":"回结肠动脉下支回肠支", // ileal branch of inferior branch of ileocolic artery
  "FMA14820":"回结肠动脉下支升支", // ascending branch of inferior branch of ileocolic artery
  "FMA14821":"回结肠动脉分支", // branch of ileocolic artery
  "FMA14824":"结肠边缘动脉", // marginal colic artery
  "FMA14825":"肠系膜下动脉分支主干", // trunk of branch of inferior mesenteric artery
  "FMA14826":"左结肠动脉", // left colic artery
  "FMA14828":"左结肠动脉升支", // ascending branch of left colic artery
  "FMA14829":"左结肠动脉降支", // descending branch of left colic artery
  "FMA14830":"乙状结肠动脉", // sigmoid artery
  "FMA14831":"结肠缘动脉", // marginal artery of colon
  "FMA14832":"直肠上动脉", // superior rectal artery
  "FMA14837":"肝固有动脉分部", // subdivision of hepatic artery proper
  "FMA14963":"回肠区", // zone of ileum
  "FMA14964":"回肠近段", // proximal part of ileum
  "FMA14965":"回肠中段", // middle part of ileum
  "FMA14966":"回肠远段", // distal part of ileum
  "FMA15041":"结肠带", // taenia coli
  "FMA15042":"结肠系膜带", // taenia mesocolica
  "FMA15043":"结肠网膜带", // taenia omentalis
  "FMA15044":"结肠游离带", // taenia libera
  "FMA15370":"腰静脉", // lumbar vein
  "FMA15387":"脾静脉属支", // tributary of splenic vein
  "FMA15390":"左胃网膜静脉", // left gastroepiploic vein
  "FMA15391":"肠系膜下静脉", // inferior mesenteric vein
  "FMA15392":"肠系膜下静脉属支", // tributary of inferior mesenteric vein
  "FMA15393":"直肠上静脉", // superior rectal vein
  "FMA15394":"左结肠静脉", // left colic vein
  "FMA15395":"乙状结肠静脉", // sigmoid vein
  "FMA15396":"肠系膜上静脉属支", // tributary of superior mesenteric vein
  "FMA15397":"右胃网膜静脉", // right gastroepiploic vein
  "FMA15398":"胰十二指肠静脉", // pancreaticoduodenal vein
  "FMA15399":"左胃静脉", // left gastric vein
  "FMA15400":"右胃静脉", // right gastric vein
  "FMA15405":"回肠静脉", // ileal vein
  "FMA15406":"中结肠静脉", // middle colic vein
  "FMA15407":"右结肠静脉", // right colic vein
  "FMA15408":"回结肠静脉", // ileocolic vein
  "FMA15414":"右门静脉", // right portal vein
  "FMA15415":"左门静脉", // left portal vein
  "FMA15420":"右门静脉前上段支", // anterior superior segmental branch of right portal vein
  "FMA15421":"右门静脉前下段支", // anterior inferior segmental branch of right portal vein
  "FMA15423":"右门静脉后上段支", // posterior superior segmental branch of right portal vein
  "FMA15424":"右门静脉后下段支", // posterior inferior segmental branch of right portal vein
  "FMA15425":"左门静脉尾状叶支", // caudate lobe branch of left portal vein
  "FMA15428":"左门静脉内侧上段支", // medial superior segmental branch of left portal vein
  "FMA15429":"左门静脉内侧下段支", // medial inferior segmental branch of left portal vein
  "FMA15431":"左门静脉外侧上段支", // lateral superior segmental branch of left portal vein
  "FMA15432":"左门静脉外侧下段支", // lateral inferior segmental branch of left portal vein
  "FMA15571":"右输尿管", // right ureter
  "FMA15572":"左输尿管", // left ureter
  "FMA15629":"右肾上腺", // right adrenal gland
  "FMA15630":"左肾上腺", // left adrenal gland
  "FMA15737":"肝静脉性亚分区", // hepatovenous subsector
  "FMA15739":"肝段II", // hepatovenous segment ii
  "FMA15741":"肝段III", // hepatovenous segment iii
  "FMA15742":"肝段IV", // hepatovenous segment iv
  "FMA15743":"肝段V", // hepatovenous segment v
  "FMA15744":"肝段VI", // hepatovenous segment vi
  "FMA15745":"肝段VII", // hepatovenous segment vii
  "FMA15746":"肝段VIII", // hepatovenous segment viii
  "FMA15747":"肝段IX", // hepatovenous segment ix
  "FMA15755":"右肝前扇区(活体)区", // region of anterior sector of right liver (in-vivo)
  "FMA15756":"右肝后扇区(活体)区", // region of posterior sector of right liver (in-vivo)
  "FMA15757":"左肝前扇区(活体)区", // region of anterior sector of left liver (in-vivo)
  "FMA15791":"肝右静脉属支", // tributary of right hepatic vein
  "FMA15793":"肝中静脉属支", // tributary of middle hepatic vein
  "FMA15794":"肝左静脉属支", // tributary of left hepatic vein
  "FMA15796":"右肝静脉后上段属支", // posterior superior segmental tributary of right hepatic vein
  "FMA15797":"右肝静脉后下段属支", // posterior inferior segmental tributary of right hepatic vein
  "FMA15798":"右肝静脉前上段属支", // anterior superior segmental tributary of right hepatic vein
  "FMA15800":"肝中静脉前下段属支", // anterior inferior segmental tributary of middle hepatic vein
  "FMA15801":"肝中静脉内侧下段属支", // medial inferior segmental tributary of middle hepatic vein
  "FMA15802":"左肝静脉内侧上段属支", // medial superior segmental tributary of left hepatic vein
  "FMA15803":"左肝静脉外侧上段属支", // lateral superior segmental tributary of left hepatic vein
  "FMA15804":"左肝静脉外侧下段属支", // lateral inferior segmental tributary of left hepatic vein
  "FMA15900":"膀胱", // urinary bladder
  "FMA16033":"第1腰椎椎间盘", // intervertebral disk of first lumbar vertebra
  "FMA16034":"第2腰椎椎间盘", // intervertebral disk of second lumbar vertebra
  "FMA16035":"第3腰椎椎间盘", // intervertebral disk of third lumbar vertebra
  "FMA16036":"第4腰椎椎间盘", // intervertebral disk of fourth lumbar vertebra
  "FMA16037":"第5腰椎椎间盘", // intervertebral disk of fifth lumbar vertebra
  "FMA16202":"骶骨", // sacrum
  "FMA16549":"阑尾系膜", // mesoappendix
  "FMA16585":"髋骨", // hip bone
  "FMA16586":"右髋骨", // right hip bone
  "FMA16587":"左髋骨", // left hip bone
  "FMA16980":"空肠区", // zone of jejunum
  "FMA16981":"空肠近段", // proximal part of jejunum
  "FMA16982":"空肠中段", // middle part of jejunum
  "FMA16983":"空肠远段", // distal part of jejunum
  "FMA17541":"肝静脉属支", // tributary of hepatic vein
  "FMA18060":"腰大肌", // psoas major
  "FMA18247":"阴茎头", // glans penis
  "FMA18255":"附睾", // epididymis
  "FMA18256":"右附睾", // right epididymis
  "FMA18257":"左附睾", // left epididymis
  "FMA18805":"髂外动脉", // external iliac artery
  "FMA18806":"右髂外动脉", // right external iliac artery
  "FMA18807":"左髂外动脉", // left external iliac artery
  "FMA18808":"髂内动脉", // internal iliac artery
  "FMA18809":"右髂内动脉", // right internal iliac artery
  "FMA18810":"左髂内动脉", // left internal iliac artery
  "FMA18883":"髂外静脉", // external iliac vein
  "FMA18884":"髂内静脉", // internal iliac vein
  "FMA18885":"右髂外静脉", // right external iliac vein
  "FMA18886":"左髂外静脉", // left external iliac vein
  "FMA18887":"右髂内静脉", // right internal iliac vein
  "FMA18888":"左髂内静脉", // left internal iliac vein
  "FMA18889":"髂内静脉属支", // tributary of internal iliac vein
  "FMA18902":"髂腰静脉", // iliolumbar vein
  "FMA18903":"右髂腰静脉", // right iliolumbar vein
  "FMA18904":"左髂腰静脉", // left iliolumbar vein
  "FMA18905":"骶外侧静脉", // lateral sacral vein
  "FMA18906":"右骶外侧静脉", // right lateral sacral vein
  "FMA18907":"左骶外侧静脉", // left lateral sacral vein
  "FMA18908":"臀上静脉", // superior gluteal vein
  "FMA18909":"右臀上静脉", // right superior gluteal vein
  "FMA18910":"左臀上静脉", // left superior gluteal vein
  "FMA18911":"臀下静脉", // inferior gluteal vein
  "FMA18912":"右臀下静脉", // right inferior gluteal vein
  "FMA18913":"左臀下静脉", // left inferior gluteal vein
  "FMA18914":"闭孔静脉", // obturator vein
  "FMA18915":"右闭孔静脉", // right obturator vein
  "FMA18916":"左闭孔静脉", // left obturator vein
  "FMA18917":"阴部内静脉", // internal pudendal vein
  "FMA18918":"右阴部内静脉", // right internal pudendal vein
  "FMA18919":"左阴部内静脉", // left internal pudendal vein
  "FMA19082":"梨状肌", // piriformis
  "FMA19083":"闭孔肌", // obturator muscle
  "FMA19086":"盆肌", // muscle of pelvis
  "FMA19088":"尾骨肌", // coccygeus
  "FMA19089":"肛提肌区", // zone of levator ani
  "FMA19090":"耻尾肌", // pubococcygeus
  "FMA19091":"耻骨直肠肌", // puborectalis
  "FMA19092":"髂尾肌", // iliococcygeus
  "FMA19234":"输精管", // deferent duct
  "FMA19235":"右输精管", // right deferent duct
  "FMA19236":"左输精管", // left deferent duct
  "FMA19386":"精囊", // seminal vesicle
  "FMA19387":"右精囊", // right seminal vesicle
  "FMA19388":"左精囊", // left seminal vesicle
  "FMA19617":"尿道海绵体", // corpus spongiosum of penis
  "FMA19618":"阴茎海绵体", // corpus cavernosum of penis
  "FMA19667":"尿道", // urethra
  "FMA19728":"会阴浅肌", // superficial perineal muscle
  "FMA19754":"腹膜区域", // region of peritoneum
  "FMA19783":"疏松结缔组织", // loose connective tissue
  "FMA19795":"阴茎背动脉", // dorsal artery of penis
  "FMA20107":"不规则结缔组织", // irregular connective tissue
  "FMA20111":"黏液样组织", // mucoid tissue
  "FMA20194":"尿道海绵体", // cavernous organ
  "FMA20221":"海绵器官区", // zone of cavernous organ
  "FMA20247":"阴茎头", // zone of corpus spongiosum of penis
  "FMA20278":"腹前壁肌", // muscle of anterior abdominal wall
  "FMA20289":"泪囊", // lacrimal sac
  "FMA20570":"腹膜系膜", // peritoneal mesentery
  "FMA20593":"脏腹膜区域", // region of visceral peritoneum
  "FMA20684":"髂外动脉分支主干", // trunk of branch of external iliac artery
  "FMA20686":"腹壁下动脉", // inferior epigastric artery
  "FMA20688":"右腹壁下动脉", // right inferior epigastric artery
  "FMA20689":"左腹壁下动脉", // left inferior epigastric artery
  "FMA20734":"腹壁浅动脉", // superficial epigastric artery
  "FMA20735":"右腹壁浅动脉", // right superficial epigastric artery
  "FMA20736":"左腹壁浅动脉", // left superficial epigastric artery
  "FMA20798":"旋股外侧动脉", // lateral circumflex femoral artery
  "FMA20801":"右旋股外侧动脉", // right lateral circumflex femoral artery
  "FMA20802":"左旋股外侧动脉", // left lateral circumflex femoral artery
  "FMA20803":"旋股外侧动脉分支", // branch of lateral circumflex femoral artery
  "FMA20805":"旋股外侧动脉降支", // descending branch of lateral circumflex femoral artery
  "FMA20818":"右阴茎背动脉", // right dorsal artery of penis
  "FMA20819":"左阴茎背动脉", // left dorsal artery of penis
  "FMA21162":"腹壁下静脉", // inferior epigastric vein
  "FMA21163":"右腹壁下静脉", // right inferior epigastric vein
  "FMA21164":"左腹壁下静脉", // left inferior epigastric vein
  "FMA21185":"股静脉", // femoral vein
  "FMA21188":"右股静脉", // right femoral vein
  "FMA21189":"左股静脉", // left femoral vein
  "FMA21240":"阴茎背深静脉", // tributary of internal pudendal vein
  "FMA21354":"阴茎背深静脉", // deep dorsal vein of penis
  "FMA21376":"大隐静脉", // great saphenous vein
  "FMA21378":"大隐静脉属支", // tributary of great saphenous vein
  "FMA21379":"右大隐静脉", // right great saphenous vein
  "FMA21380":"左大隐静脉", // left great saphenous vein
  "FMA21383":"阴部外浅静脉属支", // tributary of superficial external pudendal vein
  "FMA21384":"阴茎背浅静脉", // superficial dorsal vein of penis
  "FMA21385":"右阴茎背浅静脉", // right superficial dorsal vein of penis
  "FMA21386":"左阴茎背浅静脉", // left superficial dorsal vein of penis
  "FMA21387":"右髂总静脉", // right common iliac vein
  "FMA21388":"左髂总静脉", // left common iliac vein
  "FMA21422":"右旋股外侧动脉降支", // descending branch of right lateral circumflex femoral artery
  "FMA21423":"左旋股外侧动脉降支", // descending branch of left lateral circumflex femoral artery
  "FMA21496":"韧带器官", // ligament organ
  "FMA21520":"回结肠动脉下支的分支", // branch of inferior branch of ileocolic artery
  "FMA21521":"左结肠动脉分支主干", // trunk of branch of left colic artery
  "FMA21930":"肛门外括约肌", // external anal sphincter
  "FMA22298":"闭孔内肌", // obturator internus
  "FMA22299":"闭孔外肌", // obturator externus
  "FMA22310":"髂肌", // iliacus
  "FMA22314":"臀大肌", // gluteus maximus
  "FMA22315":"臀中肌", // gluteus medius
  "FMA22317":"臀小肌", // gluteus minimus
  "FMA22318":"上孖肌", // gemellus superior
  "FMA22319":"孖肌", // gemellus
  "FMA22320":"下孖肌", // gemellus inferior
  "FMA22321":"股方肌", // quadratus femoris
  "FMA22322":"右髂肌", // right iliacus
  "FMA22323":"左髂肌", // left iliacus
  "FMA22324":"右闭孔内肌", // right obturator internus
  "FMA22325":"左闭孔内肌", // left obturator internus
  "FMA22326":"右闭孔外肌", // right obturator externus
  "FMA22327":"左闭孔外肌", // left obturator externus
  "FMA22328":"右臀大肌", // right gluteus maximus
  "FMA22329":"左臀大肌", // left gluteus maximus
  "FMA22330":"右臀中肌", // right gluteus medius
  "FMA22331":"左臀中肌", // left gluteus medius
  "FMA22332":"右臀小肌", // right gluteus minimus
  "FMA22333":"左臀小肌", // left gluteus minimus
  "FMA22334":"右上孖肌", // right gemellus superior
  "FMA22335":"左上孖肌", // left gemellus superior
  "FMA22336":"右下孖肌", // right gemellus inferior
  "FMA22337":"左下孖肌", // left gemellus inferior
  "FMA22338":"右股方肌", // right quadratus femoris
  "FMA22339":"左股方肌", // left quadratus femoris
  "FMA22340":"右梨状肌", // right piriformis
  "FMA22341":"左梨状肌", // left piriformis
  "FMA22342":"右腰大肌", // right psoas major
  "FMA22343":"左腰大肌", // left psoas major
  "FMA22353":"缝匠肌", // sartorius
  "FMA22354":"右缝匠肌", // right sartorius
  "FMA22355":"左缝匠肌", // left sartorius
  "FMA22357":"半腱肌", // semitendinosus
  "FMA22358":"右半腱肌", // right semitendinosus
  "FMA22359":"左半腱肌", // left semitendinosus
  "FMA22423":"阔筋膜张肌", // tensor fasciae latae
  "FMA22424":"大腿前群肌", // muscle of anterior compartment of thigh
  "FMA22425":"右阔筋膜张肌", // right tensor fasciae latae
  "FMA22426":"左阔筋膜张肌", // left tensor fasciae latae
  "FMA22427":"大腿后群肌", // muscle of posterior compartment of thigh
  "FMA22429":"股四头肌区", // zone of quadriceps femoris
  "FMA22430":"股直肌", // rectus femoris
  "FMA22431":"股外侧肌", // vastus lateralis
  "FMA22432":"股内侧肌", // vastus medialis
  "FMA22433":"股中间肌", // vastus intermedius
  "FMA22438":"半膜肌", // semimembranosus
  "FMA22439":"大腿内侧群肌", // muscle of medial compartment of thigh
  "FMA22440":"耻骨肌", // pectineus
  "FMA22441":"长收肌", // adductor longus
  "FMA22442":"短收肌", // adductor brevis
  "FMA22443":"大收肌", // adductor magnus
  "FMA22448":"右半膜肌", // right semimembranosus
  "FMA22449":"左半膜肌", // left semimembranosus
  "FMA22450":"右耻骨肌", // right pectineus
  "FMA22451":"左耻骨肌", // left pectineus
  "FMA22452":"右短收肌", // right adductor brevis
  "FMA22454":"左短收肌", // left adductor brevis
  "FMA22456":"右长收肌", // right adductor longus
  "FMA22457":"左长收肌", // left adductor longus
  "FMA22459":"右大收肌", // right adductor magnus
  "FMA22460":"左大收肌", // left adductor magnus
  "FMA22470":"大腿肌", // muscle of thigh
  "FMA22471":"小腿肌", // muscle of leg
  "FMA22472":"小腿前群肌", // muscle of anterior compartment of leg
  "FMA22473":"小腿外侧群肌", // muscle of lateral compartment of leg
  "FMA22474":"小腿后群肌", // muscle of posterior compartment of leg
  "FMA22506":"膝降动脉", // descending genicular artery
  "FMA22507":"右膝降动脉", // right descending genicular artery
  "FMA22508":"左膝降动脉", // left descending genicular artery
  "FMA22532":"胫骨前肌", // tibialis anterior
  "FMA22533":"拇长伸肌", // extensor hallucis longus
  "FMA22534":"趾长伸肌", // extensor digitorum longus
  "FMA22535":"膝上动脉", // superior genicular artery
  "FMA22536":"膝中动脉", // middle genicular artery
  "FMA22537":"膝下动脉", // inferior genicular artery
  "FMA22538":"腓骨第三肌", // fibularis tertius
  "FMA22539":"腓骨长肌", // fibularis longus
  "FMA22540":"腓骨短肌", // fibularis brevis
  "FMA22542":"比目鱼肌", // soleus
  "FMA22543":"跖肌", // plantaris
  "FMA22544":"右胫骨前肌", // right tibialis anterior
  "FMA22545":"左胫骨前肌", // left tibialis anterior
  "FMA22546":"右踇长伸肌", // right extensor hallucis longus
  "FMA22547":"左踇长伸肌", // left extensor hallucis longus
  "FMA22548":"右趾长伸肌", // right extensor digitorum longus
  "FMA22549":"左趾长伸肌", // left extensor digitorum longus
  "FMA22550":"右第三腓骨肌", // right fibularis tertius
  "FMA22551":"左第三腓骨肌", // left fibularis tertius
  "FMA22552":"右腓骨长肌", // right fibularis longus
  "FMA22553":"左腓骨长肌", // left fibularis longus
  "FMA22554":"右腓骨短肌", // right fibularis brevis
  "FMA22555":"左腓骨短肌", // left fibularis brevis
  "FMA22558":"右比目鱼肌", // right soleus
  "FMA22559":"左比目鱼肌", // left soleus
  "FMA22560":"右跖肌", // right plantaris
  "FMA22561":"左跖肌", // left plantaris
  "FMA22562":"右膝中动脉", // right middle genicular artery
  "FMA22563":"左膝中动脉", // left middle genicular artery
  "FMA22584":"膝上内侧动脉", // superior medial genicular artery
  "FMA22585":"膝上外侧动脉", // superior lateral genicular artery
  "FMA22586":"右膝上内侧动脉", // right medial superior genicular artery
  "FMA22587":"左膝上内侧动脉", // left medial superior genicular artery
  "FMA22588":"右膝上外侧动脉", // right lateral superior genicular artery
  "FMA22589":"左膝上外侧动脉", // left lateral superior genicular artery
  "FMA22590":"腘肌", // popliteus
  "FMA22591":"右腘肌", // right popliteus
  "FMA22592":"左腘肌", // left popliteus
  "FMA22593":"拇长屈肌", // flexor hallucis longus
  "FMA22594":"脊柱肌", // muscle of vertebral column
  "FMA22653":"头夹肌", // splenius capitis
  "FMA22654":"腋动脉", // axillary artery
  "FMA22655":"右腋动脉", // right axillary artery
  "FMA22656":"左腋动脉", // left axillary artery
  "FMA22674":"胸外侧动脉", // lateral thoracic artery
  "FMA22675":"右胸外侧动脉", // right lateral thoracic artery
  "FMA22676":"左胸外侧动脉", // left lateral thoracic artery
  "FMA22677":"肩胛下动脉", // subscapular artery
  "FMA22678":"右肩胛下动脉", // right subscapular artery
  "FMA22679":"左肩胛下动脉", // left subscapular artery
  "FMA22680":"旋肱前动脉", // anterior circumflex humeral artery
  "FMA22681":"颈夹肌", // splenius cervicis
  "FMA22682":"右旋肱前动脉", // right anterior circumflex humeral artery
  "FMA22683":"左旋肱前动脉", // left anterior circumflex humeral artery
  "FMA22684":"旋肱后动脉", // posterior circumflex humeral artery
  "FMA22685":"右旋肱后动脉", // right posterior circumflex humeral artery
  "FMA22687":"左旋肱后动脉", // left posterior circumflex humeral artery
  "FMA22689":"肱动脉", // brachial artery
  "FMA22691":"右肱动脉", // right brachial artery
  "FMA22692":"左肱动脉", // left brachial artery
  "FMA22693":"肱动脉分支", // branch of brachial artery
  "FMA22695":"肱深动脉", // deep brachial artery
  "FMA22696":"右肱深动脉", // right deep brachial artery
  "FMA22697":"左肱深动脉", // left deep brachial artery
  "FMA22702":"腰髂肋肌", // iliocostalis lumborum
  "FMA22703":"胸髂肋肌", // iliocostalis thoracis
  "FMA22704":"颈髂肋肌", // iliocostalis cervicis
  "FMA22706":"尺侧上副动脉", // superior ulnar collateral artery
  "FMA22707":"右尺侧上副动脉", // right superior ulnar collateral artery
  "FMA22708":"左尺侧上副动脉", // left superior ulnar collateral artery
  "FMA22709":"胸最长肌", // longissimus thoracis
  "FMA22710":"尺侧下副动脉", // inferior ulnar collateral artery
  "FMA22711":"颈最长肌", // longissimus cervicis
  "FMA22712":"右尺侧下副动脉", // right inferior ulnar collateral artery
  "FMA22713":"左尺侧下副动脉", // left inferior ulnar collateral artery
  "FMA22714":"头最长肌", // longissimus capitis
  "FMA22726":"右颈夹肌", // right splenius cervicis
  "FMA22727":"左颈夹肌", // left splenius cervicis
  "FMA22728":"右头夹肌", // right splenius capitis
  "FMA22729":"左头夹肌", // left splenius capitis
  "FMA22730":"桡动脉", // radial artery
  "FMA22733":"右桡动脉", // right radial artery
  "FMA22734":"左桡动脉", // left radial artery
  "FMA22738":"桡动脉分支", // branch of radial artery
  "FMA22740":"右腰髂肋肌", // right iliocostalis lumborum
  "FMA22741":"左腰髂肋肌", // left iliocostalis lumborum
  "FMA22742":"右胸髂肋肌", // right iliocostalis thoracis
  "FMA22743":"左胸髂肋肌", // left iliocostalis thoracis
  "FMA22744":"右颈髂肋肌", // right iliocostalis cervicis
  "FMA22745":"左颈髂肋肌", // left iliocostalis cervicis
  "FMA22748":"桡侧返动脉", // radial recurrent artery
  "FMA22751":"右胸最长肌", // right longissimus thoracis
  "FMA22753":"左胸最长肌", // left longissimus thoracis
  "FMA22754":"右头最长肌", // right longissimus capitis
  "FMA22755":"桡动脉腕背支", // dorsal carpal branch of radial artery
  "FMA22756":"左头最长肌", // left longissimus capitis
  "FMA22757":"右颈最长肌", // right longissimus cervicis
  "FMA22758":"左颈最长肌", // left longissimus cervicis
  "FMA22762":"拇主要动脉", // arteria princeps pollicis
  "FMA22763":"示指桡侧动脉", // arteria radialis indicis
  "FMA22764":"右桡侧返动脉", // right radial recurrent artery
  "FMA22765":"胸棘肌", // spinalis thoracis
  "FMA22766":"左桡侧返动脉", // left radial recurrent artery
  "FMA22772":"右桡动脉腕背支", // dorsal carpal branch of right radial artery
  "FMA22773":"左桡动脉腕背支", // dorsal carpal branch of left radial artery
  "FMA22777":"右示指桡侧动脉", // right arteria radialis indicis
  "FMA22778":"左示指桡侧动脉", // left arteria radialis indicis
  "FMA22779":"右胸棘肌", // right spinalis thoracis
  "FMA22780":"左胸棘肌", // left spinalis thoracis
  "FMA22796":"尺动脉", // ulnar artery
  "FMA22797":"右尺动脉", // right ulnar artery
  "FMA22798":"左尺动脉", // left ulnar artery
  "FMA22799":"尺动脉分支", // branch of ulnar artery
  "FMA22800":"尺侧前返动脉", // anterior ulnar recurrent artery
  "FMA22801":"右尺侧返动脉前支", // right anterior ulnar recurrent artery
  "FMA22802":"左尺侧返动脉前支", // left anterior ulnar recurrent artery
  "FMA22803":"尺侧后返动脉", // posterior ulnar recurrent artery
  "FMA22804":"右尺侧返动脉后支", // right posterior ulnar recurrent artery
  "FMA22805":"左尺侧返动脉后支", // left posterior ulnar recurrent artery
  "FMA22806":"骨间总动脉", // common interosseous artery
  "FMA22807":"右骨间总动脉", // right common interosseous artery
  "FMA22808":"左骨间总动脉", // left common interosseous artery
  "FMA22809":"骨间总动脉分支", // branch of common interosseous artery
  "FMA22810":"骨间前动脉", // anterior interosseous artery
  "FMA22812":"右骨间前动脉", // right anterior interosseous artery
  "FMA22813":"左骨间前动脉", // left anterior interosseous artery
  "FMA22820":"尺动脉腕背支", // dorsal carpal branch of ulnar artery
  "FMA22821":"右尺动脉腕背支", // right dorsal carpal branch of ulnar artery
  "FMA22822":"左尺动脉腕背支", // left dorsal carpal branch of ulnar artery
  "FMA22823":"半棘肌", // semispinalis
  "FMA22828":"胸半棘肌", // semispinalis thoracis
  "FMA22829":"颈半棘肌", // semispinalis cervicis
  "FMA22830":"头半棘肌", // semispinalis capitis
  "FMA22834":"掌浅弓", // superficial palmar arterial arch
  "FMA22835":"右掌浅动脉弓", // right superficial palmar arterial arch
  "FMA22837":"左掌浅动脉弓", // left superficial palmar arterial arch
  "FMA22838":"掌深弓", // deep palmar arterial arch
  "FMA22839":"右掌深弓", // right deep palmar arch
  "FMA22840":"左掌深弓", // left deep palmar arch
  "FMA22841":"棘间肌", // interspinalis muscle
  "FMA22842":"动脉吻合的分支", // branch of arterial anastomosis
  "FMA22843":"掌深弓分支", // branch of deep palmar arterial arch
  "FMA22845":"掌浅弓分支", // branch of superficial palmar arterial arch
  "FMA22846":"胸棘间肌", // interspinalis thoracis
  "FMA22848":"横突间肌", // intertransversarius muscle
  "FMA22849":"腰横突间肌", // lumbar intertransversarius
  "FMA22850":"腰横突间外侧肌", // lateral lumbar intertransversarius
  "FMA22851":"腰横突间内侧肌", // medial lumbar intertransversarius
  "FMA22854":"第1指掌侧总动脉", // first common palmar digital artery
  "FMA22855":"第2指掌侧总动脉", // second common palmar digital artery
  "FMA22856":"右第1指掌侧总动脉", // right first common palmar digital artery
  "FMA22857":"中指外侧固有指掌侧动脉", // lateral proper palmar digital artery of middle finger
  "FMA22858":"右中指桡侧指掌侧固有动脉", // lateral proper palmar digital artery of right middle finger
  "FMA22860":"左中指桡侧指掌侧固有动脉", // lateral proper palmar digital artery of left middle finger
  "FMA22863":"掌心动脉", // palmar metacarpal artery
  "FMA22864":"右掌心动脉", // right palmar metacarpal artery
  "FMA22865":"左掌心动脉", // left palmar metacarpal artery
  "FMA22872":"右胸半棘肌", // right semispinalis thoracis
  "FMA22873":"左胸半棘肌", // left semispinalis thoracis
  "FMA22874":"右颈半棘肌", // right semispinalis cervicis
  "FMA22875":"左颈半棘肌", // left semispinalis cervicis
  "FMA22876":"右头半棘肌", // right semispinalis capitis
  "FMA22877":"左头半棘肌", // left semispinalis capitis
  "FMA22890":"右胸棘间肌", // right interspinalis thoracis
  "FMA22891":"左胸棘间肌", // left interspinalis thoracis
  "FMA22905":"右拇主要动脉", // right arteria princeps pollicis
  "FMA22907":"左拇主要动脉", // left arteria princeps pollicis
  "FMA22908":"贵要静脉", // basilic vein
  "FMA22909":"右贵要静脉", // right basilic vein
  "FMA22910":"左贵要静脉", // left basilic vein
  "FMA22911":"掌深静脉弓", // deep palmar venous arch
  "FMA22912":"右掌深静脉弓", // right deep palmar venous arch
  "FMA22913":"左掌深静脉弓", // left deep palmar venous arch
  "FMA22914":"掌浅静脉弓", // superficial palmar venous arch
  "FMA22915":"右掌浅静脉弓", // right superficial palmar venous arch
  "FMA22916":"左掌浅静脉弓", // left superficial palmar venous arch
  "FMA22917":"静脉吻合属支", // tributary of venous anastomosis
  "FMA22919":"掌心静脉", // palmar metacarpal vein
  "FMA22920":"右掌心静脉", // right palmar metacarpal vein
  "FMA22921":"左掌心静脉", // left palmar metacarpal vein
  "FMA22922":"掌浅静脉弓属支", // tributary of superficial palmar venous arch
  "FMA22923":"指掌侧总静脉", // common palmar digital vein
  "FMA22926":"指掌侧总静脉属支", // tributary of common palmar digital vein
  "FMA22927":"示指固有指掌侧静脉", // proper palmar digital vein of index finger
  "FMA22928":"中指固有指掌侧静脉", // proper palmar digital vein of middle finger
  "FMA22929":"环指固有指掌侧静脉", // proper palmar digital vein of ring finger
  "FMA22930":"锁骨下静脉属支", // tributary of subclavian vein
  "FMA22934":"肱静脉", // brachial vein
  "FMA22935":"右臂内侧静脉", // right medial brachial vein
  "FMA22936":"左臂内侧静脉", // left medial brachial vein
  "FMA22937":"肱静脉属支", // tributary of brachial vein
  "FMA22947":"桡静脉", // radial vein
  "FMA22948":"右桡静脉", // right radial vein
  "FMA22949":"左桡静脉", // left radial vein
  "FMA22950":"尺静脉", // ulnar vein
  "FMA22951":"右尺静脉", // right ulnar vein
  "FMA22952":"左尺静脉", // left ulnar vein
  "FMA22953":"桡静脉属支", // tributary of radial vein
  "FMA22954":"掌背静脉", // dorsal metacarpal vein
  "FMA22963":"肘正中静脉", // median cubital vein
  "FMA22964":"右肘正中静脉", // right median cubital vein
  "FMA22965":"左肘正中静脉", // left median cubital vein
  "FMA22967":"前臂正中静脉", // median antebrachial vein
  "FMA22968":"右前臂正中静脉", // right median antebrachial vein
  "FMA22969":"左前臂正中静脉", // left median antebrachial vein
  "FMA23046":"右环指尺侧指掌侧固有动脉", // medial proper palmar digital artery of ring finger
  "FMA23047":"示指内侧固有指掌侧动脉", // medial proper palmar digital artery of index finger
  "FMA23048":"小指外侧固有指掌侧动脉", // lateral proper palmar digital artery of little finger
  "FMA23050":"右示指尺侧指掌侧固有动脉", // medial proper palmar digital artery of right index finger
  "FMA23051":"左示指尺侧指掌侧固有动脉", // medial proper palmar digital artery of left index finger
  "FMA23052":"右环指尺侧指掌侧固有动脉", // medial proper palmar digital artery of right ring finger
  "FMA23054":"右小指桡侧指掌侧固有动脉", // lateral proper palmar digital artery of right little finger
  "FMA23055":"左小指桡侧指掌侧固有动脉", // lateral proper palmar digital artery of left little finger
  "FMA23062":"胸肩峰动脉胸肌支", // pectoral branch of thoraco-acromial artery
  "FMA23063":"右胸肩峰动脉胸肌支", // pectoral branch of right thoraco-acromial artery
  "FMA23064":"左胸肩峰动脉胸肌支", // pectoral branch of left thoraco-acromial artery
  "FMA23065":"胸肩峰动脉肩峰支", // acromial branch of thoraco-acromial artery
  "FMA23067":"胸肩峰动脉三角肌支", // deltoid branch of thoraco-acromial artery
  "FMA23068":"右胸肩峰动脉肩峰支", // acromial branch of right thoraco-acromial artery
  "FMA23069":"左胸肩峰动脉肩峰支", // acromial branch of left thoraco-acromial artery
  "FMA23072":"右胸肩峰动脉三角肌支", // deltoid branch of right thoraco-acromial artery
  "FMA23073":"左胸肩峰动脉三角肌支", // deltoid branch of left thoraco-acromial artery
  "FMA23081":"回旋肌", // rotator muscle
  "FMA23082":"颈回旋肌", // cervical rotator
  "FMA23083":"胸回旋肌", // thoracic rotator
  "FMA23084":"腰回旋肌", // lumbar rotator
  "FMA23089":"右腰回旋肌", // right lumbar rotator
  "FMA23090":"左腰回旋肌", // left lumbar rotator
  "FMA23113":"肩胛下静脉", // subscapular vein
  "FMA23114":"右肩胛下静脉", // right subscapular vein
  "FMA23115":"左肩胛下静脉", // left subscapular vein
  "FMA23117":"肱深动脉分支", // branch of deep brachial artery
  "FMA23119":"内侧副动脉", // medial collateral artery
  "FMA23120":"桡侧副动脉", // radial collateral artery
  "FMA23124":"右肱深动脉中副支", // middle collateral branch of right deep brachial artery
  "FMA23125":"左肱深动脉中副支", // middle collateral branch of left deep brachial artery
  "FMA23126":"右肱深动脉桡侧副支", // radial collateral branch of right deep brachial artery
  "FMA23127":"左肱深动脉桡侧副支", // radial collateral branch of left deep brachial artery
  "FMA23130":"右肱骨", // right humerus
  "FMA23131":"左肱骨", // left humerus
  "FMA23179":"旋肩胛动脉", // circumflex scapular artery
  "FMA23180":"右旋肩胛动脉", // right circumflex scapular artery
  "FMA23181":"左旋肩胛动脉", // left circumflex scapular artery
  "FMA23463":"桡骨", // radius
  "FMA23464":"右桡骨", // right radius
  "FMA23465":"左桡骨", // left radius
  "FMA23466":"尺骨", // ulna
  "FMA23467":"右尺骨", // right ulna
  "FMA23468":"左尺骨", // left ulna
  "FMA23706":"前臂骨间膜", // interosseous membrane of forearm
  "FMA23707":"右前臂骨间膜", // interosseous membrane of right forearm
  "FMA23708":"左前臂骨间膜", // interosseous membrane of left forearm
  "FMA23709":"舟骨", // scaphoid
  "FMA23712":"月骨", // lunate
  "FMA23715":"三角骨", // triquetral
  "FMA23718":"豌豆骨", // pisiform
  "FMA23721":"大多角骨", // trapezium
  "FMA23724":"小多角骨", // trapezoid
  "FMA23725":"右小多角骨", // right trapezoid
  "FMA23727":"头状骨", // capitate
  "FMA23730":"钩骨", // hamate
  "FMA23889":"腕骨", // carpal bone
  "FMA23899":"第1掌骨", // first metacarpal bone
  "FMA23900":"第2掌骨", // second metacarpal bone
  "FMA23901":"第3掌骨", // third metacarpal bone
  "FMA23902":"第4掌骨", // fourth metacarpal bone
  "FMA23903":"第5掌骨", // fifth metacarpal bone
  "FMA23914":"指骨", // phalanx of finger
  "FMA23918":"拇指近节指骨", // proximal phalanx of thumb
  "FMA23919":"示指近节指骨", // proximal phalanx of index finger
  "FMA23920":"中指近节指骨", // proximal phalanx of middle finger
  "FMA23921":"环指近节指骨", // proximal phalanx of ring finger
  "FMA23922":"小指近节指骨", // proximal phalanx of little finger
  "FMA23933":"示指中节指骨", // middle phalanx of index finger
  "FMA23934":"中指中节指骨", // middle phalanx of middle finger
  "FMA23935":"环指中节指骨", // middle phalanx of ring finger
  "FMA23936":"小指中节指骨", // middle phalanx of little finger
  "FMA23938":"左示指中节指骨", // middle phalanx of left index finger
  "FMA23940":"左中指中节指骨", // middle phalanx of left middle finger
  "FMA23942":"左环指中节指骨", // middle phalanx of left ring finger
  "FMA23944":"左小指中节指骨", // middle phalanx of left little finger
  "FMA23945":"拇指远节指骨", // distal phalanx of thumb
  "FMA23946":"示指远节指骨", // distal phalanx of index finger
  "FMA23947":"中指远节指骨", // distal phalanx of middle finger
  "FMA23948":"环指远节指骨", // distal phalanx of ring finger
  "FMA23949":"小指远节指骨", // distal phalanx of little finger
  "FMA23951":"左拇指远节指骨", // distal phalanx of left thumb
  "FMA23953":"左示指远节指骨", // distal phalanx of left index finger
  "FMA23955":"左中指远节指骨", // distal phalanx of left middle finger
  "FMA23957":"左环指远节指骨", // distal phalanx of left ring finger
  "FMA23959":"左小指远节指骨", // distal phalanx of left little finger
  "FMA24034":"器官部腔", // cavity of organ part
  "FMA24218":"头部分部", // subdivision of head
  "FMA24435":"右舟骨", // right scaphoid
  "FMA24436":"左舟骨", // left scaphoid
  "FMA24437":"右月骨", // right lunate
  "FMA24438":"左月骨", // left lunate
  "FMA24439":"右三角骨", // right triquetral
  "FMA24440":"左三角骨", // left triquetral
  "FMA24441":"右豌豆骨", // right pisiform
  "FMA24442":"左豌豆骨", // left pisiform
  "FMA24443":"右大多角骨", // right trapezium
  "FMA24444":"左大多角骨", // left trapezium
  "FMA24445":"左小多角骨", // left trapezoid
  "FMA24446":"右头状骨", // right capitate
  "FMA24447":"左头状骨", // left capitate
  "FMA24448":"右钩骨", // right hamate
  "FMA24449":"左钩骨", // left hamate
  "FMA24450":"右拇指近节指骨", // proximal phalanx of right thumb
  "FMA24451":"右示指近节指骨", // proximal phalanx of right index finger
  "FMA24452":"右中指近节指骨", // proximal phalanx of right middle finger
  "FMA24453":"右环指近节指骨", // proximal phalanx of right ring finger
  "FMA24454":"右小指近节指骨", // proximal phalanx of right little finger
  "FMA24455":"右示指中节指骨", // middle phalanx of right index finger
  "FMA24456":"右中指中节指骨", // middle phalanx of right middle finger
  "FMA24457":"右环指中节指骨", // middle phalanx of right ring finger
  "FMA24458":"右小指中节指骨", // middle phalanx of right little finger
  "FMA24459":"右拇指远节指骨", // distal phalanx of right thumb
  "FMA24460":"右示指远节指骨", // distal phalanx of right index finger
  "FMA24461":"右中指远节指骨", // distal phalanx of right middle finger
  "FMA24462":"右环指远节指骨", // distal phalanx of right ring finger
  "FMA24463":"右小指远节指骨", // distal phalanx of right little finger
  "FMA24464":"右第1掌骨", // right first metacarpal bone
  "FMA24465":"左第1掌骨", // left first metacarpal bone
  "FMA24466":"右第2掌骨", // right second metacarpal bone
  "FMA24467":"左第2掌骨", // left second metacarpal bone
  "FMA24468":"右第3掌骨", // right third metacarpal bone
  "FMA24469":"左第3掌骨", // left third metacarpal bone
  "FMA24470":"右第4掌骨", // right fourth metacarpal bone
  "FMA24471":"左第4掌骨", // left fourth metacarpal bone
  "FMA24472":"右第5掌骨", // right fifth metacarpal bone
  "FMA24473":"左第5掌骨", // left fifth metacarpal bone
  "FMA24474":"右股骨", // right femur
  "FMA24475":"左股骨", // left femur
  "FMA24476":"胫骨", // tibia
  "FMA24477":"右胫骨", // right tibia
  "FMA24478":"左胫骨", // left tibia
  "FMA24479":"腓骨", // fibula
  "FMA24480":"右腓骨", // right fibula
  "FMA24481":"左腓骨", // left fibula
  "FMA24482":"右距骨", // right talus
  "FMA24483":"左距骨", // left talus
  "FMA24485":"髌骨", // patella
  "FMA24486":"右髌骨", // right patella
  "FMA24487":"左髌骨", // left patella
  "FMA24491":"跗骨", // tarsal bone
  "FMA24492":"跖骨", // metatarsal bone
  "FMA24493":"趾骨", // phalanx of toe
  "FMA24496":"跟骨", // calcaneus
  "FMA24497":"右跟骨", // right calcaneus
  "FMA24498":"左跟骨", // left calcaneus
  "FMA24499":"足舟骨", // navicular bone of foot
  "FMA24500":"右足舟骨", // navicular bone of right foot
  "FMA24501":"左足舟骨", // navicular bone of left foot
  "FMA24502":"第1跖骨", // first metatarsal bone
  "FMA24503":"第2跖骨", // second metatarsal bone
  "FMA24504":"第3跖骨", // third metatarsal bone
  "FMA24505":"第4跖骨", // fourth metatarsal bone
  "FMA24506":"第5跖骨", // fifth metatarsal bone
  "FMA24507":"右第1跖骨", // right first metatarsal bone
  "FMA24508":"左第1跖骨", // left first metatarsal bone
  "FMA24509":"右第2跖骨", // right second metatarsal bone
  "FMA24510":"左第2跖骨", // left second metatarsal bone
  "FMA24511":"右第3跖骨", // right third metatarsal bone
  "FMA24512":"左第3跖骨", // left third metatarsal bone
  "FMA24513":"右第4跖骨", // right fourth metatarsal bone
  "FMA24514":"左第4跖骨", // left fourth metatarsal bone
  "FMA24515":"右第5跖骨", // right fifth metatarsal bone
  "FMA24516":"左第5跖骨", // left fifth metatarsal bone
  "FMA24517":"楔骨", // cuneiform bone
  "FMA24518":"内侧楔骨", // medial cuneiform bone
  "FMA24519":"中间楔骨", // intermediate cuneiform bone
  "FMA24520":"外侧楔骨", // lateral cuneiform bone
  "FMA24521":"右内侧楔骨", // right medial cuneiform bone
  "FMA24522":"左内侧楔骨", // left medial cuneiform bone
  "FMA24523":"右中间楔骨", // right intermediate cuneiform bone
  "FMA24524":"左中间楔骨", // left intermediate cuneiform bone
  "FMA24525":"右外侧楔骨", // right lateral cuneiform bone
  "FMA24526":"左外侧楔骨", // left lateral cuneiform bone
  "FMA24527":"骰骨", // cuboid bone
  "FMA24528":"右骰骨", // right cuboid bone
  "FMA24529":"左骰骨", // left cuboid bone
  "FMA24551":"右尖段静脉干", // trunk of intrapulmonary vein
  "FMA25058":"枢椎椎间盘", // intervertebral disk of axis
  "FMA25624":"骨性韧带", // skeletal ligament
  "FMA25625":"非骨性韧带", // nonskeletal ligament
  "FMA30313":"动脉干", // arterial trunk
  "FMA30314":"静脉干", // venous trunk
  "FMA30320":"管", // duct
  "FMA31739":"支气管树段", // segment of bronchial tree
  "FMA32514":"椎前肌", // prevertebral muscle
  "FMA32515":"椎后肌", // postvertebral muscle
  "FMA32516":"肩外在肌", // extrinsic muscle of shoulder
  "FMA32518":"肩深外在肌", // deep extrinsic muscle of shoulder
  "FMA32519":"肩胛提肌", // levator scapulae
  "FMA32520":"肩固有肌", // intrinsic muscle of shoulder
  "FMA32525":"头后大直肌", // rectus capitis posterior major
  "FMA32526":"头后小直肌", // rectus capitis posterior minor
  "FMA32527":"头上斜肌", // obliquus capitis superior
  "FMA32528":"头下斜肌", // obliquus capitis inferior
  "FMA32529":"斜方肌区", // zone of trapezius
  "FMA32530":"右头后大直肌", // right rectus capitis posterior major
  "FMA32531":"左头后大直肌", // left rectus capitis posterior major
  "FMA32532":"右头后小直肌", // right rectus capitis posterior minor
  "FMA32533":"左头后小直肌", // left rectus capitis posterior minor
  "FMA32534":"右头上斜肌", // right obliquus capitis superior
  "FMA32535":"左头上斜肌", // left obliquus capitis superior
  "FMA32536":"右头下斜肌", // right obliquus capitis inferior
  "FMA32537":"左头下斜肌", // left obliquus capitis inferior
  "FMA32540":"右肩胛提肌", // right levator scapulae
  "FMA32541":"左肩胛提肌", // left levator scapulae
  "FMA32544":"右冈上肌", // right supraspinatus
  "FMA32545":"左冈上肌", // left supraspinatus
  "FMA32546":"冈下肌", // infraspinatus
  "FMA32547":"右冈下肌", // right infraspinatus muscle
  "FMA32548":"左冈下肌", // left infraspinatus muscle
  "FMA32549":"大圆肌", // teres major
  "FMA32550":"小圆肌", // teres minor
  "FMA32551":"右大圆肌", // right teres major
  "FMA32552":"左大圆肌", // left teres major
  "FMA32553":"右小圆肌", // right teres minor
  "FMA32554":"左小圆肌", // left teres minor
  "FMA32555":"斜方肌升部", // ascending part of trapezius
  "FMA32556":"斜方肌横部", // transverse part of trapezius
  "FMA32557":"斜方肌降部", // descending part of trapezius
  "FMA32558":"肌系", // musculature
  "FMA32559":"浅椎后肌", // superficial postvertebral muscle
  "FMA32560":"中间椎后肌", // intermediate postvertebral muscle
  "FMA32561":"深椎后肌", // deep postvertebral muscle
  "FMA32582":"枕下后肌", // posterior suboccipital muscle
  "FMA32618":"第2趾近节趾骨", // proximal phalanx of second toe
  "FMA32619":"第3趾近节趾骨", // proximal phalanx of third toe
  "FMA32620":"第4趾近节趾骨", // proximal phalanx of fourth toe
  "FMA32621":"小趾近节趾骨", // proximal phalanx of little toe
  "FMA32623":"第2趾中节趾骨", // middle phalanx of second toe
  "FMA32624":"第3趾中节趾骨", // middle phalanx of third toe
  "FMA32625":"第4趾中节趾骨", // middle phalanx of fourth toe
  "FMA32627":"拇趾远节趾骨", // distal phalanx of big toe
  "FMA32628":"第2趾远节趾骨", // distal phalanx of second toe
  "FMA32629":"第3趾远节趾骨", // distal phalanx of third toe
  "FMA32630":"第4趾远节趾骨", // distal phalanx of fourth toe
  "FMA32631":"小趾远节趾骨", // distal phalanx of little toe
  "FMA32634":"右第2趾近节趾骨", // proximal phalanx of right second toe
  "FMA32635":"左第2趾近节趾骨", // proximal phalanx of left second toe
  "FMA32636":"右第3趾近节趾骨", // proximal phalanx of right third toe
  "FMA32637":"左第3趾近节趾骨", // proximal phalanx of left third toe
  "FMA32638":"右第4趾近节趾骨", // proximal phalanx of right fourth toe
  "FMA32639":"左第4趾近节趾骨", // proximal phalanx of left fourth toe
  "FMA32640":"右小趾近节趾骨", // proximal phalanx of right little toe
  "FMA32641":"左小趾近节趾骨", // proximal phalanx of left little toe
  "FMA32642":"右第2趾中节趾骨", // middle phalanx of right second toe
  "FMA32643":"左第2趾中节趾骨", // middle phalanx of left second toe
  "FMA32644":"右第3趾中节趾骨", // middle phalanx of right third toe
  "FMA32645":"左第3趾中节趾骨", // middle phalanx of left third toe
  "FMA32646":"右第4趾中节趾骨", // middle phalanx of right fourth toe
  "FMA32647":"左第4趾中节趾骨", // middle phalanx of left fourth toe
  "FMA32650":"右踇趾远节趾骨", // distal phalanx of right big toe
  "FMA32651":"左踇趾远节趾骨", // distal phalanx of left big toe
  "FMA32652":"右第2趾远节趾骨", // distal phalanx of right second toe
  "FMA32653":"左第2趾远节趾骨", // distal phalanx of left second toe
  "FMA32654":"右第3趾远节趾骨", // distal phalanx of right third toe
  "FMA32655":"左第3趾远节趾骨", // distal phalanx of left third toe
  "FMA32656":"右第4趾远节趾骨", // distal phalanx of right fourth toe
  "FMA32657":"左第4趾远节趾骨", // distal phalanx of left fourth toe
  "FMA32658":"右小趾远节趾骨", // distal phalanx of right little toe
  "FMA32659":"左小趾远节趾骨", // distal phalanx of left little toe
  "FMA32672":"籽骨", // sesamoid bone
  "FMA32884":"拇趾趾骨", // phalanx of big toe
  "FMA32899":"第2趾趾骨", // phalanx of second toe
  "FMA32900":"第3趾趾骨", // phalanx of third toe
  "FMA32901":"第4趾趾骨", // phalanx of fourth toe
  "FMA32902":"小趾趾骨", // phalanx of little toe
  "FMA33302":"近侧列腕骨", // proximal carpal bone
  "FMA33303":"远侧列腕骨", // distal carpal bone
  "FMA33531":"肩肌", // muscle of shoulder
  "FMA33581":"右斜方肌升部", // ascending part of right trapezius
  "FMA33583":"左斜方肌升部", // ascending part of left trapezius
  "FMA33584":"右斜方肌横部", // transverse part of right trapezius
  "FMA33585":"左斜方肌横部", // transverse part of left trapezius
  "FMA33586":"右斜方肌降部", // descending part of right trapezius
  "FMA33587":"左斜方肌降部", // descending part of left trapezius
  "FMA34676":"三角肌区", // zone of deltoid
  "FMA34677":"三角肌锁骨部", // clavicular part of deltoid
  "FMA34678":"三角肌肩峰部", // acromial part of deltoid
  "FMA34679":"三角肌脊柱部", // spinal part of deltoid
  "FMA34680":"右三角肌锁骨部", // clavicular part of right deltoid
  "FMA34681":"左三角肌锁骨部", // clavicular part of left deltoid
  "FMA34682":"右三角肌肩峰部", // acromial part of right deltoid
  "FMA34683":"左三角肌肩峰部", // acromial part of left deltoid
  "FMA34684":"右三角肌脊柱部", // spinal part of right deltoid
  "FMA34685":"左三角肌脊柱部", // spinal part of left deltoid
  "FMA34686":"胸大肌区", // zone of pectoralis major
  "FMA34687":"胸大肌锁骨部", // clavicular part of pectoralis major
  "FMA34690":"右胸大肌锁骨部", // clavicular part of right pectoralis major
  "FMA34691":"左胸大肌锁骨部", // clavicular part of left pectoralis major
  "FMA34696":"胸大肌胸肋部", // sternocostal part of pectoralis major
  "FMA34699":"胸大肌腹部", // abdominal part of pectoralis major
  "FMA35187":"小腿骨间膜", // interosseous membrane of leg
  "FMA35192":"右小腿骨间膜", // interosseous membrane of right leg
  "FMA35193":"左小腿骨间膜", // interosseous membrane of left leg
  "FMA35477":"拇指指骨", // phalanx of thumb
  "FMA35480":"示指指骨", // phalanx of index finger
  "FMA35483":"中指指骨", // phalanx of middle finger
  "FMA35486":"环指指骨", // phalanx of ring finger
  "FMA35489":"小指指骨", // phalanx of little finger
  "FMA37347":"肩带肌", // muscle of pectoral girdle
  "FMA37348":"游离上肢肌", // muscle of free upper limb
  "FMA37349":"胸肌", // pectoral muscle
  "FMA37367":"盆带肌", // muscle of pelvic girdle
  "FMA37368":"游离下肢肌", // muscle of free lower limb
  "FMA37369":"足肌", // muscle of foot
  "FMA37370":"臂肌", // muscle of arm
  "FMA37371":"前臂肌", // muscle of forearm
  "FMA37372":"手肌", // muscle of hand
  "FMA37373":"拇短展肌", // abductor pollicis brevis
  "FMA37378":"拇短屈肌", // flexor pollicis brevis
  "FMA37379":"拇对掌肌", // opponens pollicis
  "FMA37382":"小指展肌", // abductor digiti minimi of hand
  "FMA37383":"小指短屈肌", // flexor digiti minimi brevis of hand
  "FMA37384":"小指对掌肌", // opponens digiti minimi of hand
  "FMA37386":"右拇短展肌", // right abductor pollicis brevis
  "FMA37387":"左拇短展肌", // left abductor pollicis brevis
  "FMA37388":"右拇短屈肌", // right flexor pollicis brevis
  "FMA37389":"左拇短屈肌", // left flexor pollicis brevis
  "FMA37390":"右拇指对掌肌", // right opponens pollicis
  "FMA37391":"左拇指对掌肌", // left opponens pollicis
  "FMA37396":"右手小指展肌", // abductor digiti minimi of right hand
  "FMA37397":"左手小指展肌", // abductor digiti minimi of left hand
  "FMA37398":"右手小指短屈肌", // flexor digiti minimi brevis of right hand
  "FMA37399":"左手小指短屈肌", // flexor digiti minimi brevis of left hand
  "FMA37400":"右手小指对掌肌", // opponens digiti minimi of right hand
  "FMA37401":"左手小指对掌肌", // opponens digiti minimi of left hand
  "FMA37448":"拇展肌", // abductor hallucis
  "FMA37450":"趾短屈肌", // flexor digitorum brevis
  "FMA37451":"小趾展肌", // abductor digiti minimi of foot
  "FMA37452":"足底方肌", // flexor accessorius
  "FMA37453":"足蚓状肌", // lumbrical of foot
  "FMA37455":"小趾短屈肌", // flexor digiti minimi brevis of foot
  "FMA37456":"足骨间肌", // interosseous of foot
  "FMA37458":"骨间足底肌", // plantar interosseous of foot
  "FMA37459":"右踇展肌", // right abductor hallucis
  "FMA37460":"左踇展肌", // left abductor hallucis
  "FMA37461":"右趾短屈肌", // right flexor digitorum brevis
  "FMA37462":"左趾短屈肌", // left flexor digitorum brevis
  "FMA37463":"右足小趾展肌", // abductor digiti minimi of right foot
  "FMA37464":"左足小趾展肌", // abductor digiti minimi of left foot
  "FMA37465":"右足底方肌", // right flexor accessorius
  "FMA37466":"左足底方肌", // left flexor accessorius
  "FMA37471":"右足小趾短屈肌", // flexor digiti minimi brevis of right foot
  "FMA37472":"左足小趾短屈肌", // flexor digiti minimi brevis of left foot
  "FMA37479":"第1足蚓状肌", // first lumbrical of foot
  "FMA37480":"第2足蚓状肌", // second lumbrical of foot
  "FMA37481":"第3足蚓状肌", // third lumbrical of foot
  "FMA37482":"第4足蚓状肌", // fourth lumbrical of foot
  "FMA37483":"右足第4蚓状肌", // fourth lumbrical of right foot
  "FMA37484":"左足第4蚓状肌", // fourth lumbrical of left foot
  "FMA37485":"右足第3蚓状肌", // third lumbrical of right foot
  "FMA37486":"左足第3蚓状肌", // third lumbrical of left foot
  "FMA37664":"喙肱肌", // coracobrachialis
  "FMA37665":"右喙肱肌", // right coracobrachialis
  "FMA37666":"左喙肱肌", // left coracobrachialis
  "FMA37667":"肱肌", // brachialis
  "FMA37668":"右肱肌", // right brachialis
  "FMA37669":"左肱肌", // left brachialis
  "FMA37682":"肱二头肌短头", // short head of biceps brachii
  "FMA37683":"肱二头肌长头", // long head of biceps brachii
  "FMA37684":"右肱二头肌短头", // short head of right biceps brachii
  "FMA37685":"左肱二头肌短头", // short head of left biceps brachii
  "FMA37686":"右肱二头肌长头", // long head of right biceps brachii
  "FMA37687":"左肱二头肌长头", // long head of left biceps brachii
  "FMA37692":"肱三头肌长头", // long head of triceps brachii
  "FMA37693":"肱三头肌内侧头", // medial head of triceps brachii
  "FMA37694":"肱三头肌外侧头", // lateral head of triceps brachii
  "FMA37695":"右肱三头肌内侧头", // medial head of right triceps brachii
  "FMA37696":"左肱三头肌内侧头", // medial head of left triceps brachii
  "FMA37697":"右肱三头肌外侧头", // lateral head of right triceps brachii
  "FMA37698":"左肱三头肌外侧头", // lateral head of left triceps brachii
  "FMA37699":"右肱三头肌长头", // long head of right triceps brachii
  "FMA37700":"左肱三头肌长头", // long head of left triceps brachii
  "FMA37704":"肘肌", // anconeus
  "FMA37705":"右肘肌", // right anconeus
  "FMA37706":"左肘肌", // left anconeus
  "FMA37711":"臂前群肌", // muscle of anterior compartment of arm
  "FMA37712":"臂后群肌", // muscle of posterior compartment of arm
  "FMA37717":"右足第1蚓状肌", // first lumbrical of right foot
  "FMA37718":"左足第1蚓状肌", // first lumbrical of left foot
  "FMA37719":"右足第2蚓状肌", // second lumbrical of right foot
  "FMA37720":"左足第2蚓状肌", // second lumbrical of left foot
  "FMA37738":"第1骨间足底肌", // first plantar interosseous of foot
  "FMA37739":"第2骨间足底肌", // second plantar interosseous of foot
  "FMA37740":"第3骨间足底肌", // third plantar interosseous of foot
  "FMA37741":"右足第3骨间足底肌", // third plantar interosseous of right foot
  "FMA37742":"左足第3骨间足底肌", // third plantar interosseous of left foot
  "FMA37743":"右足第2骨间足底肌", // second plantar interosseous of right foot
  "FMA37744":"左足第2骨间足底肌", // second plantar interosseous of left foot
  "FMA37745":"右足第1骨间足底肌", // first plantar interosseous of right foot
  "FMA37746":"左足第1骨间足底肌", // first plantar interosseous of left foot
  "FMA38453":"旋前方肌", // pronator quadratus
  "FMA38454":"右旋前方肌", // right pronator quadratus
  "FMA38455":"左旋前方肌", // left pronator quadratus
  "FMA38456":"前臂前群肌", // muscle of anterior compartment of forearm
  "FMA38459":"桡侧腕屈肌", // flexor carpi radialis
  "FMA38460":"右桡侧腕屈肌", // right flexor carpi radialis
  "FMA38461":"左桡侧腕屈肌", // left flexor carpi radialis
  "FMA38462":"掌长肌", // palmaris longus
  "FMA38463":"右掌长肌", // right palmaris longus
  "FMA38464":"左掌长肌", // left palmaris longus
  "FMA38469":"指浅屈肌", // flexor digitorum superficialis
  "FMA38470":"右指浅屈肌", // right flexor digitorum superficialis
  "FMA38471":"左指浅屈肌", // left flexor digitorum superficialis
  "FMA38472":"前臂前群浅肌", // superficial muscle of anterior compartment of forearm
  "FMA38475":"前臂前群深肌", // deep muscle of anterior compartment of forearm
  "FMA38478":"指深屈肌", // flexor digitorum profundus
  "FMA38479":"右指深屈肌", // right flexor digitorum profundus
  "FMA38480":"左指深屈肌", // left flexor digitorum profundus
  "FMA38481":"拇长屈肌", // flexor pollicis longus
  "FMA38482":"右拇长屈肌", // right flexor pollicis longus
  "FMA38484":"左拇长屈肌", // left flexor pollicis longus
  "FMA38485":"肱桡肌", // brachioradialis
  "FMA38486":"右肱桡肌", // right brachioradialis
  "FMA38487":"左肱桡肌", // left brachioradialis
  "FMA38488":"前臂后群肌", // muscle of posterior compartment of forearm
  "FMA38491":"前臂后群浅肌", // superficial muscle of posterior compartment of forearm
  "FMA38494":"桡侧腕长伸肌", // extensor carpi radialis longus
  "FMA38495":"右桡侧腕长伸肌", // right extensor carpi radialis longus
  "FMA38496":"左桡侧腕长伸肌", // left extensor carpi radialis longus
  "FMA38497":"桡侧腕短伸肌", // extensor carpi radialis brevis
  "FMA38498":"右桡侧腕短伸肌", // right extensor carpi radialis brevis
  "FMA38499":"左桡侧腕短伸肌", // left extensor carpi radialis brevis
  "FMA38500":"指伸肌", // extensor digitorum
  "FMA38501":"右指伸肌", // right extensor digitorum
  "FMA38502":"左指伸肌", // left extensor digitorum
  "FMA38503":"小指伸肌", // extensor digiti minimi
  "FMA38504":"右小指伸肌", // right extensor digiti minimi
  "FMA38505":"左小指伸肌", // left extensor digiti minimi
  "FMA38506":"尺侧腕伸肌", // extensor carpi ulnaris
  "FMA38507":"右尺侧腕伸肌", // right extensor carpi ulnaris
  "FMA38508":"左尺侧腕伸肌", // left extensor carpi ulnaris
  "FMA38509":"前臂后群深肌", // deep muscle of posterior compartment of forearm
  "FMA38512":"旋后肌", // supinator
  "FMA38513":"右旋后肌", // right supinator
  "FMA38514":"左旋后肌", // left supinator
  "FMA38515":"拇长展肌", // abductor pollicis longus
  "FMA38516":"右拇长展肌", // right abductor pollicis longus
  "FMA38517":"左拇长展肌", // left abductor pollicis longus
  "FMA38518":"拇短伸肌", // extensor pollicis brevis
  "FMA38519":"右拇短伸肌", // right extensor pollicis brevis
  "FMA38520":"左拇短伸肌", // left extensor pollicis brevis
  "FMA38521":"拇长伸肌", // extensor pollicis longus
  "FMA38522":"右拇长伸肌", // right extensor pollicis longus
  "FMA38523":"左拇长伸肌", // left extensor pollicis longus
  "FMA38524":"示指伸肌", // extensor indicis
  "FMA38525":"右示指伸肌", // right extensor indicis
  "FMA38526":"左示指伸肌", // left extensor indicis
  "FMA38558":"旋前圆肌肱头", // humeral head of pronator teres
  "FMA38559":"旋前圆肌尺头", // ulnar head of pronator teres
  "FMA38560":"右旋前圆肌肱头", // humeral head of right pronator teres
  "FMA38561":"左旋前圆肌肱头", // humeral head of left pronator teres
  "FMA38562":"右旋前圆肌尺头", // ulnar head of right pronator teres
  "FMA38563":"左旋前圆肌尺头", // ulnar head of left pronator teres
  "FMA38615":"尺侧腕屈肌肱头", // humeral head of flexor carpi ulnaris
  "FMA38616":"尺侧腕屈肌尺头", // ulnar head of flexor carpi ulnaris
  "FMA38617":"右尺侧腕屈肌肱头", // humeral head of right flexor carpi ulnaris
  "FMA38618":"左尺侧腕屈肌肱头", // humeral head of left flexor carpi ulnaris
  "FMA38619":"右尺侧腕屈肌尺头", // ulnar head of right flexor carpi ulnaris
  "FMA38620":"左尺侧腕屈肌尺头", // ulnar head of left flexor carpi ulnaris
  "FMA38928":"右股直肌", // right rectus femoris
  "FMA38929":"左股直肌", // left rectus femoris
  "FMA38930":"右股外侧肌", // right vastus lateralis
  "FMA38931":"左股外侧肌", // left vastus lateralis
  "FMA38932":"右股内侧肌", // right vastus medialis
  "FMA38933":"左股内侧肌", // left vastus medialis
  "FMA38934":"右股中间肌", // right vastus intermedius
  "FMA38935":"左股中间肌", // left vastus intermedius
  "FMA39988":"腕屈肌支持带", // flexor retinaculum of wrist
  "FMA40120":"右屈肌支持带", // flexor retinaculum of right wrist
  "FMA40121":"左屈肌支持带", // flexor retinaculum of left wrist
  "FMA42380":"手固有肌", // intrinsic muscle of hand
  "FMA42398":"右手蚓状肌群", // set of lumbricals of right hand
  "FMA42399":"左手蚓状肌群", // set of lumbricals of left hand
  "FMA42402":"右手骨间掌侧肌群", // set of palmar interossei of right hand
  "FMA42403":"左手骨间掌侧肌群", // set of palmar interossei of left hand
  "FMA42404":"右手骨间背侧肌群", // set of dorsal interossei of right hand
  "FMA42405":"左手骨间背侧肌群", // set of dorsal interossei of left hand
  "FMA42603":"器官成分簇", // organ component cluster
  "FMA43252":"拇趾近节趾骨", // proximal phalanx of big toe
  "FMA43253":"右踇趾近节趾骨", // proximal phalanx of right big toe
  "FMA43254":"左踇趾近节趾骨", // proximal phalanx of left big toe
  "FMA43882":"股薄肌", // gracilis
  "FMA43883":"右股薄肌", // right gracilis
  "FMA43884":"左股薄肌", // left gracilis
  "FMA43885":"小收肌", // adductor minimus
  "FMA43886":"右小收肌", // right adductor minimus
  "FMA43887":"左小收肌", // left adductor minimus
  "FMA43888":"膝下外侧动脉", // inferior lateral genicular artery
  "FMA43889":"膝下内侧动脉", // inferior medial genicular artery
  "FMA43890":"右膝下内侧动脉", // right inferior medial genicular artery
  "FMA43891":"左膝下内侧动脉", // left inferior medial genicular artery
  "FMA43892":"右膝下外侧动脉", // right inferior lateral genicular artery
  "FMA43893":"左膝下外侧动脉", // left inferior lateral genicular artery
  "FMA43894":"胫前动脉", // anterior tibial artery
  "FMA43895":"胫后动脉", // posterior tibial artery
  "FMA43896":"右胫前动脉", // right anterior tibial artery
  "FMA43897":"左胫前动脉", // left anterior tibial artery
  "FMA43898":"右胫后动脉", // right posterior tibial artery
  "FMA43899":"左胫后动脉", // left posterior tibial artery
  "FMA43901":"胫后动脉分部", // subdivision of posterior tibial artery
  "FMA43902":"胫前返动脉", // anterior tibial recurrent artery
  "FMA43907":"右胫前返动脉", // right anterior tibial recurrent artery
  "FMA43908":"左胫前返动脉", // left anterior tibial recurrent artery
  "FMA43915":"足背动脉", // dorsalis pedis artery
  "FMA43916":"右足背动脉", // right dorsalis pedis artery
  "FMA43917":"左足背动脉", // left dorsalis pedis artery
  "FMA43925":"足底内侧动脉", // medial plantar artery
  "FMA43926":"足底外侧动脉", // lateral plantar artery
  "FMA43929":"右足底内侧动脉", // right medial plantar artery
  "FMA43930":"左足底内侧动脉", // left medial plantar artery
  "FMA43931":"右足底外侧动脉", // right lateral plantar artery
  "FMA43932":"左足底外侧动脉", // left lateral plantar artery
  "FMA43933":"足底内侧浅动脉", // superficial medial plantar artery
  "FMA43937":"右足底内侧浅动脉", // right superficial medial plantar artery
  "FMA43938":"左足底内侧浅动脉", // left superficial medial plantar artery
  "FMA43940":"远侧穿动脉", // branch of lateral plantar artery
  "FMA43941":"足底内侧动脉分支", // branch of medial plantar artery
  "FMA43942":"足底弓", // plantar arch
  "FMA43943":"右足底弓", // right plantar arch
  "FMA43944":"左足底弓", // left plantar arch
  "FMA43956":"足底跖动脉", // plantar metatarsal artery
  "FMA44197":"跗部韧带", // tarsal ligament
  "FMA44245":"足底跗韧带", // plantar tarsal ligament
  "FMA44248":"足底长韧带", // long plantar ligament
  "FMA44249":"右足底长韧带", // right long plantar ligament
  "FMA44250":"左足底长韧带", // left long plantar ligament
  "FMA44318":"腹壁浅静脉", // superficial epigastric vein
  "FMA44323":"股静脉属支", // tributary of femoral vein
  "FMA44324":"股深静脉属支", // tributary of deep femoral vein
  "FMA44325":"旋股内侧静脉", // medial circumflex femoral vein
  "FMA44326":"旋股外侧静脉", // lateral circumflex femoral vein
  "FMA44327":"腘静脉", // popliteal vein
  "FMA44328":"右腘静脉", // right popliteal vein
  "FMA44329":"左腘静脉", // left popliteal vein
  "FMA44330":"腘静脉属支", // tributary of popliteal vein
  "FMA44331":"胫前静脉", // anterior tibial vein
  "FMA44332":"胫后静脉", // posterior tibial vein
  "FMA44333":"小隐静脉", // small saphenous vein
  "FMA44334":"右小隐静脉", // right small saphenous vein
  "FMA44335":"左小隐静脉", // left small saphenous vein
  "FMA44336":"右胫前静脉", // right anterior tibial vein
  "FMA44337":"左胫前静脉", // left anterior tibial vein
  "FMA44338":"右胫后静脉", // right posterior tibial vein
  "FMA44339":"左胫后静脉", // left posterior tibial vein
  "FMA44340":"右腹壁浅静脉", // right superficial epigastric vein
  "FMA44341":"左腹壁浅静脉", // left superficial epigastric vein
  "FMA44356":"足背静脉弓", // dorsal venous arch of foot
  "FMA44489":"足底静脉弓", // plantar venous arch of foot
  "FMA44499":"足底静脉弓属支", // tributary of plantar venous arch
  "FMA44504":"足底跖静脉", // plantar metatarsal vein
  "FMA44558":"腓静脉", // fibular vein
  "FMA44559":"膝静脉", // genicular vein
  "FMA44594":"弓状动脉", // arcuate artery
  "FMA44595":"跗外侧动脉", // lateral tarsal artery
  "FMA44660":"足趾背动脉", // dorsal digital artery of foot
  "FMA44881":"右足背静脉弓", // dorsal venous arch of right foot
  "FMA44882":"左足背静脉弓", // dorsal venous arch of left foot
  "FMA44883":"右足足底静脉弓", // plantar venous arch of right foot
  "FMA44884":"左足足底静脉弓", // plantar venous arch of left foot
  "FMA44885":"右腓静脉", // right fibular vein
  "FMA44886":"左腓静脉", // left fibular vein
  "FMA44887":"右膝静脉", // right genicular vein
  "FMA44888":"左膝静脉", // left genicular vein
  "FMA44918":"右旋股内侧静脉", // right medial circumflex femoral vein
  "FMA44919":"左旋股内侧静脉", // left medial circumflex femoral vein
  "FMA44920":"右旋股外侧静脉", // right lateral circumflex femoral vein
  "FMA44922":"左旋股外侧静脉", // left lateral circumflex femoral vein
  "FMA45096":"足籽骨", // sesamoid bone of foot
  "FMA45097":"右足籽骨", // sesamoid bone of right foot
  "FMA45098":"左足籽骨", // sesamoid bone of left foot
  "FMA45638":"睫状短神经", // subdivision of nervous system
  "FMA45728":"解剖叶", // anatomical lobe
  "FMA45729":"器官头", // head of organ
  "FMA45732":"胰实质", // parenchyma
  "FMA45734":"胸骨体", // body of organ
  "FMA45738":"颈阔肌", // platysma
  "FMA45739":"右颈阔肌", // right platysma
  "FMA45740":"左颈阔肌", // left platysma
  "FMA45826":"右茎突舌骨肌", // right stylohyoid
  "FMA45827":"左茎突舌骨肌", // left stylohyoid
  "FMA45854":"右耻骨尾骨肌", // right pubococcygeus
  "FMA45855":"左耻骨尾骨肌", // left pubococcygeus
  "FMA45856":"右耻骨直肠肌", // right puborectalis
  "FMA45857":"左耻骨直肠肌", // left puborectalis
  "FMA45858":"右髂尾肌", // right iliococcygeus
  "FMA45859":"左髂尾肌", // left iliococcygeus
  "FMA45874":"右胸大肌腹部", // abdominal part of right pectoralis major
  "FMA45875":"左胸大肌腹部", // abdominal part of left pectoralis major
  "FMA45881":"股二头肌头", // head of biceps femoris
  "FMA45887":"股二头肌长头", // long head of biceps femoris
  "FMA45888":"右股二头肌长头", // long head of right biceps femoris
  "FMA45889":"左股二头肌长头", // long head of left biceps femoris
  "FMA45890":"股二头肌短头", // short head of biceps femoris
  "FMA45891":"右股二头肌短头", // short head of right biceps femoris
  "FMA45892":"左股二头肌短头", // short head of left biceps femoris
  "FMA45950":"腓肠肌头", // head of gastrocnemius
  "FMA45956":"腓肠肌内侧头", // medial head of gastrocnemius
  "FMA45957":"右腓肠肌内侧头", // medial head of right gastrocnemius
  "FMA45958":"左腓肠肌内侧头", // medial head of left gastrocnemius
  "FMA45959":"腓肠肌外侧头", // lateral head of gastrocnemius
  "FMA45960":"右腓肠肌外侧头", // lateral head of right gastrocnemius
  "FMA45961":"左腓肠肌外侧头", // lateral head of left gastrocnemius
  "FMA45963":"拇短屈肌头", // head of flexor hallucis brevis
  "FMA45969":"拇短屈肌内侧头", // medial head of flexor hallucis brevis
  "FMA45970":"拇短屈肌外侧头", // lateral head of flexor hallucis brevis
  "FMA45971":"右踇短屈肌内侧头", // medial head of right flexor hallucis brevis
  "FMA45972":"左踇短屈肌内侧头", // medial head of left flexor hallucis brevis
  "FMA45973":"右踇短屈肌外侧头", // lateral head of right flexor hallucis brevis
  "FMA45974":"左踇短屈肌外侧头", // lateral head of left flexor hallucis brevis
  "FMA46012":"拇展肌头", // head of adductor hallucis
  "FMA46014":"拇展肌斜头", // oblique head of adductor hallucis
  "FMA46015":"拇展肌横头", // transverse head of adductor hallucis
  "FMA46018":"右踇收肌斜头", // oblique head of right adductor hallucis
  "FMA46019":"左踇收肌斜头", // oblique head of left adductor hallucis
  "FMA46020":"右踇收肌横头", // transverse head of right adductor hallucis
  "FMA46021":"左踇收肌横头", // transverse head of left adductor hallucis
  "FMA46104":"拇短屈肌浅头", // superficial head of flexor pollicis brevis
  "FMA46119":"拇收肌斜头", // oblique head of adductor pollicis
  "FMA46120":"拇收肌横头", // transverse head of adductor pollicis
  "FMA46121":"右拇收肌斜头", // oblique head of right adductor pollicis
  "FMA46122":"左拇收肌斜头", // oblique head of left adductor pollicis
  "FMA46123":"右拇收肌横头", // transverse head of right adductor pollicis
  "FMA46124":"左拇收肌横头", // transverse head of left adductor pollicis
  "FMA46279":"颈长肌区", // zone of longus colli
  "FMA46280":"左颈长肌上斜部", // superior oblique part of longus colli
  "FMA46281":"左颈长肌下斜部", // inferior oblique part of longus colli
  "FMA46282":"左颈长肌垂直中间部", // vertical intermediate part of longus colli
  "FMA46284":"左颈长肌上斜部", // superior oblique part of left longus colli
  "FMA46286":"左颈长肌垂直中间部", // vertical intermediate part of left longus colli
  "FMA46288":"左颈长肌下斜部", // inferior oblique part of left longus colli
  "FMA46290":"舌骨上肌", // suprahyoid muscle
  "FMA46291":"二腹肌", // digastric
  "FMA46292":"右二腹肌", // right digastric
  "FMA46293":"左二腹肌", // left digastric
  "FMA46308":"头长肌", // longus capitis
  "FMA46309":"右头长肌", // right longus capitis
  "FMA46310":"左头长肌", // left longus capitis
  "FMA46312":"头前直肌", // rectus capitis anterior
  "FMA46313":"右头前直肌", // right rectus capitis anterior
  "FMA46314":"左头前直肌", // left rectus capitis anterior
  "FMA46316":"头外侧直肌", // rectus capitis lateralis
  "FMA46317":"右头外侧直肌", // right rectus capitis lateralis
  "FMA46318":"左头外侧直肌", // left rectus capitis lateralis
  "FMA46320":"下颌舌骨肌", // mylohyoid
  "FMA46321":"右下颌舌骨肌", // right mylohyoid
  "FMA46322":"左下颌舌骨肌", // left mylohyoid
  "FMA46325":"颏舌骨肌", // geniohyoid
  "FMA46326":"右颏舌骨肌", // right geniohyoid
  "FMA46327":"左颏舌骨肌", // left geniohyoid
  "FMA46442":"肛提肌腱弓", // tendinous arch of levator ani
  "FMA46443":"右尾骨肌", // right coccygeus
  "FMA46444":"左尾骨肌", // left coccygeus
  "FMA46490":"唇", // subdivision of mouth
  "FMA46562":"喉肌", // muscle of larynx
  "FMA46576":"环杓后肌", // posterior crico-arytenoid
  "FMA46577":"右环杓后肌", // right posterior crico-arytenoid
  "FMA46578":"左环杓后肌", // left posterior crico-arytenoid
  "FMA46579":"环杓侧肌", // lateral crico-arytenoid
  "FMA46580":"右环杓侧肌", // right lateral crico-arytenoid
  "FMA46581":"左环杓侧肌", // left lateral crico-arytenoid
  "FMA46582":"杓横肌", // transverse arytenoid
  "FMA46583":"杓斜肌", // oblique arytenoid
  "FMA46584":"右杓斜肌", // right oblique arytenoid
  "FMA46585":"左杓斜肌", // left oblique arytenoid
  "FMA46588":"甲杓肌", // thyro-arytenoid
  "FMA46589":"右甲杓肌", // right thyro-arytenoid
  "FMA46590":"左甲杓肌", // left thyro-arytenoid
  "FMA46591":"声带肌", // vocalis
  "FMA46592":"右声带肌", // right vocalis
  "FMA46593":"左声带肌", // left vocalis
  "FMA46601":"杓斜肌区", // zone of oblique arytenoid
  "FMA46602":"杓会厌肌", // aryepiglotticus
  "FMA46604":"右杓会厌肌", // right aryepiglotticus
  "FMA46605":"左杓会厌肌", // left aryepiglotticus
  "FMA46608":"环甲肌区", // zone of cricothyroid
  "FMA46609":"环甲肌直部", // straight part of cricothyroid
  "FMA46610":"环甲肌斜部", // oblique part of cricothyroid
  "FMA46611":"右环甲肌直部", // straight part of right cricothyroid
  "FMA46612":"左环甲肌直部", // straight part of left cricothyroid
  "FMA46613":"右环甲肌斜部", // oblique part of right cricothyroid
  "FMA46614":"左环甲肌斜部", // oblique part of left cricothyroid
  "FMA46619":"咽肌", // muscle of pharynx
  "FMA46620":"咽缩肌", // constrictor muscle of pharynx
  "FMA46621":"咽上缩肌", // superior pharyngeal constrictor
  "FMA46622":"咽中缩肌", // middle pharyngeal constrictor
  "FMA46623":"咽下缩肌", // inferior pharyngeal constrictor
  "FMA46631":"右咽上缩肌", // right superior pharyngeal constrictor
  "FMA46632":"左咽上缩肌", // left superior pharyngeal constrictor
  "FMA46633":"右咽中缩肌", // right middle pharyngeal constrictor
  "FMA46634":"左咽中缩肌", // left middle pharyngeal constrictor
  "FMA46635":"右咽下缩肌", // right inferior pharyngeal constrictor
  "FMA46636":"左咽下缩肌", // left inferior pharyngeal constrictor
  "FMA46664":"茎突咽肌", // stylopharyngeus
  "FMA46665":"咽鼓管咽肌", // salpingopharyngeus
  "FMA46666":"腭咽肌", // palatopharyngeus
  "FMA46667":"右茎突咽肌", // right stylopharyngeus
  "FMA46668":"左茎突咽肌", // left stylopharyngeus
  "FMA46669":"右咽鼓管咽肌", // right salpingopharyngeus
  "FMA46670":"左咽鼓管咽肌", // left salpingopharyngeus
  "FMA46671":"右腭咽肌", // right palatopharyngeus
  "FMA46672":"左腭咽肌", // left palatopharyngeus
  "FMA46689":"舌肌", // muscle of tongue
  "FMA46690":"颏舌肌", // genioglossus
  "FMA46691":"舌骨舌肌", // hyoglossus
  "FMA46698":"右颏舌肌", // right genioglossus
  "FMA46699":"舌外在肌", // extrinsic muscle of tongue
  "FMA46702":"左颏舌肌", // left genioglossus
  "FMA46703":"右舌骨舌肌", // right hyoglossus
  "FMA46704":"左舌骨舌肌", // left hyoglossus
  "FMA46726":"腭肌", // muscle of palate
  "FMA46727":"腭帆提肌", // levator veli palatini
  "FMA46728":"右腭帆提肌", // right levator veli palatini
  "FMA46729":"左腭帆提肌", // left levator veli palatini
  "FMA46730":"腭帆张肌", // tensor veli palatini
  "FMA46731":"右腭帆张肌", // right tensor veli palatini
  "FMA46732":"左腭帆张肌", // left tensor veli palatini
  "FMA46733":"腭垂肌", // uvular muscle
  "FMA46751":"面肌", // muscle of face
  "FMA49033":"眼外肌", // extra-ocular muscle
  "FMA49035":"上直肌", // superior rectus
  "FMA49036":"下直肌", // inferior rectus
  "FMA49037":"内直肌", // medial rectus
  "FMA49038":"外直肌", // lateral rectus
  "FMA49039":"上斜肌", // superior oblique
  "FMA49040":"下斜肌", // inferior oblique
  "FMA49041":"上睑提肌", // levator palpebrae superioris
  "FMA49044":"右上直肌", // right superior rectus
  "FMA49045":"左上直肌", // left superior rectus
  "FMA49046":"右下直肌", // right inferior rectus
  "FMA49047":"左下直肌", // left inferior rectus
  "FMA49048":"右上睑提肌", // right levator palpebrae superioris
  "FMA49049":"左上睑提肌", // left levator palpebrae superioris
  "FMA49050":"右下斜肌", // right inferior oblique
  "FMA49051":"左下斜肌", // left inferior oblique
  "FMA49052":"右上斜肌", // right superior oblique
  "FMA49053":"左上斜肌", // left superior oblique
  "FMA49054":"右外直肌", // right lateral rectus
  "FMA49055":"左外直肌", // left lateral rectus
  "FMA49056":"右内直肌", // right medial rectus
  "FMA49057":"左内直肌", // left medial rectus
  "FMA49065":"上斜肌腱滑车", // trochlea of superior oblique
  "FMA49067":"右上斜肌滑车", // trochlea of right superior oblique
  "FMA49068":"左上斜肌滑车", // trochlea of left superior oblique
  "FMA49071":"总腱环", // common tendinous ring
  "FMA49072":"右总腱环", // right common tendinous ring
  "FMA49073":"左总腱环", // left common tendinous ring
  "FMA49143":"外直肌系带", // check ligament of lateral rectus
  "FMA49144":"右外直肌节制韧带", // check ligament of right lateral rectus
  "FMA49145":"左外直肌节制韧带", // check ligament of left lateral rectus
  "FMA49146":"内直肌系带", // check ligament of medial rectus
  "FMA49147":"右内直肌节制韧带", // check ligament of right medial rectus
  "FMA49148":"左内直肌节制韧带", // check ligament of left medial rectus
  "FMA49443":"解剖簇", // anatomical cluster
  "FMA49868":"眼动脉", // ophthalmic artery
  "FMA49869":"右眼动脉", // right ophthalmic artery
  "FMA49870":"左眼动脉", // left ophthalmic artery
  "FMA49893":"冠状动脉", // coronary artery
  "FMA49907":"肺静脉树器官", // pulmonary venous tree organ
  "FMA49908":"肺上静脉", // superior pulmonary vein
  "FMA49910":"肺下静脉", // inferior pulmonary vein
  "FMA49911":"右肺下静脉", // right inferior pulmonary vein
  "FMA49913":"左肺下静脉", // left inferior pulmonary vein
  "FMA49914":"右肺上静脉", // right superior pulmonary vein
  "FMA49916":"左肺上静脉", // left superior pulmonary vein
  "FMA49918":"体循环动脉干", // systemic arterial trunk
  "FMA50028":"大脑前动脉", // anterior cerebral artery
  "FMA50029":"右大脑前动脉", // right anterior cerebral artery
  "FMA50030":"左大脑前动脉", // left anterior cerebral artery
  "FMA50031":"大脑前动脉分支", // branch of anterior cerebral artery
  "FMA50080":"大脑中动脉供血区", // zone of middle cerebral artery
  "FMA50081":"大脑中动脉分支", // branch of middle cerebral artery
  "FMA50084":"后交通动脉", // posterior communicating artery
  "FMA50085":"右后交通动脉", // right posterior communicating artery
  "FMA50086":"左后交通动脉", // left posterior communicating artery
  "FMA50087":"脉络丛前动脉", // anterior choroidal artery
  "FMA50088":"右脉络丛前动脉", // right anterior choroidal artery
  "FMA50089":"左脉络丛前动脉", // left anterior choroidal artery
  "FMA50112":"脉络丛前动脉分支", // branch of anterior choroidal artery
  "FMA50119":"至内囊后肢的脉络丛前动脉分支", // branch of anterior choroidal artery to posterior limb of internal capsule
  "FMA50146":"右脉络丛前动脉至右内囊后肢支", // branch of right anterior choroidal artery to posterior limb of right internal capsule
  "FMA50147":"左脉络丛前动脉至左内囊后肢支", // branch of left anterior choroidal artery to posterior limb of left internal capsule
  "FMA50168":"后交通动脉分支", // branch of posterior communicating artery
  "FMA50169":"前交通动脉", // anterior communicating artery
  "FMA50185":"躯干分区肌群", // musculature of subdivision of trunk
  "FMA50200":"上肢分区肌群", // musculature of subdivision of upper limb
  "FMA50328":"额底内侧动脉", // medial frontobasal artery
  "FMA50330":"胼缘动脉", // callosomarginal artery
  "FMA50331":"胼缘动脉分支", // branch of callosomarginal artery
  "FMA50333":"胼缘动脉中间内侧支", // intermediomedial branch of callosomarginal artery
  "FMA50334":"胼缘动脉后内侧支", // posteromedial branch of callosomarginal artery
  "FMA50336":"胼缘动脉旁中央支", // paracentral branch of callosomarginal artery
  "FMA50337":"胼周动脉", // pericallosal artery
  "FMA50338":"胼周动脉分支", // branch of pericallosal artery
  "FMA50339":"胼周动脉楔前支", // precuneal branch of pericallosal artery
  "FMA50343":"右额底内侧动脉", // right medial frontobasal artery
  "FMA50344":"左额底内侧动脉", // left medial frontobasal artery
  "FMA50347":"右胼缘动脉", // right callosomarginal artery
  "FMA50348":"左胼缘动脉", // left callosomarginal artery
  "FMA50351":"右胼缘动脉中间内侧支", // intermediomedial branch of right callosomarginal artery
  "FMA50352":"左胼缘动脉中间内侧支", // intermediomedial branch of left callosomarginal artery
  "FMA50353":"右胼缘动脉后内侧支", // posteromedial branch of right callosomarginal artery
  "FMA50354":"左胼缘动脉后内侧支", // posteromedial branch of left callosomarginal artery
  "FMA50357":"右胼缘动脉中央旁支", // paracentral branch of right callosomarginal artery
  "FMA50358":"左胼缘动脉中央旁支", // paracentral branch of left callosomarginal artery
  "FMA50359":"右胼周动脉", // right pericallosal artery
  "FMA50360":"左胼周动脉", // left pericallosal artery
  "FMA50361":"右胼周动脉楔前支", // precuneal branch of right pericallosal artery
  "FMA50362":"左胼周动脉楔前支", // precuneal branch of left pericallosal artery
  "FMA50365":"大脑中动脉蝶部", // sphenoid part of middle cerebral artery
  "FMA50366":"右大脑中动脉蝶部", // sphenoid part of right middle cerebral artery
  "FMA50367":"左大脑中动脉蝶部", // sphenoid part of left middle cerebral artery
  "FMA50368":"大脑中动脉岛部", // insular part of middle cerebral artery
  "FMA50369":"右大脑中动脉岛部", // insular part of right middle cerebral artery
  "FMA50370":"左大脑中动脉岛部", // insular part of left middle cerebral artery
  "FMA50376":"大脑中动脉前外侧中央支", // anterolateral central branch of middle cerebral artery
  "FMA50377":"右大脑中动脉前外侧中央支", // anterolateral central branch of right middle cerebral artery
  "FMA50378":"左大脑中动脉前外侧中央支", // anterolateral central branch of left middle cerebral artery
  "FMA50379":"颞极动脉", // polar temporal artery
  "FMA50380":"右颞极动脉", // right polar temporal artery
  "FMA50381":"左颞极动脉", // left polar temporal artery
  "FMA50382":"颞前动脉", // anterior temporal artery
  "FMA50383":"右颞前动脉", // right anterior temporal artery
  "FMA50384":"左颞前动脉", // left anterior temporal artery
  "FMA50391":"游离上肢分区肌群", // musculature of subdivision of free upper limb
  "FMA50427":"后交通动脉下丘脑支", // hypothalamic branch of posterior communicating artery
  "FMA50428":"右后交通动脉下丘脑支", // hypothalamic branch of right posterior communicating artery
  "FMA50429":"左后交通动脉下丘脑支", // hypothalamic branch of left posterior communicating artery
  "FMA50436":"大脑中动脉上终末支", // superior terminal branch of middle cerebral artery
  "FMA50437":"前额动脉", // prefrontal artery
  "FMA50438":"颞动脉", // temporal artery
  "FMA50439":"大脑中动脉下终末支", // inferior terminal branch of middle cerebral artery
  "FMA50442":"额底外侧动脉", // lateral frontobasal artery
  "FMA50443":"右额底外侧动脉", // right lateral frontobasal artery
  "FMA50444":"左额底外侧动脉", // left lateral frontobasal artery
  "FMA50445":"右额前动脉", // right prefrontal artery
  "FMA50466":"大脑中动脉颞中支", // middle temporal branch of middle cerebral artery
  "FMA50467":"右大脑中动脉颞中支", // middle temporal branch of right middle cerebral artery
  "FMA50468":"左大脑中动脉颞中支", // middle temporal branch of left middle cerebral artery
  "FMA50469":"大脑中动脉颞后支", // posterior temporal branch of middle cerebral artery
  "FMA50470":"右大脑中动脉颞后支", // posterior temporal branch of right middle cerebral artery
  "FMA50471":"左大脑中动脉颞后支", // posterior temporal branch of left middle cerebral artery
  "FMA50472":"大脑中动脉颞枕支", // temporo-occipital branch of middle cerebral artery
  "FMA50473":"右大脑中动脉颞枕支", // temporo-occipital branch of right middle cerebral artery
  "FMA50474":"左大脑中动脉颞枕支", // temporo-occipital branch of left middle cerebral artery
  "FMA50475":"大脑中动脉角回支", // branch of middle cerebral artery to angular gyrus
  "FMA50476":"右大脑中动脉至右角回支", // branch of right middle cerebral artery to right angular gyrus
  "FMA50477":"左大脑中动脉至左角回支", // branch of left middle cerebral artery to left angular gyrus
  "FMA50478":"左额前动脉", // left prefrontal artery
  "FMA50479":"中央前沟动脉", // artery of precentral sulcus
  "FMA50480":"右中央前沟动脉", // artery of right precentral sulcus
  "FMA50481":"左中央前沟动脉", // artery of left precentral sulcus
  "FMA50482":"中央后沟动脉", // artery of postcentral sulcus
  "FMA50483":"右中央后沟动脉", // artery of right postcentral sulcus
  "FMA50484":"左中央后沟动脉", // artery of left postcentral sulcus
  "FMA50485":"顶前动脉", // anterior parietal artery
  "FMA50486":"右顶前动脉", // right anterior parietal artery
  "FMA50487":"左顶前动脉", // left anterior parietal artery
  "FMA50488":"顶后动脉", // posterior parietal artery
  "FMA50489":"右顶后动脉", // right posterior parietal artery
  "FMA50490":"左顶后动脉", // left posterior parietal artery
  "FMA50518":"小脑下后动脉", // posterior inferior cerebellar artery
  "FMA50519":"右小脑后下动脉", // right posterior inferior cerebellar artery
  "FMA50520":"左小脑后下动脉", // left posterior inferior cerebellar artery
  "FMA50531":"脊髓前动脉", // anterior spinal artery
  "FMA50532":"右脊髓前动脉", // right anterior spinal artery
  "FMA50533":"左脊髓前动脉", // left anterior spinal artery
  "FMA50542":"基底动脉", // basilar artery
  "FMA50544":"小脑前下动脉", // anterior inferior cerebellar artery
  "FMA50563":"脑桥动脉分支", // branch of pontine artery
  "FMA50564":"脑桥动脉内侧支", // medial branch of pontine artery
  "FMA50565":"脑桥动脉外侧支", // lateral branch of pontine artery
  "FMA50566":"右脑桥动脉内侧支", // medial branch of right pontine artery
  "FMA50567":"左脑桥动脉内侧支", // medial branch of left pontine artery
  "FMA50568":"右脑桥动脉外侧支", // lateral branch of right pontine artery
  "FMA50569":"左脑桥动脉外侧支", // lateral branch of left pontine artery
  "FMA50573":"小脑上动脉", // superior cerebellar artery
  "FMA50574":"右小脑上动脉", // right superior cerebellar artery
  "FMA50575":"左小脑上动脉", // left superior cerebellar artery
  "FMA50576":"小脑上动脉分支", // branch of superior cerebellar artery
  "FMA50577":"小脑上外侧动脉", // lateral superior cerebellar artery
  "FMA50578":"右小脑上动脉外侧支", // lateral branch of right superior cerebellar artery
  "FMA50579":"左小脑上动脉外侧支", // lateral branch of left superior cerebellar artery
  "FMA50580":"小脑上动脉内侧支", // medial branch of superior cerebellar artery
  "FMA50581":"右小脑上动脉内侧支", // medial branch of right superior cerebellar artery
  "FMA50582":"左小脑上动脉内侧支", // medial branch of left superior cerebellar artery
  "FMA50586":"大脑后动脉分支", // branch of posterior cerebral artery
  "FMA50587":"大脑后动脉后内侧中央支", // posteromedial central branch of posterior cerebral artery
  "FMA50589":"大脑后动脉供血区", // zone of posterior cerebral artery
  "FMA50590":"大脑后动脉交通前部", // precommunicating part of posterior cerebral artery
  "FMA50591":"大脑后动脉交通后部", // postcommunicating part of posterior cerebral artery
  "FMA50624":"丘脑穿通动脉", // thalamoperforating artery
  "FMA50629":"丘脑膝状体动脉", // thalamogeniculate artery
  "FMA50630":"脉络丛后内侧动脉", // posterior medial choroidal artery
  "FMA50633":"枕外侧动脉", // lateral occipital artery
  "FMA50638":"枕内侧动脉", // medial occipital artery
  "FMA50639":"右大脑后动脉交通前部", // precommunicating part of right posterior cerebral artery
  "FMA50640":"左大脑后动脉交通前部", // precommunicating part of left posterior cerebral artery
  "FMA50641":"右大脑后动脉交通后部", // postcommunicating part of right posterior cerebral artery
  "FMA50642":"左大脑后动脉交通后部", // postcommunicating part of left posterior cerebral artery
  "FMA50643":"右枕外侧动脉", // right lateral occipital artery
  "FMA50644":"左枕外侧动脉", // left lateral occipital artery
  "FMA50645":"右枕内侧动脉", // right medial occipital artery
  "FMA50646":"左枕内侧动脉", // left medial occipital artery
  "FMA50647":"枕外侧动脉分支", // branch of lateral occipital artery
  "FMA50648":"枕外侧动脉颞前支", // anterior temporal branch of lateral occipital artery
  "FMA50649":"枕外侧动脉颞中支", // middle temporal branch of lateral occipital artery
  "FMA50651":"枕内侧动脉分支", // branch of medial occipital artery
  "FMA50652":"胼胝体压部动脉", // splenial artery
  "FMA50660":"右大脑后动脉后内侧中央支", // posteromedial central branch of right posterior cerebral artery
  "FMA50661":"左大脑后动脉后内侧中央支", // posteromedial central branch of left posterior cerebral artery
  "FMA50664":"右丘脑穿动脉", // right thalamoperforating artery
  "FMA50665":"左丘脑穿动脉", // left thalamoperforating artery
  "FMA50670":"右丘脑膝状体动脉", // right thalamogeniculate artery
  "FMA50671":"左丘脑膝状体动脉", // left thalamogeniculate artery
  "FMA50672":"右脉络膜后内侧动脉", // right posterior medial choroidal artery
  "FMA50673":"左脉络膜后内侧动脉", // left posterior medial choroidal artery
  "FMA50678":"右枕外侧动脉颞前支", // anterior temporal branch of right lateral occipital artery
  "FMA50679":"左枕外侧动脉颞前支", // anterior temporal branch of left lateral occipital artery
  "FMA50680":"右枕外侧动脉颞中支", // middle temporal branch of right lateral occipital artery
  "FMA50681":"左枕外侧动脉颞中支", // middle temporal branch of left lateral occipital artery
  "FMA50684":"右胼胝体压部动脉", // right splenial artery
  "FMA50685":"左胼胝体压部动脉", // left splenial artery
  "FMA50694":"小脑上动脉内侧支的分支", // branch of medial branch of superior cerebellar artery
  "FMA50695":"小脑上动脉内侧支上蚓支", // superior vermian branch of medial branch of superior cerebellar artery
  "FMA50696":"右小脑上动脉内侧支蚓上支", // superior vermian branch of medial branch of right superior cerebellar artery
  "FMA50697":"左小脑上动脉内侧支蚓上支", // superior vermian branch of medial branch of left superior cerebellar artery
  "FMA50705":"解剖边界实体", // anatomical boundary entity
  "FMA50720":"动脉", // artery
  "FMA50722":"血管树器官区域", // region of vascular tree organ
  "FMA50723":"静脉", // vein
  "FMA50735":"肝门静脉", // hepatic portal vein
  "FMA50736":"肝外门静脉分部", // subdivision of pre-hepatic portal vein
  "FMA50737":"腹腔动脉", // celiac artery
  "FMA50859":"右肩胛上静脉", // right suprascapular vein
  "FMA50860":"左肩胛上静脉", // left suprascapular vein
  "FMA50863":"视神经", // optic nerve
  "FMA50865":"滑车神经", // trochlear nerve
  "FMA50872":"右肺动脉", // right pulmonary artery
  "FMA50873":"左肺动脉", // left pulmonary artery
  "FMA50875":"右视神经", // right optic nerve
  "FMA50878":"左视神经", // left optic nerve
  "FMA50881":"右滑车神经", // right trochlear nerve
  "FMA50882":"左滑车神经", // left trochlear nerve
  "FMA51041":"股深静脉", // deep femoral vein
  "FMA51042":"右股深静脉", // right deep femoral vein
  "FMA51043":"左股深静脉", // left deep femoral vein
  "FMA51048":"髂胫束", // iliotibial tract
  "FMA51061":"跟腱", // calcaneal tendon
  "FMA51071":"趾长屈肌", // flexor digitorum longus
  "FMA51099":"胫骨后肌", // tibialis posterior
  "FMA51141":"拇短伸肌", // extensor hallucis brevis
  "FMA51144":"右踇短伸肌", // right extensor hallucis brevis
  "FMA51145":"左踇短伸肌", // left extensor hallucis brevis
  "FMA51886":"大脑动脉环分支", // branch of cerebral arterial circle
  "FMA52570":"脑神经分支", // branch of cranial nerve
  "FMA52571":"动眼神经分支", // branch of oculomotor nerve
  "FMA52572":"动眼神经上支", // superior branch of oculomotor nerve
  "FMA52573":"动眼神经下支", // inferior branch of oculomotor nerve
  "FMA52574":"右动眼神经上支", // superior branch of right oculomotor nerve
  "FMA52575":"左动眼神经上支", // superior branch of left oculomotor nerve
  "FMA52576":"右动眼神经下支", // inferior branch of right oculomotor nerve
  "FMA52577":"左动眼神经下支", // inferior branch of left oculomotor nerve
  "FMA52607":"三叉神经分支", // branch of trigeminal nerve
  "FMA52621":"眼神经", // ophthalmic nerve
  "FMA52622":"右眼神经", // right ophthalmic nerve
  "FMA52623":"左眼神经", // left ophthalmic nerve
  "FMA52624":"眼神经分支", // branch of ophthalmic nerve
  "FMA52628":"泪腺神经", // lacrimal nerve
  "FMA52629":"右泪腺神经", // right lacrimal nerve
  "FMA52630":"左泪腺神经", // left lacrimal nerve
  "FMA52638":"额神经", // frontal nerve
  "FMA52639":"右额神经", // right frontal nerve
  "FMA52640":"左额神经", // left frontal nerve
  "FMA52641":"额神经分支", // branch of frontal nerve
  "FMA52642":"滑车上神经", // supratrochlear nerve
  "FMA52643":"右滑车上神经", // right supratrochlear nerve
  "FMA52644":"左滑车上神经", // left supratrochlear nerve
  "FMA52655":"眶上神经", // supra-orbital nerve
  "FMA52656":"右眶上神经", // right supra-orbital nerve
  "FMA52657":"左眶上神经", // left supra-orbital nerve
  "FMA52668":"鼻睫神经", // nasociliary nerve
  "FMA52669":"右鼻睫神经", // right nasociliary nerve
  "FMA52670":"左鼻睫神经", // left nasociliary nerve
  "FMA52671":"鼻睫神经分支", // branch of nasociliary nerve
  "FMA52672":"鼻睫神经与睫状神经节交通支", // communicating branch of nasociliary nerve with ciliary ganglion
  "FMA52673":"右鼻睫神经与右睫状神经节交通支", // communicating branch of right nasociliary nerve with right ciliary ganglion
  "FMA52674":"左鼻睫神经与左睫状神经节交通支", // communicating branch of left nasociliary nerve with left ciliary ganglion
  "FMA52675":"筛前神经", // anterior ethmoidal nerve
  "FMA52676":"右筛前神经", // right anterior ethmoidal nerve
  "FMA52677":"左筛前神经", // left anterior ethmoidal nerve
  "FMA52691":"睫状长神经", // long ciliary nerve
  "FMA52693":"滑车下神经", // infratrochlear nerve
  "FMA52698":"右滑车下神经", // right infratrochlear nerve
  "FMA52699":"左滑车下神经", // left infratrochlear nerve
  "FMA52714":"筛后神经", // posterior ethmoidal nerve
  "FMA52715":"右筛后神经", // right posterior ethmoidal nerve
  "FMA52716":"左筛后神经", // left posterior ethmoidal nerve
  "FMA52734":"额骨", // frontal bone
  "FMA52735":"枕骨", // occipital bone
  "FMA52736":"蝶骨", // sphenoid bone
  "FMA52737":"颞骨", // temporal bone
  "FMA52738":"右颞骨", // right temporal bone
  "FMA52739":"左颞骨", // left temporal bone
  "FMA52740":"筛骨", // ethmoid
  "FMA52741":"泪骨", // lacrimal bone
  "FMA52745":"鼻骨", // nasal bone
  "FMA52746":"腭骨", // palatine bone
  "FMA52747":"颧骨", // zygomatic bone
  "FMA52748":"下颌骨", // mandible
  "FMA52749":"舌骨", // hyoid bone
  "FMA52781":"外耳", // external ear
  "FMA52788":"右顶骨", // right parietal bone
  "FMA52789":"左顶骨", // left parietal bone
  "FMA52892":"右颧骨", // right zygomatic bone
  "FMA52893":"左颧骨", // left zygomatic bone
  "FMA53549":"右睫状神经节", // right ciliary ganglion
  "FMA53550":"左睫状神经节", // left ciliary ganglion
  "FMA53645":"右泪骨", // right lacrimal bone
  "FMA53646":"左泪骨", // left lacrimal bone
  "FMA53647":"右鼻骨", // right nasal bone
  "FMA53648":"左鼻骨", // left nasal bone
  "FMA53649":"右上颌骨", // right maxilla
  "FMA53650":"左上颌骨", // left maxilla
  "FMA53655":"右腭骨", // right palatine bone
  "FMA53656":"左腭骨", // left palatine bone
  "FMA53667":"毛发", // hair
  "FMA54158":"右上睑提肌腱", // tendon of levator palpebrae superioris
  "FMA54159":"右上睑提肌腱", // tendon of right levator palpebrae superioris
  "FMA54237":"眉", // eyebrow
  "FMA54241":"头发", // hair of head
  "FMA54250":"阴毛", // hair of trunk
  "FMA54319":"阴毛", // pubic hair
  "FMA54393":"唇", // subdivision of face
  "FMA54640":"舌", // tongue
  "FMA54736":"下鼻甲", // inferior nasal concha
  "FMA54737":"右下鼻甲", // right inferior nasal concha
  "FMA54738":"左下鼻甲", // left inferior nasal concha
  "FMA54839":"骨间膜", // interosseous membrane
  "FMA54877":"会厌", // subdivision of pharynx
  "FMA54921":"舌骨会厌韧带", // extrinsic ligament of larynx
  "FMA55053":"会厌", // subdivision of laryngopharynx
  "FMA55077":"咽缝", // pharyngeal raphe
  "FMA55093":"下颌下腺", // submandibular gland
  "FMA55099":"甲状软骨", // thyroid cartilage
  "FMA55107":"软骨器官", // cartilage organ
  "FMA55108":"喉软骨", // laryngeal cartilage
  "FMA55109":"杓状软骨", // arytenoid cartilage
  "FMA55110":"小角状软骨", // corniculate cartilage
  "FMA55111":"楔状软骨", // cuneiform cartilage
  "FMA55113":"右杓状软骨", // right arytenoid cartilage
  "FMA55114":"左杓状软骨", // left arytenoid cartilage
  "FMA55115":"右小角软骨", // right corniculate cartilage
  "FMA55116":"左小角软骨", // left corniculate cartilage
  "FMA55117":"右楔状软骨", // right cuneiform cartilage
  "FMA55118":"左楔状软骨", // left cuneiform cartilage
  "FMA55130":"会厌", // epiglottis
  "FMA55131":"喉韧带", // ligament of larynx
  "FMA55132":"甲状舌骨膜", // thyrohyoid membrane
  "FMA55133":"右甲状舌骨膜", // right thyrohyoid membrane
  "FMA55134":"左甲状舌骨膜", // left thyrohyoid membrane
  "FMA55135":"甲状舌骨韧带", // thyrohyoid ligament
  "FMA55138":"甲状舌骨正中韧带", // median thyrohyoid ligament
  "FMA55139":"甲状舌骨外侧韧带", // lateral thyrohyoid ligament
  "FMA55140":"右甲状舌骨外侧韧带", // right lateral thyrohyoid ligament
  "FMA55141":"左甲状舌骨外侧韧带", // left lateral thyrohyoid ligament
  "FMA55226":"喉固有肌", // intrinsic muscle of larynx
  "FMA55227":"舌骨会厌韧带", // hyo-epiglottic ligament
  "FMA55230":"甲状会厌韧带", // thyro-epiglottic ligament
  "FMA55233":"环甲正中韧带", // cricothyroid ligament
  "FMA55237":"环甲正中韧带", // median cricothyroid ligament
  "FMA55244":"声韧带", // vocal ligament
  "FMA55245":"右声韧带", // right vocal ligament
  "FMA55246":"左声韧带", // left vocal ligament
  "FMA55250":"弹性圆锥", // conus elasticus
  "FMA55251":"右弹性圆锥", // right conus elasticus
  "FMA55252":"左弹性圆锥", // left conus elasticus
  "FMA55268":"器官区带", // organ zone
  "FMA55618":"翼突下颌缝", // pterygomandibular raphe
  "FMA55619":"右翼下颌缝", // right pterygomandibular raphe
  "FMA55620":"左翼下颌缝", // left pterygomandibular raphe
  "FMA55636":"尖牙", // canine tooth
  "FMA55637":"前磨牙", // premolar tooth
  "FMA55638":"磨牙", // molar tooth
  "FMA55652":"解剖集合", // anatomical set
  "FMA55661":"实质器官", // parenchymatous organ
  "FMA55662":"小叶性器官", // lobular organ
  "FMA55663":"皮质髓质器官", // corticomedullary organ
  "FMA55665":"非实质器官", // nonparenchymatous organ
  "FMA55670":"实质器官", // solid organ
  "FMA55671":"有腔器官", // cavitated organ
  "FMA55672":"有腔器官", // organ with organ cavity
  "FMA55673":"含腔器官部之器官", // organ with cavitated organ parts
  "FMA55676":"脑段", // segment of brain
  "FMA55677":"中空管状器官", // hollow tree organ
  "FMA55680":"右上颌侧切牙(恒牙)", // right upper lateral secondary incisor tooth
  "FMA55681":"右上颌中切牙(恒牙)", // right upper central secondary incisor tooth
  "FMA55682":"左上颌中切牙(恒牙)", // left upper central secondary incisor tooth
  "FMA55683":"左上颌侧切牙(恒牙)", // left upper lateral secondary incisor tooth
  "FMA55686":"右下颌尖牙(恒牙)", // right lower secondary canine tooth
  "FMA55687":"左下颌尖牙(恒牙)", // left lower secondary canine tooth
  "FMA55688":"右上颌第二前磨牙(恒牙)", // right upper second secondary premolar tooth
  "FMA55689":"右上颌第一前磨牙(恒牙)", // right upper first secondary premolar tooth
  "FMA55690":"左上颌第一前磨牙(恒牙)", // left upper first secondary premolar tooth
  "FMA55691":"左上颌第二前磨牙(恒牙)", // left upper second secondary premolar tooth
  "FMA55692":"左下颌第二前磨牙(恒牙)", // left lower second secondary premolar tooth
  "FMA55693":"左下颌第一前磨牙(恒牙)", // left lower first secondary premolar tooth
  "FMA55694":"右下颌第一前磨牙(恒牙)", // right lower first secondary premolar tooth
  "FMA55695":"右下颌第二前磨牙(恒牙)", // right lower second secondary premolar tooth
  "FMA55697":"右上颌第二磨牙(恒牙)", // right upper second secondary molar tooth
  "FMA55698":"右上颌第一磨牙(恒牙)", // right upper first secondary molar tooth
  "FMA55699":"左上颌第一磨牙(恒牙)", // left upper first secondary molar tooth
  "FMA55700":"左上颌第二磨牙(恒牙)", // left upper second secondary molar tooth
  "FMA55703":"左下颌第二磨牙(恒牙)", // left lower second secondary molar tooth
  "FMA55704":"左下颌第一磨牙(恒牙)", // left lower first secondary molar tooth
  "FMA55705":"右下颌第一磨牙(恒牙)", // right lower first secondary molar tooth
  "FMA55706":"右下颌第二磨牙(恒牙)", // right lower second secondary molar tooth
  "FMA55712":"上颌切牙", // upper secondary incisor tooth
  "FMA55713":"下颌切牙", // lower secondary incisor tooth
  "FMA55714":"上颌尖牙", // upper secondary canine tooth
  "FMA55715":"下颌尖牙", // lower secondary canine tooth
  "FMA55716":"上颌前磨牙", // upper secondary premolar tooth
  "FMA55717":"下颌前磨牙", // lower secondary premolar tooth
  "FMA55720":"上颌磨牙", // upper secondary molar tooth
  "FMA55721":"下颌磨牙", // lower secondary molar tooth
  "FMA55722":"上颌中切牙", // upper central secondary incisor tooth
  "FMA55723":"下颌中切牙", // lower central secondary incisor tooth
  "FMA55724":"上颌侧切牙", // upper lateral secondary incisor tooth
  "FMA55725":"下颌侧切牙", // lower lateral secondary incisor tooth
  "FMA55798":"右上颌尖牙(恒牙)", // right upper secondary canine tooth
  "FMA55799":"左上颌尖牙(恒牙)", // left upper secondary canine tooth
  "FMA55801":"上颌第1前磨牙", // upper first secondary premolar tooth
  "FMA55802":"上颌第2前磨牙", // upper second secondary premolar tooth
  "FMA55803":"下颌第1前磨牙", // lower first secondary premolar tooth
  "FMA55804":"下颌第2前磨牙", // lower second secondary premolar tooth
  "FMA55811":"上颌第1磨牙", // upper first secondary molar tooth
  "FMA55812":"上颌第2磨牙", // upper second secondary molar tooth
  "FMA55814":"下颌第1磨牙", // lower first secondary molar tooth
  "FMA55815":"下颌第2磨牙", // lower second secondary molar tooth
  "FMA57140":"右下颌侧切牙(恒牙)", // right lower lateral secondary incisor tooth
  "FMA57141":"左下颌侧切牙(恒牙)", // left lower lateral secondary incisor tooth
  "FMA57142":"右下颌中切牙(恒牙)", // right lower central secondary incisor tooth
  "FMA57143":"左下颌中切牙(恒牙)", // left lower central secondary incisor tooth
  "FMA57965":"包被筋膜区", // zone of investing fascia
  "FMA58071":"眼球房", // chamber of eyeball
  "FMA58078":"眼前房", // anterior chamber of eyeball
  "FMA58081":"右眼球前房", // anterior chamber of right eyeball
  "FMA58082":"左眼球前房", // anterior chamber of left eyeball
  "FMA58101":"眼球壁层", // layer of wall of eyeball
  "FMA58102":"眼球纤维膜", // fibrous layer of eyeball
  "FMA58235":"虹膜", // iris
  "FMA58236":"右虹膜", // right iris
  "FMA58237":"左虹膜", // left iris
  "FMA58238":"角膜", // cornea
  "FMA58239":"右角膜", // right cornea
  "FMA58240":"左角膜", // left cornea
  "FMA58241":"晶状体", // lens
  "FMA58242":"右晶状体", // right lens
  "FMA58243":"左晶状体", // left lens
  "FMA58245":"泪小管", // lacrimal canaliculus
  "FMA58269":"巩膜", // sclera
  "FMA58271":"右巩膜", // right sclera
  "FMA58272":"左巩膜", // left sclera
  "FMA58274":"躯干肌", // muscle of trunk
  "FMA58298":"脉络膜", // choroid
  "FMA58299":"右脉络膜", // right choroid
  "FMA58300":"左脉络膜", // left choroid
  "FMA58420":"游离下肢包被筋膜区", // zone of investing fascia of free lower limb
  "FMA58421":"下肢包被筋膜区", // zone of investing fascia of lower limb
  "FMA58431":"睫状冠", // corona ciliaris
  "FMA58479":"睫状体区", // region of ciliary body
  "FMA58483":"右睫状冠", // right corona ciliaris
  "FMA58484":"左睫状冠", // left corona ciliaris
  "FMA58599":"视网膜区", // region of retina
  "FMA58604":"视网膜视部", // optic part of retina
  "FMA58607":"右视网膜视部", // optic part of right retina
  "FMA58608":"左视网膜视部", // optic part of left retina
  "FMA58741":"大腿包被筋膜区", // zone of investing fascia of thigh
  "FMA58775":"阔筋膜区", // zone of fascia lata
  "FMA58776":"右髂胫束", // right iliotibial tract
  "FMA58777":"左髂胫束", // left iliotibial tract
  "FMA58817":"外耳", // subdivision of head proper
  "FMA58827":"玻璃体", // vitreous body
  "FMA58828":"右玻璃体", // right vitreous body
  "FMA58829":"左玻璃体", // left vitreous body
  "FMA58838":"晶状体悬韧带", // suspensory ligament of lens
  "FMA58839":"右晶状体悬韧带", // suspensory ligament of right lens
  "FMA58840":"左晶状体悬韧带", // suspensory ligament of left lens
  "FMA59086":"睑板", // tarsal plate of eyelid
  "FMA59087":"上睑板", // tarsal plate of upper eyelid
  "FMA59088":"下睑板", // tarsal plate of lower eyelid
  "FMA59089":"右下睑睑板", // tarsal plate of right lower eyelid
  "FMA59090":"左下睑睑板", // tarsal plate of left lower eyelid
  "FMA59091":"右上睑睑板", // tarsal plate of right upper eyelid
  "FMA59092":"左上睑睑板", // tarsal plate of left upper eyelid
  "FMA59101":"泪腺", // lacrimal gland
  "FMA59102":"右泪腺", // right lacrimal gland
  "FMA59103":"左泪腺", // left lacrimal gland
  "FMA59402":"泪湖", // lacrimal lake
  "FMA59502":"鼻软骨", // nasal cartilage
  "FMA59503":"鼻中隔软骨", // septal nasal cartilage
  "FMA59504":"鼻翼大软骨", // major alar cartilage
  "FMA59505":"右鼻翼大软骨", // right major alar cartilage
  "FMA59506":"左鼻翼大软骨", // left major alar cartilage
  "FMA59511":"鼻外侧软骨", // lateral nasal cartilage
  "FMA59512":"右鼻外侧软骨", // right lateral nasal cartilage
  "FMA59513":"左鼻外侧软骨", // left lateral nasal cartilage
  "FMA59541":"右泪湖", // right lacrimal lake
  "FMA59542":"左泪湖", // left lacrimal lake
  "FMA59545":"右泪囊", // right lacrimal sac
  "FMA59546":"左泪囊", // left lacrimal sac
  "FMA59555":"右鼻泪管", // right nasolacrimal duct
  "FMA59556":"左鼻泪管", // left nasolacrimal duct
  "FMA59582":"右泪小管", // right lacrimal canaliculus
  "FMA59583":"左泪小管", // left lacrimal canaliculus
  "FMA59762":"牙龈", // gingiva
  "FMA59763":"上颌牙龈", // gingiva of upper jaw
  "FMA59764":"下颌牙龈", // gingiva of lower jaw
  "FMA59788":"大唾液腺", // major salivary gland
  "FMA59791":"舌下腺", // sublingual gland
  "FMA59802":"右下颌下腺", // right submandibular gland
  "FMA59803":"左下颌下腺", // left submandibular gland
  "FMA59804":"右舌下腺", // right sublingual gland
  "FMA59805":"左舌下腺", // left sublingual gland
  "FMA59816":"唇", // lip
  "FMA61284":"神经树器官", // neural tree organ
  "FMA61708":"外耳", // subdivision of auriculotemporal part of head
  "FMA61775":"有形解剖实体", // physical anatomical entity
  "FMA61815":"中脑", // cardinal segment of brain
  "FMA61820":"大脑半球段", // segment of cerebral hemisphere
  "FMA61823":"大脑半球叶", // lobe of cerebral hemisphere
  "FMA61833":"尾状核", // caudate nucleus
  "FMA61834":"壳核", // putamen
  "FMA61835":"苍白球", // globus pallidus
  "FMA61841":"杏仁核", // amygdala
  "FMA61842":"端脑中隔", // septum of telencephalon
  "FMA61857":"额上回", // superior frontal gyrus
  "FMA61859":"额中回", // middle frontal gyrus
  "FMA61860":"额下回", // inferior frontal gyrus
  "FMA61894":"中央前回", // precentral gyrus
  "FMA61896":"中央后回", // postcentral gyrus
  "FMA61897":"缘上回", // supramarginal gyrus
  "FMA61898":"角回", // angular gyrus
  "FMA61899":"顶上小叶", // superior parietal lobule
  "FMA61906":"颞中回", // middle temporal gyrus
  "FMA61907":"颞下回", // inferior temporal gyrus
  "FMA61908":"梭状回", // fusiform gyrus
  "FMA61918":"海马旁回", // parahippocampal gyrus
  "FMA61934":"大脑半球脉络丛", // choroid plexus of cerebral hemisphere
  "FMA61950":"内囊", // internal capsule
  "FMA61961":"前连合", // anterior commissure
  "FMA61965":"前脑穹窿", // fornix of forebrain
  "FMA61970":"前脑穹窿连合", // commissure of fornix of forebrain
  "FMA61974":"终纹", // stria terminalis
  "FMA61975":"终板", // lamina terminalis
  "FMA61993":"中脑", // midbrain
  "FMA61996":"前脑段", // segment of forebrain
  "FMA61997":"中脑段", // segment of midbrain
  "FMA61998":"延髓", // segment of hindbrain
  "FMA62004":"延髓", // medulla oblongata
  "FMA62007":"丘脑", // thalamus
  "FMA62008":"下丘脑", // hypothalamus
  "FMA62032":"缰", // habenula
  "FMA62033":"松果体", // pineal body
  "FMA62045":"视交叉", // optic chiasm
  "FMA62046":"视束", // optic tract
  "FMA62072":"后连合", // posterior commissure
  "FMA62080":"丘脑髓纹", // stria medullaris of thalamus
  "FMA62209":"外侧膝状体", // lateral geniculate body
  "FMA62211":"内侧膝状体", // medial geniculate body
  "FMA62327":"灰结节", // tuber cinereum
  "FMA62374":"端脑段", // segment of telencephalon
  "FMA62382":"右视束", // right optic tract
  "FMA62394":"中脑脚", // peduncle of midbrain
  "FMA62398":"中脑顶盖段", // segment of midbrain tectum
  "FMA62403":"上丘", // superior colliculus
  "FMA62404":"下丘", // inferior colliculus
  "FMA62434":"扣带回", // cingulate gyrus
  "FMA62445":"后连合", // commissure of diencephalon
  "FMA62466":"大脑半球被囊", // capsule of cerebral hemisphere
  "FMA62493":"海马", // hippocampus
  "FMA62504":"掌背静脉", // tributary of deep palmar venous arch
  "FMA62506":"右手背静脉网", // dorsal venous network of right hand
  "FMA62507":"左手背静脉网", // dorsal venous network of left hand
  "FMA62512":"体循环静脉主干", // trunk of systemic vein
  "FMA62514":"端脑基底核", // basal ganglion of telencephalon
  "FMA62955":"解剖实体", // anatomical entity
  "FMA63103":"胰管树", // pancreatic duct tree
  "FMA63120":"胰实质", // parenchyma of pancreas
  "FMA63812":"动脉集合", // set of arteries
  "FMA63814":"静脉集合", // set of veins
  "FMA63822":"肋间后动脉", // posterior intercostal arteries
  "FMA64796":"浆膜区域", // region of serous membrane
  "FMA64822":"颈浅肌", // superficial muscle of neck
  "FMA64829":"斜角肌", // scalene muscle
  "FMA64875":"枕下前肌", // anterior suboccipital muscle
  "FMA64916":"鱼际肌", // thenar muscle
  "FMA64917":"小鱼际肌", // hypothenar muscle
  "FMA64922":"臀肌", // gluteal muscle
  "FMA64989":"异质簇", // heterogeneous cluster
  "FMA64990":"器官部簇", // organ part cluster
  "FMA65004":"小腿后群浅肌", // superficial muscle of posterior compartment of leg
  "FMA65008":"小腿后群深肌", // deep muscle of posterior compartment of leg
  "FMA65014":"右踇长屈肌", // right flexor hallucis longus
  "FMA65015":"左踇长屈肌", // left flexor hallucis longus
  "FMA65016":"右趾长屈肌", // right flexor digitorum longus
  "FMA65017":"左趾长屈肌", // left flexor digitorum longus
  "FMA65018":"右胫骨后肌", // right tibialis posterior
  "FMA65019":"左胫骨后肌", // left tibialis posterior
  "FMA65020":"足固有肌", // intrinsic muscle of foot
  "FMA65045":"足背固有肌", // intrinsic muscle of dorsum of foot
  "FMA65046":"足底固有肌", // intrinsic muscle of plantar part of foot
  "FMA65132":"神经", // nerve
  "FMA65198":"右拇短屈肌浅头", // superficial head of right flexor pollicis brevis
  "FMA65199":"左拇短屈肌浅头", // superficial head of left flexor pollicis brevis
  "FMA65410":"右中间腱", // intermediate tendon
  "FMA65470":"左拇指近节指骨", // proximal phalanx of left thumb
  "FMA65539":"睫状短神经", // subdivision of parasympathetic nervous system
  "FMA65551":"睫状短神经", // subdivisionof autonomic nervous system
  "FMA66241":"第1肋间后动脉", // first posterior intercostal artery
  "FMA66242":"右第1肋间后动脉", // right first posterior intercostal artery
  "FMA66243":"左第1肋间后动脉", // left first posterior intercostal artery
  "FMA66267":"主动脉弓支气管支", // variant systemic artery
  "FMA66320":"胸背动脉", // thoracodorsal artery
  "FMA66321":"右胸背动脉", // right thoracodorsal artery
  "FMA66322":"左胸背动脉", // left thoracodorsal artery
  "FMA66326":"肺动脉", // pulmonary artery
  "FMA66327":"右冠状动脉分支", // branch of right coronary artery
  "FMA66328":"左冠状动脉分支", // branch of left coronary artery
  "FMA66332":"动脉区", // zone of artery
  "FMA66358":"肠系膜上动脉干", // trunk of superior mesenteric artery
  "FMA66362":"肾动脉主干", // trunk of renal artery
  "FMA66363":"右肾动脉干", // trunk of right renal artery
  "FMA66364":"左肾动脉干", // trunk of left renal artery
  "FMA66403":"前室间静脉", // anterior interventricular vein
  "FMA66464":"体循环动脉", // systemic artery
  "FMA66562":"胸肩峰动脉主干", // trunk of thoraco-acromial artery
  "FMA66563":"右胸肩峰动脉干", // trunk of right thoraco-acromial artery
  "FMA66564":"左胸肩峰动脉干", // trunk of left thoraco-acromial artery
  "FMA66643":"肺静脉", // pulmonary vein
  "FMA66644":"体循环静脉", // systemic vein
  "FMA66645":"门静脉", // portal vein
  "FMA66791":"左小指近节指骨", // proximal phalanx of left little finger
  "FMA67112":"无形解剖实体", // immaterial anatomical entity
  "FMA67135":"解剖结构", // anatomical structure
  "FMA67165":"物质解剖实体", // material anatomical entity
  "FMA67242":"神经轴灰质", // gray matter of neuraxis
  "FMA67325":"枕叶", // occipital lobe
  "FMA67329":"岛叶", // insula
  "FMA67396":"骨联合关节盘", // articular disk of symphysis
  "FMA67498":"器官", // organ
  "FMA67504":"身体主要部分分部", // subdivision of cardinal body part
  "FMA67536":"主要组织部分", // cardinal tissue part
  "FMA67538":"上皮分部", // subdivision of epithelium
  "FMA67552":"解剖腔", // anatomical cavity
  "FMA67598":"心瓣叶", // leaf of cardiac valve
  "FMA67601":"剑突", // process of organ
  "FMA67619":"器官区域", // organ region
  "FMA67936":"左视束", // left optic tract
  "FMA67942":"脑桥", // segment of metencephalon
  "FMA67943":"脑桥", // pons
  "FMA67944":"小脑", // cerebellum
  "FMA67950":"端脑纹", // stria of telencephalon
  "FMA67951":"终板", // lamina of cerebral hemisphere
  "FMA67957":"大脑半球回段", // segment of gyrus of cerebral hemisphere
  "FMA67977":"手背静脉网", // dorsal venous network of hand
  "FMA68045":"胸主动脉段", // segment of thoracic aorta
  "FMA68068":"膈下静脉", // inferior phrenic vein
  "FMA68109":"支气管动脉", // bronchial artery
  "FMA68192":"右肺上叶动脉", // lobar artery
  "FMA68197":"右肺上叶动脉", // right upper lobar artery
  "FMA68208":"支气管树肺段", // pulmonary segment of bronchial tree
  "FMA68211":"右尖段支气管树", // right apical segmental bronchial tree
  "FMA68212":"右前段支气管树", // right anterior segmental bronchial tree
  "FMA68213":"右后段支气管树", // right posterior segmental bronchial tree
  "FMA68214":"内侧段支气管树", // medial segmental bronchial tree
  "FMA68215":"外侧段支气管树", // lateral segmental bronchial tree
  "FMA68216":"右肺上段支气管树", // right superior segmental bronchial tree
  "FMA68218":"右内底段支气管树", // right medial basal segmental bronchial tree
  "FMA68219":"前底段支气管树", // anterior basal segmental bronchial tree
  "FMA68220":"右外底段支气管树", // right lateral basal segmental bronchial tree
  "FMA68221":"右后底段支气管树", // right posterior basal segmental bronchial tree
  "FMA68222":"左前段支气管树", // left anterior segmental bronchial tree
  "FMA68223":"左尖段支气管树", // left apical segmental bronchial tree
  "FMA68225":"左后段支气管树", // left posterior segmental bronchial tree
  "FMA68226":"上舌段支气管树", // superior lingular bronchial tree
  "FMA68227":"下舌段支气管树", // inferior lingular bronchial tree
  "FMA68228":"左肺上段支气管树", // left superior segmental bronchial tree
  "FMA68229":"后底段支气管树", // posterior basal segmental bronchial tree
  "FMA68230":"左内底段支气管树", // left medial basal segmental bronchial tree
  "FMA68231":"左前底段支气管树", // left anterior basal segmental bronchial tree
  "FMA68232":"左外底段支气管树", // left lateral basal segmental bronchial tree
  "FMA68233":"左后底段支气管树", // left posterior basal segmental bronchial tree
  "FMA68234":"尖段支气管树", // apical segmental bronchial tree
  "FMA68235":"前段支气管树", // anterior segmental bronchial tree
  "FMA68236":"后段支气管树", // posterior segmental bronchial tree
  "FMA68237":"上段支气管树", // superior segmental bronchial tree
  "FMA68238":"基底段支气管树", // basal segmental bronchial tree
  "FMA68320":"内侧底段支气管树", // medial basal segmental bronchial tree
  "FMA68321":"右前底段支气管树", // right anterior basal segmental bronchial tree
  "FMA68322":"外侧底段支气管树", // lateral basal segmental bronchial tree
  "FMA68418":"右主支气管", // right main bronchus proper
  "FMA68661":"右尖段动脉尖部", // apical part of apical segmental artery
  "FMA68662":"右尖段动脉尖部", // apical part of right apical segmental artery
  "FMA68664":"右尖段动脉前部", // anterior part of apical segmental artery
  "FMA68665":"右尖段动脉前部", // anterior part of right apical segmental artery
  "FMA68667":"尖段动脉亚段部", // subsegmental part of apical segmental artery
  "FMA68668":"后段动脉亚段部", // subsegmental part of posterior segmental artery
  "FMA68669":"右后段动脉尖部", // apical part of posterior segmental artery
  "FMA68670":"右后段动脉尖部", // apical part of right posterior segmental artery
  "FMA68672":"右后段动脉后部", // posterior part of posterior segmental artery
  "FMA68673":"右后段动脉后部", // posterior part of right posterior segmental artery
  "FMA68675":"前段动脉亚段部", // subsegmental part of anterior segmental artery
  "FMA68676":"右前段动脉后支", // posterior part of anterior segmental artery
  "FMA68677":"右前段动脉后支", // posterior branch of right anterior segmental artery
  "FMA68682":"右前段动脉前支", // anterior branch of anterior segmental artery
  "FMA68683":"右前段动脉前支", // anterior branch of right anterior segmental artery
  "FMA68689":"外侧段动脉亚段部", // subsegmental part of lateral segmental artery
  "FMA68690":"外侧段动脉后支", // posterior branch of lateral segmental artery
  "FMA68691":"外侧段动脉前支", // anterior branch of lateral segmental artery
  "FMA68692":"内侧段动脉亚段部", // subsegmental part of medial segmental artery
  "FMA68693":"内侧段动脉上支", // superior branch of medial segmental artery
  "FMA68694":"内侧段动脉下支", // inferior branch of medial segmental artery
  "FMA68704":"右肺上段动脉内侧支", // medial branch of superior segmental artery
  "FMA68705":"上段动脉亚段部", // subsegmental part of superior segmental artery
  "FMA68706":"右肺上段动脉内侧支", // medial branch of right superior segmental artery
  "FMA68708":"右肺上段动脉上支", // superior branch of superior segmental artery
  "FMA68709":"右肺上段动脉上支", // superior branch of right superior segmental artery
  "FMA68711":"右肺上段动脉外侧支", // lateral branch of superior segmental artery
  "FMA68712":"右肺上段动脉外侧支", // lateral branch of right superior segmental artery
  "FMA68720":"前底段动脉亚段部", // subsegmental part of anterior basal segmental artery
  "FMA68721":"右前底段动脉外侧支", // lateral branch of anterior basal segmental artery
  "FMA68722":"右前底段动脉底支", // basal branch of anterior basal segmental artery
  "FMA68723":"右前底段动脉底支", // basal branch of right anterior basal segmental artery
  "FMA68725":"右前底段动脉外侧支", // lateral branch of right anterior basal segmental artery
  "FMA68727":"右外底段动脉外侧支", // subsegmental part of lateral basal segmental artery
  "FMA68728":"右外底段动脉外侧支", // lateral branch of right lateral basal segmental artery
  "FMA68733":"后底段动脉亚段部", // subsegmental part of posterior basal segmental artery
  "FMA68734":"右后底段动脉亚上段副支", // accessory subsuperior branch of posterior basal segmental artery
  "FMA68735":"右后底段动脉亚上段副支", // accessory subsuperior branch of right posterior basal segmental artery
  "FMA68737":"右后底段动脉外侧底支", // laterobasal branch of posterior basal segmental artery
  "FMA68738":"右后底段动脉外侧底支", // laterobasal branch of right posterior basal segmental artery
  "FMA68740":"右后底段动脉内侧底支", // mediobasal branch of posterior basal segmental artery
  "FMA68741":"右后底段动脉内侧底支", // mediobasal branch of right posterior basal segmental artery
  "FMA68878":"右尖段静脉干", // trunk of segmental pulmonary vein
  "FMA68879":"右尖段静脉干", // trunk of apical segmental vein
  "FMA68880":"右尖段静脉干", // trunk of right apical segmental vein
  "FMA68919":"右尖段静脉尖部", // apical part of apical segmental vein
  "FMA68920":"右尖段静脉前部", // anterior part of apical segmental vein
  "FMA68921":"右尖段静脉前部", // anterior part of right apical segmental vein
  "FMA68926":"右前段静脉上部", // superior part of right anterior segmental vein
  "FMA68928":"右前段静脉下部", // inferior part of right anterior segmental vein
  "FMA68944":"外侧段静脉后部", // posterior part of lateral segmental vein
  "FMA68945":"外侧段静脉前部", // anterior part of lateral segmental vein
  "FMA68982":"内侧段静脉上部", // superior part of medial segmental vein
  "FMA68983":"内侧段静脉下部", // inferior part of medial segmental vein
  "FMA69264":"肾上腺下动脉", // inferior suprarenal artery
  "FMA69265":"右肾上腺下动脉", // right inferior suprarenal artery
  "FMA69266":"左肾上腺下动脉", // left inferior suprarenal artery
  "FMA69418":"腘动脉分支主干", // trunk of branch of popliteal artery
  "FMA69458":"髂外动脉分部", // subdivision of external iliac artery
  "FMA69459":"股深动脉分部", // subdivision of deep femoral artery
  "FMA69476":"胫前动脉分部", // subdivision of anterior tibial artery
  "FMA69490":"右跗外侧动脉", // right lateral tarsal artery
  "FMA69491":"左跗外侧动脉", // left lateral tarsal artery
  "FMA69494":"右弓状动脉", // right arcuate artery
  "FMA69495":"左弓状动脉", // left arcuate artery
  "FMA69513":"足底深动脉", // deep plantar artery
  "FMA69514":"右足底深动脉", // right deep plantar artery
  "FMA69515":"左足底深动脉", // left deep plantar artery
  "FMA69517":"远侧穿动脉", // distal perforating artery
  "FMA69559":"足底外侧动脉干区", // zone of trunk of lateral plantar artery
  "FMA69713":"足趾背动脉", // digital artery of foot
  "FMA69784":"胫后动脉分支", // branch of posterior tibial artery
  "FMA69796":"髂内动脉分部", // subdivision of internal iliac artery
  "FMA69803":"髂内动脉前干分部", // subdivision of anterior division of internal iliac artery
  "FMA69805":"阴部内动脉分部", // subdivision of internal pudendal artery
  "FMA70247":"髂外动脉本部之分部", // subdivision of external iliac artery proper
  "FMA70248":"股动脉", // femoral artery
  "FMA70249":"右股动脉", // right femoral artery
  "FMA70250":"左股动脉", // left femoral artery
  "FMA70251":"股动脉分部", // subdivision of femoral artery
  "FMA70345":"锁骨下动脉分部", // subdivision of subclavian artery
  "FMA70353":"甲状颈干分部", // subdivision of thyrocervical artery
  "FMA70358":"胸廓内动脉分部", // subdivision of internal thoracic artery
  "FMA70399":"肋颈干分部", // subdivision of costocervical artery
  "FMA70408":"胸肩峰动脉分部", // subdivision of thoraco-acromial artery
  "FMA70422":"肩胛下动脉分部", // subdivision of subscapular artery
  "FMA70429":"腹腔干分部", // subdivision of celiac artery
  "FMA70433":"肝总动脉分部", // subdivision of common hepatic artery
  "FMA70436":"胃十二指肠动脉分部", // subdivision of gastroduodenal artery
  "FMA70437":"胰十二指肠上动脉", // superior pancreaticoduodenal artery
  "FMA70439":"肝右动脉分部", // subdivision of right hepatic artery
  "FMA70440":"肝左动脉分部", // subdivision of left hepatic artery
  "FMA70442":"肝前上段动脉", // anterior superior segmental hepatic artery
  "FMA70443":"肝前下段动脉", // anterior inferior segmental hepatic artery
  "FMA70445":"肝后上段动脉", // posterior superior segmental hepatic artery
  "FMA70446":"肝后下段动脉", // posterior inferior segmental hepatic artery
  "FMA70447":"右肝动脉尾状叶支", // caudate lobe branch of right hepatic artery
  "FMA70449":"肝内侧上段动脉", // medial superior segmental hepatic artery
  "FMA70450":"肝内侧下段动脉", // medial inferior segmental hepatic artery
  "FMA70452":"肝外侧上段动脉", // lateral superior segmental hepatic artery
  "FMA70453":"肝外侧下段动脉", // lateral inferior segmental hepatic artery
  "FMA70455":"左肝动脉尾状叶支", // caudate lobe branch of left hepatic artery
  "FMA70456":"右肝动脉干", // trunk of right hepatic artery
  "FMA70457":"左肝动脉干", // trunk of left hepatic artery
  "FMA70470":"脾动脉分部", // subdivision of splenic artery
  "FMA70471":"胰腺动脉", // pancreatic artery
  "FMA70478":"肠系膜上动脉分部", // subdivision of superior mesenteric artery
  "FMA70479":"胰十二指肠前下动脉", // anterior inferior pancreaticoduodenal artery
  "FMA70480":"胰十二指肠后下动脉", // posterior inferior pancreaticoduodenal artery
  "FMA70481":"胰十二指肠下动脉分部", // subdivision of inferior pancreaticoduodenal artery
  "FMA70483":"肠系膜下动脉分部", // subdivision of inferior mesenteric artery
  "FMA70484":"肾动脉段", // segment of renal artery
  "FMA70485":"肾动脉前支", // anterior division of renal artery
  "FMA70486":"右肾动脉前支", // anterior division of right renal artery
  "FMA70487":"左肾动脉前支", // anterior division of left renal artery
  "FMA70488":"肾动脉后支", // posterior division of renal artery
  "FMA70489":"右肾动脉后支", // posterior division of right renal artery
  "FMA70490":"左肾动脉后支", // posterior division of left renal artery
  "FMA70491":"肾动脉输尿管段", // ureteric segment of renal artery
  "FMA70492":"右肾动脉输尿管段", // ureteric segment of right renal artery
  "FMA70493":"左肾动脉输尿管段", // ureteric segment of left renal artery
  "FMA70494":"肾段动脉", // segmental renal artery
  "FMA70499":"肾上段动脉", // superior segmental renal artery
  "FMA70502":"肾下段动脉", // inferior segmental renal artery
  "FMA70503":"肾后段动脉", // posterior segmental renal artery
  "FMA70504":"颈总动脉分部", // subdivision of common carotid artery
  "FMA70506":"颈内动脉分部", // subdivision of internal carotid artery
  "FMA70523":"颈内动脉大脑部分部", // subdivision of cerebral part of internal carotid artery
  "FMA70593":"表皮分部", // subdivision of epidermis
  "FMA70676":"颞上回分部", // subdivision of superior temporal gyrus
  "FMA70701":"颞上回前部", // anterior part of superior temporal gyrus
  "FMA70703":"颞上回后部", // posterior part of superior temporal gyrus
  "FMA70741":"眉", // set of facial hairs
  "FMA70752":"眉", // set of hairs
  "FMA70779":"器官集合", // set of organs
  "FMA70800":"掌背动脉群", // set of dorsal metacarpal arteries
  "FMA70801":"趾背动脉群", // set of dorsal digital arteries
  "FMA70815":"穿动脉群", // set of perforating arteries
  "FMA70821":"趾足底总动脉群", // set of common plantar digital arteries
  "FMA70839":"肋间前静脉群", // set of anterior intercostal veins
  "FMA70917":"趾背静脉群", // set of dorsal digital veins
  "FMA70919":"趾足底静脉群", // set of plantar digital veins
  "FMA70922":"穿静脉群", // set of perforating veins
  "FMA71012":"皮肤附属器", // skin appendage
  "FMA71114":"下丘臂", // brachium of inferior colliculus
  "FMA71193":"胸腺叶", // lobe of thymus
  "FMA71194":"右胸腺叶", // right lobe of thymus
  "FMA71195":"左胸腺叶", // left lobe of thymus
  "FMA71209":"腋静脉属支", // tributary of axillary vein
  "FMA71210":"胸外侧静脉", // lateral thoracic vein
  "FMA71211":"右胸外侧静脉", // right lateral thoracic vein
  "FMA71212":"左胸外侧静脉", // left lateral thoracic vein
  "FMA71213":"胸背静脉", // thoracodorsal vein
  "FMA71214":"右胸背静脉", // right thoracodorsal vein
  "FMA71215":"左胸背静脉", // left thoracodorsal vein
  "FMA71235":"小脑幕", // region of dura mater
  "FMA71307":"腰棘间肌群", // set of interspinales lumborum
  "FMA71309":"颈棘间肌群", // set of interspinales cervicis
  "FMA71313":"肋长提肌群", // set of levatores costarum longi
  "FMA71314":"肋短提肌群", // set of levatores costarum breves
  "FMA71318":"手蚓状肌群", // set of lumbricals of hand
  "FMA71319":"手骨间背侧肌群", // set of dorsal interossei of hand
  "FMA71320":"手骨间掌侧肌群", // set of palmar interossei of hand
  "FMA71442":"颈横突间前肌群", // set of anterior cervical intertransversarii
  "FMA71443":"颈横突间后肌群", // set of posterior cervical intertransversarii
  "FMA71502":"枕外侧动脉颞后支群", // set of posterior temporal branches of lateral occipital artery
  "FMA71537":"胸主动脉食管支群", // set of oesophageal branches of thoracic aorta
  "FMA71562":"胫后动脉跟支群", // set of calcaneal branches of posterior tibial artery
  "FMA71564":"趾足底固有动脉群", // set of plantar digital arteries proper
  "FMA71708":"右肝动脉右叶支", // right lobe branch of right hepatic artery
  "FMA71709":"肝右动脉右叶支分部", // subdivision of right lobe branch of right hepatic artery
  "FMA71710":"左肝动脉左叶支", // left lobe branch of left hepatic artery
  "FMA71736":"肝左动脉左叶支分部", // subdivision of left lobe branch of left hepatic artery
  "FMA71856":"胆管树段", // segment of biliary tree
  "FMA71859":"肝右胆管树段", // segment of right hepatic biliary tree
  "FMA71860":"肝左胆管树段", // segment of left hepatic biliary tree
  "FMA71865":"肝右胆管树段属支", // segmental tributary of right hepatic biliary tree
  "FMA71866":"肝左胆管树段属支", // segmental tributary of left hepatic biliary tree
  "FMA71867":"右肝胆管树前上属支", // anterior superior tributary of right hepatic biliary tree
  "FMA71868":"右肝胆管树前下属支", // anterior inferior tributary of right hepatic biliary tree
  "FMA71869":"右肝胆管树后上属支", // posterior superior tributary of right hepatic biliary tree
  "FMA71870":"右肝胆管树后下属支", // posterior inferior tributary of right hepatic biliary tree
  "FMA71885":"左肝胆管树内侧上属支", // medial superior tributary of left hepatic biliary tree
  "FMA71886":"左肝胆管树内侧下属支", // medial inferior tributary of left hepatic biliary tree
  "FMA71887":"左肝胆管树外侧上属支", // lateral superior tributary of left hepatic biliary tree
  "FMA71888":"左肝胆管树外侧下属支", // lateral inferior tributary of left hepatic biliary tree
  "FMA71889":"左肝胆管树尾状叶属支", // caudate lobe tributary of left hepatic biliary tree
  "FMA71903":"肝门静脉分部", // subdivision of hepatic portal vein
  "FMA71904":"肝前门静脉", // pre-hepatic portal vein
  "FMA71905":"肝右门静脉分部", // subdivision of right hepatic portal vein
  "FMA71906":"肝左门静脉分部", // subdivision of left hepatic portal vein
  "FMA71907":"肝门静脉属支主干", // trunk of branch of hepatic portal vein
  "FMA71908":"左中指近节指骨", // proximal phalanx of left middle finger
  "FMA71915":"左示指近节指骨", // proximal phalanx of left index finger
  "FMA71916":"左环指近节指骨", // proximal phalanx of left ring finger
  "FMA72058":"甲状会厌韧带", // intrinsic ligament of larynx
  "FMA72308":"茎突舌骨韧带", // stylohyoid ligament
  "FMA72309":"右茎突舌骨韧带", // right stylohyoid ligament
  "FMA72311":"左茎突舌骨韧带", // left stylohyoid ligament
  "FMA72417":"上丘臂", // brachium of superior colliculus
  "FMA72653":"右额上回", // right superior frontal gyrus
  "FMA72654":"左额上回", // left superior frontal gyrus
  "FMA72655":"右额中回", // right middle frontal gyrus
  "FMA72656":"左额中回", // left middle frontal gyrus
  "FMA72657":"右额下回", // right inferior frontal gyrus
  "FMA72658":"左额下回", // left inferior frontal gyrus
  "FMA72661":"右中央前回", // right precentral gyrus
  "FMA72662":"左中央前回", // left precentral gyrus
  "FMA72665":"右中央后回", // right postcentral gyrus
  "FMA72666":"左中央后回", // left postcentral gyrus
  "FMA72667":"右缘上回", // right supramarginal gyrus
  "FMA72668":"左缘上回", // left supramarginal gyrus
  "FMA72669":"右角回", // right angular gyrus
  "FMA72670":"左角回", // left angular gyrus
  "FMA72671":"右顶上小叶", // right superior parietal lobule
  "FMA72672":"左顶上小叶", // left superior parietal lobule
  "FMA72685":"右颞中回", // right middle temporal gyrus
  "FMA72686":"左颞中回", // left middle temporal gyrus
  "FMA72687":"右颞下回", // right inferior temporal gyrus
  "FMA72688":"左颞下回", // left inferior temporal gyrus
  "FMA72689":"右梭状回", // right fusiform gyrus
  "FMA72690":"左梭状回", // left fusiform gyrus
  "FMA72705":"右海马旁回", // right parahippocampal gyrus
  "FMA72706":"左海马旁回", // left parahippocampal gyrus
  "FMA72713":"右海马", // right hippocampus
  "FMA72714":"左海马", // left hippocampus
  "FMA72717":"右扣带回", // right cingulate gyrus
  "FMA72718":"左扣带回", // left cingulate gyrus
  "FMA72800":"右颞上回前部", // anterior part of right superior temporal gyrus
  "FMA72801":"左颞上回前部", // anterior part of left superior temporal gyrus
  "FMA72804":"右颞上回后部", // posterior part of right superior temporal gyrus
  "FMA72805":"左颞上回后部", // posterior part of left superior temporal gyrus
  "FMA72826":"右尾状核", // right caudate nucleus
  "FMA72827":"左尾状核", // left caudate nucleus
  "FMA72828":"右壳核", // right putamen
  "FMA72829":"左壳核", // left putamen
  "FMA72830":"右苍白球", // right globus pallidus
  "FMA72831":"左苍白球", // left globus pallidus
  "FMA72832":"右杏仁体", // right amygdala
  "FMA72833":"左杏仁体", // left amygdala
  "FMA72906":"右内囊", // right internal capsule
  "FMA72907":"左内囊", // left internal capsule
  "FMA72924":"右前脑穹窿", // right fornix of forebrain
  "FMA72925":"左前脑穹窿", // left fornix of forebrain
  "FMA72940":"左终纹", // left stria terminalis
  "FMA72975":"右枕叶", // right occipital lobe
  "FMA72976":"左枕叶", // left occipital lobe
  "FMA72977":"右岛叶", // right insula
  "FMA72978":"左岛叶", // left insula
  "FMA73203":"腋动脉分部主干", // trunk of subdivision of axillary artery
  "FMA73204":"髂总动脉分支主干", // trunk of branch of common iliac artery
  "FMA73303":"右外侧膝状体", // right lateral geniculate body
  "FMA73304":"左外侧膝状体", // left lateral geniculate body
  "FMA73309":"右内侧膝状体", // right medial geniculate body
  "FMA73310":"左内侧膝状体", // left medial geniculate body
  "FMA73413":"右丘脑髓纹", // right stria medullaris of thalamus
  "FMA73414":"左丘脑髓纹", // left stria medullaris of thalamus
  "FMA73422":"右上丘", // right superior colliculus
  "FMA73423":"左上丘", // left superior colliculus
  "FMA73434":"右下丘", // right inferior colliculus
  "FMA73435":"左下丘", // left inferior colliculus
  "FMA73461":"右上丘臂", // brachium of right superior colliculus
  "FMA73462":"左上丘臂", // brachium of left superior colliculus
  "FMA73463":"右下丘臂", // brachium of right inferior colliculus
  "FMA73464":"左下丘臂", // brachium of left inferior colliculus
  "FMA74075":"右肋长提肌群", // set of right levatores costarum longi
  "FMA74076":"左肋长提肌群", // set of left levatores costarum longi
  "FMA74077":"右肋短提肌群", // set of right levatores costarum breves
  "FMA74078":"左肋短提肌群", // set of left levatores costarum breves
  "FMA74779":"胸部肌群", // musculature of chest
  "FMA74866":"间脑区", // zone of diencephalon
  "FMA74877":"乳头体", // mammillary body
  "FMA74912":"左冠状动脉前室间支主干", // trunk of anterior interventricular branch of left coronary artery
  "FMA75351":"室间孔", // interventricular foramen
  "FMA75445":"膜性器官成分", // membrane organ component
  "FMA75865":"颈内动脉分支主干", // trunk of branch of internal carotid artery
  "FMA76107":"大脑中动脉分支主干", // trunk of branch of middle cerebral artery
  "FMA76127":"大脑中动脉下终末支主干", // trunk of inferior terminal branch of middle cerebral artery
  "FMA76128":"右大脑中动脉下终支主干", // trunk of inferior terminal branch of right middle cerebral artery
  "FMA76129":"左大脑中动脉下终支主干", // trunk of inferior terminal branch of left middle cerebral artery
  "FMA76259":"椎动脉分支", // branch of vertebral artery
  "FMA76264":"椎动脉颅内分支", // intracranial branch of vertebral artery
  "FMA76269":"基底动脉分支", // branch of basilar artery
  "FMA76301":"锁骨下动脉分支主干", // trunk of branch of subclavian artery
  "FMA76547":"肝总动脉分支主干", // trunk of branch of common hepatic artery
  "FMA76574":"胃十二指肠动脉干", // trunk of gastroduodenal artery
  "FMA76582":"肝动脉主干", // trunk of hepatic artery
  "FMA76767":"心前静脉", // anterior cardiac vein
  "FMA76903":"左肝尾状叶管", // left duct of caudate lobe of liver
  "FMA76998":"最上肋间动脉", // supreme intercostal artery
  "FMA77140":"尺侧返动脉", // ulnar recurrent artery
  "FMA77144":"骨间返动脉", // recurrent interosseous artery
  "FMA77155":"腘动脉", // popliteal artery
  "FMA77168":"骶正中静脉", // median sacral vein
  "FMA77177":"髂肋肌", // iliocostalis
  "FMA77178":"最长肌", // longissimus
  "FMA77179":"棘肌", // spinalis
  "FMA77180":"夹肌", // splenius
  "FMA77380":"右腘动脉", // right popliteal artery
  "FMA77381":"左腘动脉", // left popliteal artery
  "FMA77439":"中央沟动脉", // artery of central sulcus
  "FMA77498":"旋肩胛静脉", // circumflex scapular vein
  "FMA77499":"旋肱前静脉", // anterior circumflex humeral vein
  "FMA77883":"头臂静脉分部", // subdivision of brachiocephalic vein
  "FMA77884":"锁骨下静脉分部", // subdivision of subclavian vein
  "FMA77949":"右旋肩胛静脉", // right circumflex scapular vein
  "FMA77950":"左旋肩胛静脉", // left circumflex scapular vein
  "FMA77954":"右旋肱前静脉", // right anterior circumflex humeral vein
  "FMA77955":"左旋肱前静脉", // left anterior circumflex humeral vein
  "FMA78021":"肱内侧静脉", // medial brachial vein
  "FMA78048":"上腔静脉树分部", // subdivision of superior vena caval tree
  "FMA78049":"下腔静脉树分部", // subdivision of inferior vena caval tree
  "FMA78121":"膈上静脉", // superior phrenic vein
  "FMA78204":"髂外静脉分部", // subdivision of external iliac vein
  "FMA78207":"贵要静脉属支", // tributary of basilic vein
  "FMA78447":"脑室系统区域", // region of ventricular system of brain
  "FMA78448":"侧脑室", // lateral ventricle
  "FMA78449":"右侧脑室", // right lateral ventricle
  "FMA78450":"左侧脑室", // left lateral ventricle
  "FMA78454":"第三脑室", // third ventricle
  "FMA78467":"中脑导水管", // cerebral aqueduct
  "FMA78469":"第四脑室", // fourth ventricle
  "FMA78497":"脊髓中央管", // central canal of spinal cord
  "FMA78562":"器官区集合", // set of organ regions
  "FMA78590":"睫状短神经", // set of heterogeneous clusters
  "FMA79615":"大脑前动脉交通后段分支", // branch of postcommunicating part of anterior cerebral artery
  "FMA79631":"大脑中动脉蝶部分支", // branch of sphenoid part of middle cerebral artery
  "FMA79658":"肩胛背动脉", // dorsal scapular artery
  "FMA79979":"右胸大肌胸肋部", // sternocostal part of right pectoralis major
  "FMA79980":"左胸大肌胸肋部", // sternocostal part of left pectoralis major
  "FMA81150":"大脑半球小叶", // lobule of cerebral hemisphere
  "FMA81752":"右颈回旋肌", // right cervical rotator
  "FMA81753":"左颈回旋肌", // left cervical rotator
  "FMA82472":"主要器官部", // cardinal organ part
  "FMA82478":"小叶器官成分", // lobular organ component
  "FMA82481":"器官腔室", // organ chamber
  "FMA82485":"器官成分层", // organ component layer
  "FMA82494":"肝尾状叶", // lobular segment
  "FMA82500":"膜性层", // membranous layer
  "FMA82594":"锁骨下动脉段", // segment of subclavian artery
  "FMA82695":"右门静脉干", // trunk of right portal vein
  "FMA82697":"左门静脉干", // trunk of left portal vein
  "FMA82706":"右门静脉尾状叶支", // caudate lobe branch of right portal vein
  "FMA82734":"右睫状长神经", // right long ciliary nerve
  "FMA82735":"左睫状长神经", // left long ciliary nerve
  "FMA83115":"细胞成分簇", // cell part cluster
  "FMA83143":"神经轴细胞成分簇", // cell part cluster of neuraxis
  "FMA83153":"神经轴器官成分", // organ component of neuraxis
  "FMA83465":"神经轴白质段", // segment of white matter of neuraxis
  "FMA83563":"肌层分部", // subdivision of muscle layer
  "FMA83686":"神经轴核", // nucleus of neuraxis
  "FMA83738":"脚间窝", // subarachnoid incisure
  "FMA83740":"脚间窝", // interpeduncular fossa
  "FMA83840":"脑核", // nucleus of brain
  "FMA83854":"神经轴纹", // stria of neuraxis
  "FMA83856":"终板", // lamina of neuraxis
  "FMA83857":"神经轴臂", // brachium of neuraxis
  "FMA83860":"中脑脚", // peduncle of neuraxis
  "FMA83865":"神经轴穹窿", // fornix of neuraxis
  "FMA83874":"神经轴回", // gyrus of neuraxis
  "FMA83904":"端脑中隔", // septum of neuraxis
  "FMA83906":"神经轴连合", // commissure of neuraxis
  "FMA83912":"乳头体", // gray matter of diencephalon
  "FMA83915":"乳头体", // gray matter of hypothalamus
  "FMA83929":"神经轴白质", // white matter of neuraxis
  "FMA83930":"端脑白质", // white matter of telencephalon
  "FMA83966":"小脑幕", // tentorium cerebelli
  "FMA84054":"神经轴区", // zone of neuraxis
  "FMA84059":"神经轴核复合体", // nuclear complex of neuraxis
  "FMA84081":"松果体", // circumventricular organ of neuraxis
  "FMA84201":"恒切牙", // secondary incisor tooth
  "FMA84203":"恒尖牙", // secondary canine tooth
  "FMA84207":"恒磨牙", // secondary molar tooth
  "FMA84881":"脚间窝", // subdivision of subarachnoid space
  "FMA84926":"脚间窝", // anatomical compartment space
  "FMA84953":"脚间窝", // space of compartment of head
  "FMA85095":"小指固有指掌侧静脉", // proper palmar digital vein of little finger
  "FMA85096":"右示指指掌侧固有静脉", // proper palmar digital vein of right index finger
  "FMA85097":"左示指指掌侧固有静脉", // proper palmar digital vein of left index finger
  "FMA85098":"右中指指掌侧固有静脉", // proper palmar digital vein of right middle finger
  "FMA85099":"左中指指掌侧固有静脉", // proper palmar digital vein of left middle finger
  "FMA85100":"右环指指掌侧固有静脉", // proper palmar digital vein of right ring finger
  "FMA85101":"左环指指掌侧固有静脉", // proper palmar digital vein of left ring finger
  "FMA85102":"右小指指掌侧固有静脉", // proper palmar digital vein of right little finger
  "FMA85103":"左小指指掌侧固有静脉", // proper palmar digital vein of left little finger
  "FMA85107":"第3指掌侧总动脉", // third common palmar digital artery
  "FMA85108":"第4指掌侧总动脉", // fourth common palmar digital artery
  "FMA85109":"第1指掌侧总动脉分支", // branch of first common palmar digital artery
  "FMA85110":"第2指掌侧总动脉分支", // branch of second common palmar digital artery
  "FMA85111":"右中指尺侧指掌侧固有动脉", // medial proper palmar digital artery of middle finger
  "FMA85112":"右中指尺侧指掌侧固有动脉", // medial proper palmar digital artery of right middle finger
  "FMA85114":"环指外侧固有指掌侧动脉", // lateral proper palmar digital artery of ring finger
  "FMA85115":"右环指桡侧指掌侧固有动脉", // lateral proper palmar digital artery of right ring finger
  "FMA85116":"左环指桡侧指掌侧固有动脉", // lateral proper palmar digital artery of left ring finger
  "FMA85117":"第3指掌侧总动脉分支", // branch of third common palmar digital artery
  "FMA85118":"左第1指掌侧总动脉", // left first common palmar digital artery
  "FMA85119":"右第2指掌侧总动脉", // right second common palmar digital artery
  "FMA85120":"左第2指掌侧总动脉", // left second common palmar digital artery
  "FMA85121":"右第3指掌侧总动脉", // right third common palmar digital artery
  "FMA85122":"左第3指掌侧总动脉", // left third common palmar digital artery
  "FMA85123":"右第4指掌侧总动脉", // right fourth common palmar digital artery
  "FMA85124":"左第4指掌侧总动脉", // left fourth common palmar digital artery
  "FMA85453":"肌器官头", // head of muscle organ
  "FMA86020":"颈横动脉分部", // subdivision of transverse cervical artery
  "FMA86033":"小趾对跖肌", // opponens digiti minimi of foot
  "FMA86034":"右足小趾对跖肌", // opponens digiti minimi of right foot
  "FMA86035":"左足小趾对跖肌", // opponens digiti minimi of left foot
  "FMA86103":"器官成分区域", // region of organ component
  "FMA86127":"脉络丛后动脉分支", // branch of posterior choroidal artery
  "FMA86140":"器官段", // organ segment
  "FMA86187":"动脉树器官段", // segment of arterial tree organ
  "FMA86188":"静脉树器官段", // segment of venous tree organ
  "FMA86195":"泪道段", // segment of lacrimal duct
  "FMA86212":"心壁区域", // region of wall of heart
  "FMA86254":"体循环动脉段", // segment of systemic artery
  "FMA86256":"动脉干段", // segment of arterial trunk
  "FMA86340":"右肾动脉上段支", // superior segmental branch of right renal artery
  "FMA86341":"左肾动脉上段支", // superior segmental branch of left renal artery
  "FMA86346":"右肾动脉下段支", // inferior segmental branch of right renal artery
  "FMA86347":"左肾动脉下段支", // inferior segmental branch of left renal artery
  "FMA86348":"右肾动脉后段支", // posterior segmental branch of right renal artery
  "FMA86349":"左肾动脉后段支", // posterior segmental branch of left renal artery
  "FMA86375":"韧带器官成分", // ligament organ component
  "FMA86464":"胼胝体", // corpus callosum
  "FMA86565":"左心室外侧乳头肌前外侧头", // region of papillary muscle of left ventricle
  "FMA86566":"左心室外侧乳头肌前外侧头", // region of lateral papillary muscle of left ventricle
  "FMA87217":"胸降主动脉", // descending thoracic aorta
  "FMA87218":"冠状动脉主干", // trunk of coronary artery
  "FMA222905":"结肠段", // segment of colon
  "FMA223151":"内部灰质成分", // internal gray matter component
  "FMA225818":"眼球壁层区", // region of layer of wall of eyeball
  "FMA228667":"器官部集合", // set of organ parts
  "FMA230984":"小趾中节趾骨", // middle phalanx of little toe
  "FMA230986":"右小趾中节趾骨", // middle phalanx of right little toe
  "FMA230988":"左小趾中节趾骨", // middle phalanx of left little toe
  "FMA241998":"大脑白质", // cerebral white matter
  "FMA242193":"大脑皮质区", // region of cerebral cortex
  "FMA242770":"大脑半球脉络丛", // region of wall of ventricular system of neuraxis
  "FMA242789":"神经轴脑室系统区域", // region of ventricular system of neuraxis
  "FMA256174":"大脑白质区", // region of cerebral white matter
  "FMA256194":"眶回", // orbital gyrus
  "FMA256237":"神经轴段", // segment of neuraxis
  "FMA256693":"丘脑核", // nucleus of thalamus
  "FMA258714":"右丘脑", // right thalamus
  "FMA258716":"左丘脑", // left thalamus
  "FMA258847":"右跟腱", // right calcaneal tendon
  "FMA258850":"右中间腱", // right intermediate tendon
  "FMA260791":"右大脑半球白质", // white matter of right cerebral hemisphere
  "FMA260794":"左大脑半球白质", // white matter of left cerebral hemisphere
  "FMA264844":"左跟腱", // left calcaneal tendon
  "FMA265178":"下肢韧带", // ligament of lower limb
  "FMA265180":"肢韧带", // ligament of limb
  "FMA265400":"眼球血管膜区", // region of vascular layer of eyeball
  "FMA266054":"小脑幕", // subdivision of cranial dura mater
  "FMA268667":"右骨间返动脉", // right recurrent interosseous artery
  "FMA268669":"左骨间返动脉", // left recurrent interosseous artery
  "FMA268712":"胫前动脉段", // segment of anterior tibial artery
  "FMA268955":"乳头肌区", // region of papillary muscle
  "FMA3734":"主动脉", // aorta
  "FMA3862":"左冠状动脉前室间支", // anterior interventricular branch of left coronary artery
  "FMA4717":"右缘静脉", // anterior cardiac venous tree
  "FMA7088":"心脏", // heart
  "FMA7096":"右心房", // right atrium
  "FMA7097":"左心房", // left atrium
  "FMA7098":"右心室", // right ventricle
  "FMA7101":"左心室", // left ventricle
  "FMA7152":"消化道系统", // alimentary system
  "FMA7154":"头", // head
  "FMA7155":"颈", // neck
  "FMA7157":"神经系统", // nervous system
  "FMA7158":"呼吸系统", // respiratory system
  "FMA7159":"泌尿系统", // urinary system
  "FMA7160":"前列腺", // genital system
  "FMA7161":"心血管系统", // cardiovascular system
  "FMA7165":"右半心", // right side of heart
  "FMA7166":"左半心", // left side of heart
  "FMA7181":"躯干", // trunk
  "FMA7184":"下肢", // lower limb
  "FMA7185":"右上肢", // right upper limb
  "FMA7186":"左上肢", // left upper limb
  "FMA7187":"右下肢", // right lower limb
  "FMA7188":"左下肢", // left lower limb
  "FMA7197":"肝", // liver
  "FMA7200":"小肠", // small intestine
  "FMA7201":"大肠", // large intestine
  "FMA7207":"空肠", // jejunum
  "FMA7208":"回肠", // ileum
  "FMA7216":"右室流出道", // outflow part of right ventricle
  "FMA7234":"三尖瓣", // tricuspid valve
  "FMA7235":"二尖瓣", // mitral valve
  "FMA7236":"主动脉瓣", // aortic valve
  "FMA7246":"肺动脉瓣", // pulmonary valve
  "FMA7259":"右室乳头肌", // papillary muscle of right ventricle
  "FMA7309":"右肺", // right lung
  "FMA7310":"左肺", // left lung
  "FMA7333":"右肺上叶", // upper lobe of right lung
  "FMA7337":"右肺下叶", // lower lobe of right lung
  "FMA7338":"右尖段", // right apical bronchopulmonary segment
  "FMA7339":"右后段", // right posterior bronchopulmonary segment
  "FMA7359":"右前段", // right anterior bronchopulmonary segment
  "FMA7360":"内侧段", // medial bronchopulmonary segment
  "FMA7361":"外侧段", // lateral bronchopulmonary segment
  "FMA7362":"右后底段", // right posterior basal bronchopulmonary segment
  "FMA7363":"右外侧底段", // right lateral basal bronchopulmonary segment
  "FMA7364":"右前底段", // right anterior basal bronchopulmonary segment
  "FMA7365":"右内侧底段", // right medial basal bronchopulmonary segment
  "FMA7366":"右上段", // right superior bronchopulmonary segment
  "FMA7370":"左肺上叶", // upper lobe of left lung
  "FMA7371":"左肺下叶", // lower lobe of left lung
  "FMA7372":"尖后段", // apicoposterior bronchopulmonary segment
  "FMA7373":"左前段", // left anterior bronchopulmonary segment
  "FMA7374":"上舌段", // superior lingular bronchopulmonary segment
  "FMA7375":"下舌段", // inferior lingular bronchopulmonary segment
  "FMA7376":"左上段", // left superior bronchopulmonary segment
  "FMA7377":"左内侧底段", // left medial basal bronchopulmonary segment
  "FMA7378":"左前底段", // left anterior basal bronchopulmonary segment
  "FMA7379":"左外侧底段", // left lateral basal bronchopulmonary segment
  "FMA7380":"左后底段", // left posterior basal bronchopulmonary segment
  "FMA7383":"肺中叶", // middle lobe of lung
  "FMA7385":"左尖段", // left apical bronchopulmonary segment
  "FMA7386":"左后段", // left posterior bronchopulmonary segment
  "FMA7393":"气管支气管树", // tracheobronchial tree
  "FMA7395":"右主支气管", // right main bronchus
  "FMA7480":"胸廓", // rib cage
  "FMA7481":"胸部骨骼系统", // skeletal system of thorax
  "FMA7482":"肌肉骨骼系统", // musculoskeletal system
  "FMA7483":"中轴骨骼系统", // axial skeletal system
  "FMA7485":"胸骨", // sternum
  "FMA7563":"身体间室", // body compartment
  "FMA7647":"脊髓中央管", // spinal cord
  "FMA8617":"右尖段动脉", // right apical segmental artery
  "FMA8619":"右后段动脉", // right posterior segmental artery
  "FMA8627":"右上段动脉", // right superior segmental artery
  "FMA8630":"右前底段动脉", // right anterior basal segmental artery
  "FMA8631":"右外底段动脉外侧支", // right lateral basal segmental artery
  "FMA8632":"右后底段动脉", // right posterior basal segmental artery
  "FMA8655":"右肺上叶静脉", // right upper lobar vein
  "FMA8656":"肺中叶静脉", // middle lobar vein
  "FMA8657":"左肺上叶静脉", // left upper lobar vein
  "FMA8658":"肺舌叶静脉", // lingular vein
  "FMA8661":"右尖段静脉", // right apical segmental vein
  "FMA8664":"外侧段静脉", // lateral segmental vein
  "FMA8665":"内侧段静脉", // medial segmental vein
  "FMA8666":"尖后段静脉", // apicoposterior segmental vein
  "FMA8671":"右基底总静脉", // right common basal vein
  "FMA8672":"右上基底静脉", // right superior basal vein
  "FMA8674":"右下基底静脉", // right inferior basal vein
  "FMA8676":"左基底总静脉", // left common basal vein
  "FMA8677":"左上基底静脉", // left superior basal vein
  "FMA8679":"左后底段静脉", // left inferior basal vein
  "FMA9140":"胸部脊柱", // thoracic vertebral column
  "FMA9348":"左室主动脉瓣下纤维幕", // subaortic curtain of left ventricle
  "FMA9352":"左室乳头肌", // papillary muscle of left ventricle
  "FMA9473":"左室流出道", // outflow part of left ventricle
  "FMA9496":"心纤维骨架", // fibrous skeleton of heart
  "FMA9498":"二尖瓣纤维环", // fibrous ring of mitral valve
  "FMA9533":"右室壁", // wall of right ventricle
  "FMA9535":"右室心肌", // myocardium of right ventricle
  "FMA9550":"右房流出道", // outflow part of right atrium
  "FMA9551":"左房流出道", // outflow part of left atrium
  "FMA9552":"右室流入道", // inflow part of right ventricle
  "FMA9553":"右心室前乳头肌", // anterior wall of right ventricle
  "FMA9555":"右心室后乳头肌", // inferior wall of right ventricle
  "FMA9556":"左室壁", // wall of left ventricle
  "FMA9558":"左室心肌", // myocardium of left ventricle
  "FMA9560":"左室前壁", // anterior wall of left ventricle
  "FMA9561":"二尖瓣后叶", // inferior wall of left ventricle
  "FMA9563":"左室外侧壁", // lateral wall of left ventricle
  "FMA9564":"左室流入道", // inflow part of left ventricle
  "FMA9576":"胸部", // thorax
  "FMA9577":"腹部", // abdomen
  "FMA9578":"骨盆", // pelvis
  "FMA9579":"会阴", // perineum
  "FMA9584":"腹膜", // peritoneum
  "FMA9607":"胸腺", // thymus
  "FMA9668":"内分泌系统", // endocrine system
  "FMA9713":"右手", // right hand
  "FMA9714":"左手", // left hand
  "FMA9826":"纵隔", // mediastinum
  "FMA9827":"上纵隔", // superior mediastinum
  "FMA9828":"下纵隔", // inferior mediastinum
  "FMA9838":"前纵隔", // anterior mediastinum
  "FMA9839":"中纵隔", // middle mediastinum
  "FMA9840":"后纵隔", // posterior mediastinum
  "FMA9908":"腹膜囊", // peritoneal sac
  "FMA10427":"体壁", // body wall
  "FMA10428":"胸壁", // thoracic wall
  "FMA10429":"固有腹壁", // wall of abdomen proper
  "FMA10430":"盆壁", // pelvic wall
  "FMA11343":"右足", // right foot
  "FMA11344":"左足", // left foot
  "FMA11345":"右前臂", // right forearm
  "FMA11346":"左前臂", // left forearm
  "FMA12514":"右眼球", // right eyeball
  "FMA12515":"左眼球", // left eyeball
  "FMA13362":"肝右叶", // right lobe of liver
  "FMA13363":"肝左叶", // left lobe of liver
  "FMA13373":"右胸大肌", // right pectoralis major
  "FMA13374":"左胸大肌", // left pectoralis major
  "FMA13478":"脊柱", // vertebral column
  "FMA14541":"回盲交界", // cecum
  "FMA14615":"回盲交界", // wall of small intestine
  "FMA14618":"回盲交界", // wall of ileum
  "FMA14619":"大肠壁", // wall of large intestine
  "FMA14627":"腹前壁", // anterior abdominal wall
  "FMA14628":"腹后壁", // posterior abdominal wall
  "FMA14665":"胆管树", // biliary tree
  "FMA14703":"脏腹膜", // visceral peritoneum
  "FMA14775":"胃十二指肠动脉干", // gastroduodenal artery
  "FMA14778":"肝右动脉", // right hepatic artery
  "FMA14779":"肝左动脉", // left hepatic artery
  "FMA14823":"回结肠动脉下支", // inferior branch of ileocolic artery
  "FMA14971":"大肠肌层", // muscle layer of large intestine
  "FMA15419":"门静脉右支前支", // anterior branch of right portal vein
  "FMA15422":"门静脉右支后支", // posterior branch of right portal vein
  "FMA15427":"门静脉左支内侧支", // medial branch of left portal vein
  "FMA15430":"门静脉左支外侧支", // lateral branch of left portal vein
  "FMA15748":"右半肝前扇区", // anterior sector of right liver
  "FMA15749":"右半肝后扇区", // posterior sector of right liver
  "FMA15750":"左半肝前扇区", // anterior sector of left liver
  "FMA15751":"肝段II", // posterior sector of left liver
  "FMA15809":"右半肝", // right hemiliver
  "FMA15810":"左半肝", // left hemiliver
  "FMA16203":"腰部脊柱", // lumbar vertebral column
  "FMA16580":"骨性骨盆", // bony pelvis
  "FMA16581":"盆带", // pelvic girdle
  "FMA16582":"右髋骨", // right pelvic girdle
  "FMA16583":"左髋骨", // left pelvic girdle
  "FMA17181":"回盲交界", // wall of distal part of ileum
  "FMA20218":"阴毛", // mons pubis
  "FMA20224":"右半肋笼", // right side of rib cage
  "FMA20225":"左半肋笼", // left side of rib cage
  "FMA20226":"右髋骨", // right side of bony pelvis
  "FMA20227":"左髋骨", // left side of bony pelvis
  "FMA20347":"会阴肛部", // anal part of perineum
  "FMA20394":"人体", // human body
  "FMA20796":"右股深动脉", // right deep femoral artery
  "FMA20797":"左股深动脉", // left deep femoral artery
  "FMA22672":"右胸肩峰动脉", // right thoraco-acromial artery
  "FMA22673":"左胸肩峰动脉", // left thoraco-acromial artery
  "FMA23218":"右肩带", // right pectoral girdle
  "FMA23219":"左肩带", // left pectoral girdle
  "FMA23876":"骨骼(活体)", // skeleton (in vivo)
  "FMA23881":"骨骼系统", // skeletal system
  "FMA24138":"颈部脊柱", // cervical vertebral column
  "FMA24163":"右肩带骨骼", // skeleton of right pectoral girdle
  "FMA24164":"左肩带骨骼", // skeleton of left pectoral girdle
  "FMA24189":"颈后部", // back of neck
  "FMA24217":"胸后部", // back of thorax
  "FMA24228":"骶骨", // posterior part of pelvis
  "FMA24728":"面", // face
  "FMA24816":"胸前区", // anterior chest
  "FMA24866":"胸骨部", // sternal part of chest
  "FMA24880":"右游离上肢", // right free upper limb
  "FMA24881":"左游离上肢", // left free upper limb
  "FMA24882":"右游离下肢", // right free lower limb
  "FMA24883":"左游离下肢", // left free lower limb
  "FMA24895":"右上臂", // right arm
  "FMA24896":"左上臂", // left arm
  "FMA24940":"右腕", // right wrist
  "FMA24941":"左腕", // left wrist
  "FMA24965":"右髋骨", // right hip
  "FMA24966":"左髋骨", // left hip
  "FMA24968":"右股骨", // right thigh
  "FMA24969":"左股骨", // left thigh
  "FMA24977":"右髌骨", // right knee
  "FMA24978":"左髌骨", // left knee
  "FMA24980":"右小腿", // right leg
  "FMA24981":"左小腿", // left leg
  "FMA25511":"椎间盘", // intervertebral symphysis
  "FMA25558":"右前锯肌", // right lateral chest wall
  "FMA25559":"左前锯肌", // left lateral chest wall
  "FMA25571":"枢椎椎间盘", // intervertebral symphysis of axis
  "FMA25572":"右骨性肩带", // right bony pectoral girdle
  "FMA25573":"左骨性肩带", // left bony pectoral girdle
  "FMA26078":"第3颈椎椎间盘", // third cervical intervertebral symphysis
  "FMA26083":"第4颈椎椎间盘", // fourth cervical intervertebral symphysis
  "FMA26084":"第5颈椎椎间盘", // fifth cervical intervertebral symphysis
  "FMA26085":"第6颈椎椎间盘", // sixth cervical intervertebral symphysis
  "FMA26086":"第7颈椎椎间盘", // seventh cervical intervertebral symphysis
  "FMA26089":"第1胸椎椎间盘", // first thoracic intervertebral symphysis
  "FMA26094":"第2胸椎椎间盘", // second thoracic intervertebral symphysis
  "FMA26095":"第3胸椎椎间盘", // third thoracic intervertebral symphysis
  "FMA26096":"第4胸椎椎间盘", // fourth thoracic intervertebral symphysis
  "FMA26097":"第5胸椎椎间盘", // fifth thoracic intervertebral symphysis
  "FMA26098":"第6胸椎椎间盘", // sixth thoracic intervertebral symphysis
  "FMA26099":"第7胸椎椎间盘", // seventh thoracic intervertebral symphysis
  "FMA26100":"第8胸椎椎间盘", // eighth thoracic intervertebral symphysis
  "FMA26101":"第9胸椎椎间盘", // ninth thoracic intervertebral symphysis
  "FMA26102":"第10胸椎椎间盘", // tenth thoracic intervertebral symphysis
  "FMA26103":"第11胸椎椎间盘", // eleventh thoracic intervertebral symphysis
  "FMA26105":"第1腰椎椎间盘", // first lumbar intervertebral symphysis
  "FMA26106":"第2腰椎椎间盘", // second lumbar intervertebral symphysis
  "FMA26107":"第3腰椎椎间盘", // third lumbar intervertebral symphysis
  "FMA26108":"第4腰椎椎间盘", // fourth lumbar intervertebral symphysis
  "FMA26109":"第5腰椎椎间盘", // fifth lumbar intervertebral symphysis
  "FMA26572":"气管支气管树胸部", // thoracic part of tracheobronchial tree
  "FMA26661":"右支气管树", // right bronchial tree
  "FMA26662":"左支气管树", // left bronchial tree
  "FMA31741":"右支气管树中叶部", // middle lobe part of right bronchial tree
  "FMA31744":"右支气管树上叶部", // upper lobe part of right bronchial tree
  "FMA31746":"左支气管树上叶部", // upper lobe part of left bronchial tree
  "FMA31747":"右支气管树下叶部", // lower lobe part of right bronchial tree
  "FMA31748":"左支气管树下叶部", // lower lobe part of left bronchial tree
  "FMA33642":"右肩", // right shoulder
  "FMA33644":"右肩带胸部", // pectoral part of right pectoral girdle
  "FMA33645":"左肩带胸部", // pectoral part of left pectoral girdle
  "FMA33646":"右肩带肩胛部", // scapular part of right pectoral girdle
  "FMA33647":"左肩带肩胛部", // scapular part of left pectoral girdle
  "FMA45621":"肺血管系统", // pulmonary vascular system
  "FMA45623":"体循环动脉系统", // systemic arterial system
  "FMA45626":"体循环静脉系统", // systemic venous system
  "FMA45628":"门静脉系统", // portal venous system
  "FMA45659":"下尿路", // lower urinary tract
  "FMA45662":"下呼吸道", // lower respiratory tract
  "FMA45842":"肺动脉树", // pulmonary arterial tree
  "FMA45847":"门静脉树", // portal venous tree
  "FMA46448":"额部", // frontal part of head
  "FMA46472":"鼻", // nose
  "FMA46565":"颅骨", // skull
  "FMA49177":"上消化道", // upper gastrointestinal tract
  "FMA49179":"下消化道", // lower gastrointestinal tract
  "FMA49184":"口腔", // mouth
  "FMA49187":"枕骨", // occipital part of head
  "FMA49207":"右室流入道壁", // wall of inflow part of right ventricle
  "FMA49214":"左室流入道壁", // wall of inflow part of left ventricle
  "FMA49894":"体循环动脉树", // systemic arterial tree
  "FMA50039":"右冠状动脉", // right coronary artery
  "FMA50040":"左冠状动脉", // left coronary artery
  "FMA50060":"胸壁", // chest wall
  "FMA50061":"胸壁浅层", // superficial chest wall
  "FMA50063":"胸前壁浅层", // anterior superficial chest wall
  "FMA50071":"右前锯肌", // right lateral superficial chest wall
  "FMA50072":"左前锯肌", // left lateral superficial chest wall
  "FMA50082":"右大脑中动脉", // right middle cerebral artery
  "FMA50308":"冠状窦树", // coronary sinus tree
  "FMA50454":"大脑动脉环", // cerebral arterial circle
  "FMA50561":"右脑桥动脉", // right pontine artery
  "FMA50562":"左脑桥动脉", // left pontine artery
  "FMA50584":"右大脑后动脉", // right posterior cerebral artery
  "FMA50585":"左大脑后动脉", // left posterior cerebral artery
  "FMA50658":"右脉络膜后内侧动脉", // right posterior choroidal artery
  "FMA50659":"左脉络膜后内侧动脉", // left posterior choroidal artery
  "FMA50801":"脑", // brain
  "FMA51044":"右髂胫束", // fascia lata of right thigh
  "FMA51045":"左髂胫束", // fascia lata of left thigh
  "FMA52801":"筛骨", // basicranium
  "FMA53082":"右眶", // right orbit
  "FMA53083":"左眶", // left orbit
  "FMA53637":"右颧骨", // right cheek
  "FMA53638":"左颧骨", // left cheek
  "FMA53672":"神经颅", // neurocranium
  "FMA53673":"面颅", // viscerocranium
  "FMA54375":"鼻中隔", // nasal septum
  "FMA54397":"上颌牙龈", // upper jaw
  "FMA54398":"下颌骨", // lower jaw
  "FMA54440":"右上睑", // right upper eyelid
  "FMA54441":"左上睑", // left upper eyelid
  "FMA54443":"右下睑睑板", // right lower eyelid
  "FMA54444":"左下睑睑板", // left lower eyelid
  "FMA54449":"右眼", // right eye
  "FMA54450":"左眼", // left eye
  "FMA54545":"头本部", // head proper
  "FMA54667":"右眶筋膜间室", // right orbital compartment
  "FMA54668":"左眶筋膜间室", // left orbital compartment
  "FMA55021":"软腭", // soft palate
  "FMA55022":"腭垂肌", // uvula
  "FMA55675":"神经轴", // neuraxis
  "FMA58099":"右眼球壁", // wall of right eyeball
  "FMA58100":"左眼球壁", // wall of left eyeball
  "FMA58105":"右眼球纤维膜", // fibrous layer of right eyeball
  "FMA58106":"左眼球纤维膜", // fibrous layer of left eyeball
  "FMA58107":"右眼球血管膜", // vascular layer of right eyeball
  "FMA58108":"左眼球血管膜", // vascular layer of left eyeball
  "FMA58401":"右屈肌支持带", // investing fascia of right upper limb
  "FMA58405":"右屈肌支持带", // investing fascia of right free upper limb
  "FMA58406":"左屈肌支持带", // investing fascia of left free upper limb
  "FMA58418":"右髂胫束", // investing fascia of right lower limb
  "FMA58419":"左髂胫束", // investing fascia of left lower limb
  "FMA58429":"右髂胫束", // investing fascia of right free lower limb
  "FMA58430":"左髂胫束", // investing fascia of left free lower limb
  "FMA58448":"右屈肌支持带", // investing fascia of right wrist
  "FMA58449":"左屈肌支持带", // investing fascia of left wrist
  "FMA58575":"右屈肌支持带", // investing fascia of right forearm
  "FMA58576":"左屈肌支持带", // investing fascia of left forearm
  "FMA58742":"右髂胫束", // investing fascia of right thigh
  "FMA58743":"左髂胫束", // investing fascia of left thigh
  "FMA59368":"右泪器", // right lacrimal apparatus
  "FMA59369":"左泪器", // left lacrimal apparatus
  "FMA59398":"口下颌部", // mandibular part of mouth
  "FMA59399":"上颌牙龈", // maxillary part of mouth
  "FMA59515":"外鼻", // external nose
  "FMA59516":"鼻根", // root of nose
  "FMA59517":"鼻背", // dorsum of nose
  "FMA59538":"鼻软骨性骨架", // cartilaginous skeleton of nose
  "FMA59637":"固有鼻腔", // internal nose
  "FMA59654":"鼻骨性骨架", // osseous skeleton of nose
  "FMA59655":"外鼻骨性骨架", // osseous skeleton of external nose
  "FMA59656":"内鼻骨性骨架", // osseous skeleton of internal nose
  "FMA59665":"犁骨", // septum of internal nose
  "FMA59668":"鼻腔壁", // wall of internal nose
  "FMA59671":"右下鼻甲", // right lateral wall of internal nose
  "FMA59672":"左下鼻甲", // left lateral wall of internal nose
  "FMA59748":"右固有鼻腔", // right side of internal nose
  "FMA59749":"左固有鼻腔", // left side of internal nose
  "FMA59754":"右鼻腔壁", // wall of right side of internal nose
  "FMA59755":"左鼻腔壁", // wall of left side of internal nose
  "FMA59836":"外鼻软骨性骨架", // cartilaginous skeleton of external nose
  "FMA59837":"犁骨", // bony part of nasal septum
  "FMA59838":"鼻中隔软骨", // cartilaginous part of nasal septum
  "FMA59992":"腭垂肌", // faucial part of mouth
  "FMA60116":"鼻骨架", // nasal skeleton
  "FMA60118":"鼻中隔骨架", // skeleton of nasal septum
  "FMA60325":"右拇指", // right thumb
  "FMA60326":"左拇指", // left thumb
  "FMA60327":"右小指", // right little finger
  "FMA60328":"左小指", // left little finger
  "FMA60329":"右环指", // right ring finger
  "FMA60330":"左环指", // left ring finger
  "FMA60331":"右中指", // right middle finger
  "FMA60332":"左中指", // left middle finger
  "FMA60333":"右示指", // right index finger
  "FMA60334":"左示指", // left index finger
  "FMA60335":"右拇趾", // right big toe
  "FMA60336":"左拇趾", // left big toe
  "FMA60337":"右第2趾", // right second toe
  "FMA60338":"左第2趾", // left second toe
  "FMA60339":"右第3趾", // right third toe
  "FMA60340":"左第3趾", // left third toe
  "FMA60341":"右第4趾", // right fourth toe
  "FMA60342":"左第4趾", // left fourth toe
  "FMA60343":"右小趾", // right little toe
  "FMA60344":"左小趾", // left little toe
  "FMA61064":"右泪道", // right lacrimal duct
  "FMA61065":"左泪道", // left lacrimal duct
  "FMA61068":"右手本部", // right hand proper
  "FMA61069":"左手本部", // left hand proper
  "FMA61472":"右胸前区", // right pectoral part of chest
  "FMA61473":"左胸前区", // left pectoral part of chest
  "FMA61670":"下颌骨", // skeleton of mouth
  "FMA61680":"固有腹部", // abdomen proper
  "FMA61681":"腹后部", // back of abdomen
  "FMA61732":"头部右顶部", // right parietal part of head
  "FMA61733":"头部左顶部", // left parietal part of head
  "FMA61819":"左大脑半球", // left cerebral hemisphere
  "FMA61991":"右大脑中动脉蝶部", // trunk of right middle cerebral artery
  "FMA61992":"前脑", // forebrain
  "FMA62000":"端脑", // telencephalon
  "FMA62001":"间脑", // diencephalon
  "FMA62003":"后脑", // metencephalon
  "FMA62009":"上丘脑", // epithalamus
  "FMA62028":"灰结节", // intermediate hypothalamic region
  "FMA67292":"右大脑半球", // right cerebral hemisphere
  "FMA67687":"菱脑", // hindbrain
  "FMA67994":"右肺动脉肺内段", // intrapulmonary part of right pulmonary artery
  "FMA67995":"左肺动脉肺内段", // intrapulmonary part of left pulmonary artery
  "FMA68002":"右肺上静脉肺内段", // intrapulmonary part of right superior pulmonary vein
  "FMA68003":"右肺下静脉肺内段", // intrapulmonary part of right inferior pulmonary vein
  "FMA68004":"左肺上静脉肺内段", // intrapulmonary part of left superior pulmonary vein
  "FMA68005":"左肺下静脉肺内段", // intrapulmonary part of left inferior pulmonary vein
  "FMA68016":"肝内胆管树", // intrahepatic biliary tree
  "FMA68193":"内侧段动脉", // medial segmental artery
  "FMA68194":"外侧段动脉", // lateral segmental artery
  "FMA68196":"肺中叶动脉", // middle lobar artery
  "FMA68198":"左肺上叶动脉", // left upper lobar artery
  "FMA68200":"右肺下叶动脉", // right lower lobar artery
  "FMA68201":"左肺下叶动脉", // left lower lobar artery
  "FMA68317":"左前段支气管树", // superior division of upper lobe part of left bronchial tree
  "FMA68318":"左支气管树上叶部下干", // inferior division of upper lobe part of left bronchial tree
  "FMA68319":"右支气管树内下部", // inferomedial part of right bronchial tree
  "FMA68658":"右肺动脉内下支", // inferomedial branch of right pulmonary artery
  "FMA68659":"右肺上叶动脉尖后支", // apicoposterior division of right upper lobar artery
  "FMA68843":"前内侧底段动脉", // antero-medial basal segmental artery
  "FMA68845":"右基底段动脉", // right basal segmental artery
  "FMA68846":"左基底段动脉", // left basal segmental artery
  "FMA69566":"右足底弓", // trunk of right lateral plantar artery
  "FMA69567":"左足底弓", // trunk of left lateral plantar artery
  "FMA70347":"右甲状颈干", // right thyrocervical artery
  "FMA70348":"左甲状颈干", // left thyrocervical artery
  "FMA70351":"右肋颈干", // right costocervical artery
  "FMA70352":"左肋颈干", // left costocervical artery
  "FMA70441":"肝前段动脉", // anterior segmental hepatic artery
  "FMA70444":"肝后段动脉", // posterior segmental hepatic artery
  "FMA70448":"肝内侧段动脉", // medial segmental hepatic artery
  "FMA70451":"肝外侧段动脉", // lateral segmental hepatic artery
  "FMA71102":"右上尿路", // right upper urinary tract
  "FMA71103":"左上尿路", // left upper urinary tract
  "FMA71132":"胃肠道", // gastrointestinal tract
  "FMA71221":"中轴骨", // axial skeleton
  "FMA71857":"肝右胆管树", // right hepatic biliary tree
  "FMA71858":"肝左胆管树", // left hepatic biliary tree
  "FMA71861":"右肝胆管树前属支", // anterior tributary of right hepatic biliary tree
  "FMA71862":"右肝胆管树后属支", // posterior tributary of right hepatic biliary tree
  "FMA71863":"左肝胆管树外侧属支", // lateral tributary of left hepatic biliary tree
  "FMA71864":"左肝胆管树内侧属支", // medial tributary of left hepatic biliary tree
  "FMA71891":"肝胆管树", // hepatic biliary tree
  "FMA72062":"骨盆骨架", // pelvic skeleton
  "FMA72063":"颈椎集合", // set of cervical vertebrae
  "FMA72064":"胸椎集合", // set of thoracic vertebrae
  "FMA72065":"腰椎集合", // set of lumbar vertebrae
  "FMA72952":"右眼眶部", // orbital part of right eye
  "FMA72953":"左眼眶部", // orbital part of left eye
  "FMA72969":"右额叶", // right frontal lobe
  "FMA72970":"左额叶", // left frontal lobe
  "FMA72971":"右颞叶", // right temporal lobe
  "FMA72972":"左颞叶", // left temporal lobe
  "FMA72973":"右顶叶", // right parietal lobe
  "FMA72974":"左顶叶", // left parietal lobe
  "FMA72979":"皮肤", // integumentary system
  "FMA72980":"右边缘叶", // right limbic lobe
  "FMA72981":"左边缘叶", // left limbic lobe
  "FMA73055":"右髌骨", // anterior part of right knee
  "FMA73056":"左髌骨", // anterior part of left knee
  "FMA73086":"右足本部", // right foot proper
  "FMA73087":"左足本部", // left foot proper
  "FMA73103":"胸后壁", // posterior thoracic wall
  "FMA73703":"右半心壁", // wall of right side of heart
  "FMA73704":"左半心壁", // wall of left side of heart
  "FMA74657":"皮肤", // integument
  "FMA75007":"脊髓中央管", // cavity of neuraxis
  "FMA78435":"腹前壁肌群", // musculature of anterior abdominal wall
  "FMA79063":"深筋膜系统", // deep fascial system
  "FMA79065":"右髌骨", // patellar part of right knee
  "FMA79066":"左髌骨", // patellar part of left knee
  "FMA79181":"右手本部骨骼", // skeleton of right hand proper
  "FMA79182":"左手本部骨骼", // skeleton of left hand proper
  "FMA79269":"胸腔内容物", // content of thorax
  "FMA79273":"纵隔内容物", // content of mediastinum
  "FMA79274":"上纵隔内容物", // content of superior mediastinum
  "FMA79275":"下纵隔内容物", // content of inferior mediastinum
  "FMA79276":"前纵隔内容物", // content of anterior mediastinum
  "FMA79277":"后纵隔内容物", // content of posterior mediastinum
  "FMA79278":"中纵隔内容物", // content of middle mediastinum
  "FMA79876":"脑干", // brainstem
  "FMA82672":"体循环上静脉树", // superior systemic venous tree
  "FMA82673":"体循环下静脉树", // inferior systemic venous tree
  "FMA83447":"右室本部心肌", // myocardium of right ventricle proper
  "FMA83448":"左室本部心肌", // myocardium of left ventricle proper
  "FMA83902":"中脑顶盖", // midbrain tectum
  "FMA84842":"右室游离壁", // free wall of right ventricle
  "FMA84850":"左室游离壁", // free wall of left ventricle
  "FMA84856":"右室心肌心内膜下层", // subendocardial layer of myocardium of right ventricle
  "FMA84857":"左室心肌心内膜下层", // subendocardial layer of myocardium of left ventricle
  "FMA84931":"右室游离壁心肌", // myocardium of free wall of right ventricle
  "FMA84932":"左室游离壁心肌", // myocardium of free wall of left ventricle
  "FMA85008":"胸廓间室", // compartment of thorax
  "FMA85031":"腹主动脉", // compartment of abdomen
  "FMA85055":"右肺胸膜间室", // right pulmopleural compartment
  "FMA85056":"左肺胸膜间室", // left pulmopleural compartment
  "FMA86056":"二尖瓣后叶", // myocardial zone 4
  "FMA86063":"心肌11区", // myocardial zone 11
  "FMA86064":"左心室外侧乳头肌前外侧头", // myocardial zone 12
  "FMA86917":"腹肌系", // musculature of abdomen
  "FMA87178":"左室外侧壁心肌", // myocardium of lateral wall of left ventricle
  "FMA87179":"二尖瓣后叶", // myocardium of inferior wall of left ventricle
  "FMA87542":"胸前壁", // anterior thoracic wall
  "FMA87543":"胸前壁", // anterior chest wall
  "FMA87552":"胸后区", // posterior chest
  "FMA87598":"躯干骨骼系统", // skeletal system of trunk
  "FMA228642":"全身血管系统", // vasculature of body
  "FMA231424":"身体本部", // body proper
  "FMA242180":"右大脑半球皮质", // cortex of right cerebral hemisphere
  "FMA242182":"左大脑半球皮质", // cortex of left cerebral hemisphere
  "FMA242184":"右大脑半球皮质下", // subcortex of right cerebral hemisphere
  "FMA242186":"左大脑半球皮质下", // subcortex of left cerebral hemisphere
  "FMA242207":"右额叶皮质", // cortex of right frontal lobe
  "FMA242209":"左额叶皮质", // cortex of left frontal lobe
  "FMA242609":"右海马", // right archicortex
  "FMA242611":"左海马", // left archicortex
  "FMA242625":"右前额叶皮质", // right prefrontal cortex
  "FMA242627":"左前额叶皮质", // left prefrontal cortex
  "FMA242675":"神经轴脑室系统", // ventricular system of neuraxis
  "FMA242787":"脑室系统", // ventricular system of brain
  "FMA259054":"腹壁", // wall of abdomen
  "FMA259209":"躯干胸段", // thoracic segment of trunk
  "FMA259211":"躯干腹段", // abdominal segment of trunk
  "FMA259248":"腹主动脉", // content of abdomen
  "FMA260124":"右眶内容物", // right orbital content
  "FMA260127":"左眶内容物", // left orbital content
  "FMA260456":"体腔内容物", // body cavity content
  "FMA261139":"右海马", // right hippocampal formation
  "FMA261141":"左海马", // left hippocampal formation
  "FMA265130":"呼吸道", // respiratory tract
  "FMA265228":"胰胆系统", // pancreaticobiliary system
  "FMA270201":"颅底部分", // basicranial part of head proper

};
