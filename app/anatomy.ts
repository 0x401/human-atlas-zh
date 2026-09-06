export type SystemId = 'skeletal'|'muscular'|'arterial'|'venous'|'nervous'|'digestive'|'respiratory'|'urinary'|'reproductive'|'lymphatic'|'endocrine'|'integumentary'|'connective'|'sensory'|'cardiac';
import {LOCALE} from './i18n';
const SYSTEMS_BASE: {id:SystemId;name:string;color:string;description:string}[] = [
 {id:'skeletal',name:'Skeleton',color:'#e2d9ba',description:'Bones form the supporting framework of the body, protect organs, and provide attachment points for muscles. Their internal tissue also stores minerals and produces blood cells.'},
 {id:'muscular',name:'Muscles',color:'#a85b50',description:'Skeletal muscles generate movement by pulling on their attachments. Together with tendons, they move joints, stabilize posture, and produce heat.'},
 {id:'cardiac',name:'Heart',color:'#b96760',description:'The heart is a muscular pump with four chambers. Its valves direct blood forward through the pulmonary and systemic circuits.'},
 {id:'sensory',name:'Sensory organs',color:'#b0c8ce',description:'These structures contribute to special senses, including sight, hearing, and balance. Their specialized tissues detect stimuli and work with the nervous system to convey information.'},
 {id:'arterial',name:'Arteries',color:'#c05245',description:'The heart drives blood through the circulation. Arteries carry blood away from the heart to supply tissues or, in the pulmonary circuit, to the lungs.'},
 {id:'venous',name:'Veins',color:'#527c9f',description:'Veins return blood toward the heart. Superficial and deep networks collect blood from the tissues; the pulmonary veins bring oxygenated blood back from the lungs.'},
 {id:'nervous',name:'Nervous system',color:'#d8b565',description:'The brain, spinal cord, and peripheral nerves carry and process signals. They support sensation, movement, coordination, and automatic regulation of body functions.'},
 {id:'respiratory',name:'Respiratory',color:'#b98991',description:'The airways conduct air to the lungs, where oxygen and carbon dioxide move between air and blood. Breathing depends on pressure changes produced by respiratory muscles.'},
 {id:'digestive',name:'Digestive',color:'#b8916b',description:'The digestive tract breaks down food, absorbs nutrients and water, and moves waste onward. Accessory organs contribute bile and digestive enzymes.'},
 {id:'urinary',name:'Urinary',color:'#b47961',description:'The kidneys filter blood and regulate fluid, electrolyte, and acid–base balance. Urine travels through the ureters to the bladder and exits through the urethra.'},
 {id:'lymphatic',name:'Lymphatic',color:'#879f7c',description:'Lymphatic vessels return excess tissue fluid to the circulation. Lymph nodes and other lymphoid organs support immune surveillance and responses.'},
 {id:'endocrine',name:'Endocrine',color:'#c5a09a',description:'Endocrine organs release hormones into the blood to coordinate processes such as metabolism, growth, stress responses, and reproduction.'},
 {id:'reproductive',name:'Reproductive',color:'#bda098',description:'The male reproductive structures represented here contribute to sperm production, maturation, transport, and the production of sex hormones.'},
 {id:'integumentary',name:'Body surface',color:'#ba9b7d',description:'The body surface provides an outer anatomical reference. The integumentary system forms a protective barrier and contributes to sensation and temperature regulation.'},
 {id:'connective',name:'Connective tissue',color:'#aec3bb',description:'Cartilage, ligaments, and other connective tissues support, connect, and separate structures. Their roles include stabilizing joints and distributing mechanical loads.'},
];
const SYSTEMS_ZH: Record<SystemId,{name:string;description:string}> = {
 skeletal:{name:'骨骼',description:'骨构成人体的支撑框架，保护内脏器官，并为肌肉提供附着点；骨组织还储存矿物质并生成血细胞。'},
 muscular:{name:'肌肉',description:'骨骼肌通过牵拉其附着点产生运动。它们与肌腱协同使关节活动、维持姿势并产生热量。'},
 cardiac:{name:'心脏',description:'心脏是具有四个腔室的肌性泵，其瓣膜引导血液沿肺循环与体循环单向向前流动。'},
 sensory:{name:'感觉器',description:'这些结构参与视觉、听觉和平衡等特殊感觉；其特化组织感受刺激，并与神经系统协同传递信息。'},
 arterial:{name:'动脉',description:'心脏推动血液在循环系统中流动。动脉把血液从心脏输送到各组织，或在肺循环中将血液送至肺。'},
 venous:{name:'静脉',description:'静脉将血液送回心脏。浅、深静脉网收集组织回流的血液，肺静脉则把肺内氧合的血液运回心脏。'},
 nervous:{name:'神经系统',description:'脑、脊髓和周围神经负责传导与处理信号，支撑感觉、运动、协调以及机体功能的自主调节。'},
 respiratory:{name:'呼吸系统',description:'呼吸道将空气导入肺内，氧气与二氧化碳在肺中于空气和血液之间交换；呼吸依赖于呼吸肌产生的压力变化。'},
 digestive:{name:'消化系统',description:'消化管负责分解食物、吸收营养物质和水分，并推送残渣继续前行；附属器官提供胆汁与消化酶。'},
 urinary:{name:'泌尿系统',description:'肾脏过滤血液，调节体液、电解质和酸碱平衡；尿液经输尿管进入膀胱，再经尿道排出体外。'},
 lymphatic:{name:'淋巴系统',description:'淋巴管将多余的组织液送回血液循环；淋巴结和其他淋巴器官承担免疫监视与免疫应答。'},
 endocrine:{name:'内分泌系统',description:'内分泌器官将激素释放入血，以协调整合新陈代谢、生长、应激反应和生殖等过程。'},
 reproductive:{name:'生殖系统',description:'此处呈现的男性生殖结构参与精子的生成、成熟与运输，并产生性激素。'},
 integumentary:{name:'体表',description:'体表提供人体外部的形态参照。皮肤及其附属结构构成保护屏障，并参与感觉与体温调节。'},
 connective:{name:'结缔组织',description:'软骨、韧带及其他结缔组织起支持、连接和分隔结构的作用，包括稳定关节和分散机械负荷。'},
};
export const SYSTEMS = LOCALE==='zh' ? SYSTEMS_BASE.map(s=>({...s,...SYSTEMS_ZH[s.id]})) : SYSTEMS_BASE;
export interface Part {id:string;name:string;conceptId:string;system:SystemId;chunk:number;positions:number;normals:number;indices:number;vertexCount:number;indexCount:number;bounds:[number[],number[]]}
export interface Concept {id:string;name:string;elements:string[]}
export interface Atlas {version:string;sex?:'male';source?:string;scope?:string;parts:Part[];concepts:Concept[];chunks:{url:string;bytes:number;gzip?:string;gzipBytes?:number}[];triangles:number}
export type View = 'three-quarter'|'front'|'back'|'side';
export interface SceneState {inspectorOpen?:boolean;explode:number;visible:SystemId[];selected:string[];isolate:boolean;view:View;rotate:boolean;reset:number}
export const DEFAULT_VISIBLE:SystemId[] = ['cardiac','sensory','skeletal','muscular','arterial','venous','nervous','respiratory','digestive','urinary','lymphatic','endocrine','reproductive','connective'];
const EXPLANATIONS_EN:Record<string,string> = {
 'heart':'A muscular pump in the chest. Its right side sends blood to the lungs; its left side sends blood through the systemic circulation.',
 'liver':'A large organ beneath the right side of the diaphragm. It processes absorbed nutrients, produces bile, and synthesizes many proteins carried in the blood.',
 'brain':'The central organ of the nervous system. Its interconnected regions support perception, movement, memory, language, and the regulation of bodily functions.',
 'stomach':'A muscular chamber between the esophagus and small intestine. It stores and mixes food with acid and enzymes before releasing it into the duodenum.',
 'spleen':'A lymphoid organ in the upper left abdomen. It filters blood, removes aging blood cells, and participates in immune responses.',
 'pancreas':'An abdominal organ with digestive and endocrine roles. It supplies enzymes to the small intestine and releases hormones including insulin and glucagon.',
 'urinary bladder':'A muscular reservoir in the pelvis that stores urine arriving from the kidneys through the ureters.',
 'trachea':'The main airway connecting the larynx to the bronchi. Its cartilage supports keep the airway open during breathing.',
 'diaphragm':'A broad muscle separating the chest and abdomen. When it contracts, it increases chest volume and helps draw air into the lungs.',
};
const EXPLANATIONS_ZH:Record<string,string> = {
 'heart':'位于胸腔内的肌性泵。右半心将血液送入肺，左半心则将血液射入体循环。',
 'liver':'位于膈右侧下方的大器官。它处理吸收的营养物质、生成胆汁，并合成多种随血液运输的蛋白质。',
 'brain':'神经系统的中枢器官。其相互连通的各区域支撑感知、运动、记忆、语言以及机体功能的调节。',
 'stomach':'位于食管与小肠之间的肌性囊腔。它储存食物并使其与胃酸和消化酶混合，随后排入十二指肠。',
 'spleen':'位于左上腹的淋巴器官。它过滤血液、清除衰老的血细胞，并参与免疫应答。',
 'pancreas':'兼有消化与内分泌功能的腹腔器官。它向小肠提供消化酶，并分泌包括胰岛素和胰高血糖素在内的激素。',
 'urinary bladder':'位于骨盆内的肌性储尿器官，储存由肾脏经输尿管送来的尿液。',
 'trachea':'连接喉与支气管的主气道，其软骨支架在呼吸时保持气道通畅。',
 'diaphragm':'分隔胸腔与腹腔的宽阔扁肌。收缩时增大胸廓容积，有助于将空气吸入肺内。',
};
// Chinese part names stand in for these English keys when the translated catalogue is loaded.
for(const [zh,en] of [['胃','stomach'],['脾','spleen'],['胰','pancreas'],['膀胱','urinary bladder'],['气管','trachea'],['膈','diaphragm']] as const) EXPLANATIONS_ZH[zh]=EXPLANATIONS_ZH[en];
export const EXPLANATIONS:Record<string,string> = LOCALE==='zh' ? {...EXPLANATIONS_EN,...EXPLANATIONS_ZH} : EXPLANATIONS_EN;
export function explanation(name:string,system:SystemId){return EXPLANATIONS[name.toLowerCase()] ?? SYSTEMS.find(s=>s.id===system)?.description ?? '';}
