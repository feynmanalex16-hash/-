export enum AnimalType {
  LION = 'LION',
  OWL = 'OWL',
  BADGER = 'BADGER',
  SNAKE = 'SNAKE',
  WOLF = 'WOLF',
  DOLPHIN = 'DOLPHIN',
  ELEPHANT = 'ELEPHANT',
  FOX = 'FOX',
  DRAGON = 'DRAGON',
  PEACOCK = 'PEACOCK',
  TIGER = 'TIGER',
  PANDA = 'PANDA'
}

// 定义基准维度
export enum Dimension {
  ENERGY = 'ENERGY',     // 能量/行动力 (Lion(+)/Badger(-))
  LOGIC = 'LOGIC',       // 逻辑/智慧 (Owl(+)/Snake(-))
  SOCIAL = 'SOCIAL',     // 社交/关系 (Dolphin(+)/Wolf(-))
  ADAPT = 'ADAPT'        // 适应/多变 (Fox(+)/Elephant(-))
}

export const questions = [
  {
    id: 1,
    question: "在潜意识的荒野中，你面对一条分岔路口，你最先注意到的是：",
    options: [
      { text: "那条最陡峭、充满挑战的山脊之路", dimension: Dimension.ENERGY, value: 1 },
      { text: "那条通往图书馆旧址、布满古籍残页的幽径", dimension: Dimension.LOGIC, value: 1 },
      { text: "那条通往炊烟袅袅的村庄、充满生活气息的小道", dimension: Dimension.SOCIAL, value: 1 },
      { text: "那条在阴影中穿梭、最能隐匿行踪的秘道", dimension: Dimension.ADAPT, value: 1 }
    ]
  },
  {
    id: 2,
    question: "如果要在项链上挂一个护身符，你会选择：",
    options: [
      { text: "烈火锻造的黄金狮首，象征不灭的勇气", dimension: Dimension.ENERGY, value: 1 },
      { text: "在极地星光下观察世界的银色羽毛", dimension: Dimension.LOGIC, value: 1 },
      { text: "捕捉到了海浪动感的湛蓝色气泡吊坠", dimension: Dimension.SOCIAL, value: 1 },
      { text: "小巧灵活、色泽灵动的琥珀尾巴造型", dimension: Dimension.ADAPT, value: 1 }
    ]
  },
  {
    id: 3,
    question: "当你面对一个未知的巨大挑战时，你的第一反应是：",
    options: [
      { text: "燃起战斗的本能，坚信自己能正面击碎它", dimension: Dimension.ENERGY, value: 1 },
      { text: "启动逻辑分析，寻找支撑这个挑战的底层架构", dimension: Dimension.LOGIC, value: 1 },
      { text: "联络所有能帮上忙的朋友，团结就是力量", dimension: Dimension.SOCIAL, value: 1 },
      { text: "权衡获利与风险，评估是否值得付出巨大代价", dimension: Dimension.ADAPT, value: 1 }
    ]
  },
  {
    id: 4,
    question: "如果可以拥有一个专属空间，你希望它是什么样子的？",
    options: [
      { text: "充满阳光和奖杯、宽阔大气的大厅", dimension: Dimension.ENERGY, value: 1 },
      { text: "堆满绝版藏书、透着墨水香气的塔楼顶端", dimension: Dimension.LOGIC, value: 1 },
      { text: "通透明亮、充满欢笑和艺术气息的开放露台", dimension: Dimension.SOCIAL, value: 1 },
      { text: "充满了机关暗格、布局精妙且灵活多变的小屋", dimension: Dimension.ADAPT, value: 1 }
    ]
  },
  {
    id: 5,
    question: "你认为最能代表你核心竞争力的词是：",
    options: [
      { text: "无畏：即使前方是深渊，我也敢纵身一试", dimension: Dimension.ENERGY, value: 1 },
      { text: "先知：在混乱中识别模式，预见未来的走向", dimension: Dimension.LOGIC, value: 1 },
      { text: "同理：我能与任何生命共振，并创造和谐的链接", dimension: Dimension.SOCIAL, value: 1 },
      { text: "变化：我没有固定的形态，所以能适应任何环境", dimension: Dimension.ADAPT, value: 1 }
    ]
  },
  {
    id: 6,
    question: "当你在深夜的旅途中迷路，且风暴即将来临，你会：",
    options: [
      { text: "加快脚步，凭直觉和体力在暴雨前冲出这片区域", dimension: Dimension.ENERGY, value: 2 },
      { text: "寻找高地，利用星象或地形规律推算出口方向", dimension: Dimension.LOGIC, value: 2 },
      { text: "寻找最近的火光，祈祷能遇到热心的旅人共同避难", dimension: Dimension.SOCIAL, value: 2 },
      { text: "观察风向和兽迹，寻找一个最隐蔽且干燥的岩洞暂时蛰伏", dimension: Dimension.ADAPT, value: 2 }
    ]
  },
  {
    id: 7,
    question: "如果你可以继承一份上古的遗产，你最希望那是：",
    options: [
      { text: "一个能赋予持有者统御众生之威严的权杖", dimension: Dimension.ENERGY, value: 1 },
      { text: "一面能映照万物本源、看透一切伪装的镜子", dimension: Dimension.LOGIC, value: 1 },
      { text: "一个能源源不断产生美酒，供所有人分享的金杯", dimension: Dimension.SOCIAL, value: 1 },
      { text: "一套能让你在任何复杂地形中如履平地的靴子", dimension: Dimension.ADAPT, value: 1 }
    ]
  },
  {
    id: 8,
    question: "在一场关乎胜负的较量中，你发现对手使用了不光彩的手段，你会：",
    options: [
      { text: "以牙还牙，用更强的力量在正面击垮对方", dimension: Dimension.ENERGY, value: 1 },
      { text: "冷静记录证据，在规则允许的范围内将其彻底击败", dimension: Dimension.LOGIC, value: 2 },
      { text: "揭露对方的行为，调动围观者的正义感让其自食其果", dimension: Dimension.SOCIAL, value: 1 },
      { text: "顺势而为，利用对方的诡计反向设陷，诱导其自毁", dimension: Dimension.ADAPT, value: 1 }
    ]
  },
  {
    id: 9,
    question: "你最害怕被别人看作是一个：",
    options: [
      { text: "软弱无能、在关键时刻不敢挺身而出的胆小鬼", dimension: Dimension.ENERGY, value: 2 },
      { text: "愚蠢庸俗、无法理解世界运行机制的平庸之辈", dimension: Dimension.LOGIC, value: 1 },
      { text: "冷酷排外、被所有人放逐且无家可归的孤岛", dimension: Dimension.SOCIAL, value: 2 },
      { text: "呆板僵化、无法察觉到时代变迁而被淘汰的古董", dimension: Dimension.ADAPT, value: 1 }
    ]
  },
  {
    id: 10,
    question: "当你漫步在梦境的边缘，你最向往的景色是：",
    options: [
      { text: "屹立在狂风中、俯瞰万里的巅峰灯塔", dimension: Dimension.ENERGY, value: 1 },
      { text: "悬浮在星海间、藏满宇宙奥秘的浮空岛", dimension: Dimension.LOGIC, value: 1 },
      { text: "被花海簇拥、欢声笑语永不停息的阳光村落", dimension: Dimension.SOCIAL, value: 1 },
      { text: "由于路径变幻而永远充满惊喜的幻象森林", dimension: Dimension.ADAPT, value: 2 }
    ]
  },
  {
    id: 11,
    question: "当你的信念被众人质疑，甚至面临孤立时，你的姿态是：",
    options: [
      { text: "像顽石般屹立，深信时间会证明真相的唯一性", dimension: Dimension.ENERGY, value: 1 },
      { text: "复盘逻辑链条，在辩论中精准击碎对方的谬误", dimension: Dimension.LOGIC, value: 2 },
      { text: "建立舒适的退路，悄然寻找能接纳新思想的平衡点", dimension: Dimension.ADAPT, value: 1 },
      { text: "尝试感知对立者的恐惧，用温和的引导化解敌意", dimension: Dimension.SOCIAL, value: 2 }
    ]
  },
  {
    id: 12,
    question: "如果要在荒原中留下一座属于你的永恒建筑，它会是：",
    options: [
      { text: "极简且充满数学美感的几何观测塔，俯瞰万物逻辑", dimension: Dimension.LOGIC, value: 2 },
      { text: "宏伟壮丽、刻满家族战功与荣耀的英雄殿堂", dimension: Dimension.ENERGY, value: 1 },
      { text: "开放包容、所有人都能在此围炉取暖的温情驿站", dimension: Dimension.SOCIAL, value: 1 },
      { text: "由呼吸和自然节律构成、随季节流转而改变形态的活体迷宫", dimension: Dimension.ADAPT, value: 2 }
    ]
  },
  {
    id: 13,
    question: "在面对极度的无助感时，你下意识寻找的慰藉来源于：",
    options: [
      { text: "一次大汗淋漓的奔跑，通过身体的疲惫释放精神压力", dimension: Dimension.ENERGY, value: 1 },
      { text: "躲进纯粹的知识与逻辑之海，在公式和规律中找回掌控感", dimension: Dimension.LOGIC, value: 1 },
      { text: "与挚友彻夜长谈，在情感的共振中修复破碎的内心", dimension: Dimension.SOCIAL, value: 2 },
      { text: "在各种身份中灵活切换，开启一段完全陌生的旅程来遗忘忧郁", dimension: Dimension.ADAPT, value: 1 }
    ]
  },
  {
    id: 14,
    question: "面对一个极其诱人但来源不明的机会，你的选择准则是：",
    options: [
      { text: "直觉优先，只要内心有火在跳动，就绝不放过机会", dimension: Dimension.ENERGY, value: 2 },
      { text: "风险前置，构建完整的损益矩阵，排除所有逻辑盲区", dimension: Dimension.LOGIC, value: 1 },
      { text: "关系博弈，观察参与者的阶层背景，通过结盟化解风险", dimension: Dimension.SOCIAL, value: 1 },
      { text: "镜像伪装，先投入最小成本刺探规律，再决定生存策略", dimension: Dimension.ADAPT, value: 2 }
    ]
  },
  {
    id: 15,
    question: "你希望自己在后人的评价中，被铭记为：",
    options: [
      { text: "那个开创时代的先驱者，一生都在挑战极限", dimension: Dimension.ENERGY, value: 1 },
      { text: "那个看透本质的哲学家，用智慧拨开了迷雾", dimension: Dimension.LOGIC, value: 2 },
      { text: "那个给予温暖的守护者，连接了无数孤独的心灵", dimension: Dimension.SOCIAL, value: 1 },
      { text: "那个难以被定义的游吟诗人，让规则变得不再僵化", dimension: Dimension.ADAPT, value: 2 }
    ]
  }
];

export const results_info = {
  [AnimalType.LION]: {
    name: "雄狮 (The Lion)",
    emoji: "🦁",
    theme: "#740001",
    subTheme: "#D3A625",
    keywords: ["卓越勇气", "领袖气质", "正义化身"],
    pros: ["敢于开拓", "极具魅力", "生死无畏"],
    insight: "你拥有火象般的炽阳魅力。你是那种能在黑暗中振臂一呼、引导众人前行的天然领袖。",
    minefield: "如果你过于执迷荣耀，最终可能会被英雄主义的虚名所累。",
    soulmate: "猫头鹰 (其深邃的理性能帮你降温，让勇气更具深度)",
  },
  [AnimalType.OWL]: {
    name: "猫头鹰 (The Owl)",
    emoji: "🦉",
    theme: "#0E1A40",
    subTheme: "#946B2D",
    keywords: ["绝顶智慧", "独行观测", "博学审慎"],
    pros: ["洞察真理", "思维缜密", "独特品味"],
    insight: "对你而言，好奇心是比呼吸更重要的事情。你倾向于解构这个世界的运行法则。",
    minefield: "沉溺于高维度的思考，会让你在他人眼中显得孤傲且难以接近。",
    soulmate: "平原獾 (其温暖的忠诚能帮你连接现实)",
  },
  [AnimalType.BADGER]: {
    name: "平原獾 (The Badger)",
    emoji: "🦡",
    theme: "#ECB939",
    subTheme: "#000000",
    keywords: ["至诚忠厚", "坚韧守恒", "共情之源"],
    pros: ["情绪稳定", "踏实勤恳", "值得信赖"],
    insight: "你是现实世界里最稳固的地基。‘善良’是你最强大的防御。你总能发现平凡生活里的光芒。",
    minefield: "你的不争与包容，有时会被野心家当成可以随意踩踏的阶梯。",
    soulmate: "翡翠蛇 (其野心能推你一把，让你不再为了他人而牺牲自我)",
  },
  [AnimalType.SNAKE]: {
    name: "翡翠蛇 (The Snake)",
    emoji: "🐍",
    theme: "#1A472A",
    subTheme: "#AAAAAA",
    keywords: ["极致野心", "资源整合", "灵活实用"],
    pros: ["权谋大师", "适应力强", "优雅冷静"],
    insight: "你是一个优雅的现实主义者。你明白世界的规则是流动的，并选择成为规则的制定者。",
    minefield: "如果一切都以利弊为先，那一刻的孤独将是外界无法救赎的。",
    soulmate: "雄狮 (其单纯的热度能照亮你内心幽闭的角落)",
  },
  [AnimalType.WOLF]: {
    name: "孤狼 (The Wolf)",
    emoji: "🐺",
    theme: "#4A4A4A",
    subTheme: "#FFFFFF",
    keywords: ["野性觉醒", "极端独立", "敏锐战术"],
    pros: ["抗压极强", "本能过人", "忠于自我"],
    insight: "你是黑夜中的独行者，拥有极高的精神自由度。你始终保持着抽离的清醒。",
    minefield: "过度的独行会让你陷入情感的荒漠，忘记如何向他人求助。",
    soulmate: "海豚 (其充盈的社交能量能融化你内心的坚冰)",
  },
  [AnimalType.DOLPHIN]: {
    name: "海豚 (The Dolphin)",
    emoji: "🐬",
    theme: "#0077BE",
    subTheme: "#E0F2F7",
    keywords: ["灵动社交", "创意无限", "乐天主义"],
    pros: ["共情专家", "极速学习", "氛围制造"],
    insight: "你就是光本身。你拥有极其出色的社交直觉，总能用最轻盈的方式化解沉重。",
    minefield: "为了维持和谐的表面，你可能会下意识地选择逃避现实中的矛盾。",
    soulmate: "象 (其深厚的阅历能为你提供稳固的锚点)",
  },
  [AnimalType.ELEPHANT]: {
    name: "睿象 (The Elephant)",
    emoji: "🐘",
    theme: "#888888",
    subTheme: "#F5F5F5",
    keywords: ["博大阅历", "安稳基石", "长效守护"],
    pros: ["记忆力佳", "处变不惊", "责任感强"],
    insight: "你拥有超越年龄的稳重。你是传统的守护者，平和是因为见证过时间的力量。",
    minefield: "过度的稳重有时会演变成保守，让你在快速变化的环境中感到疲惫。",
    soulmate: "灵狐 (其灵活的变通能带你领略新时代的趣味)",
  },
  [AnimalType.FOX]: {
    name: "灵狐 (The Fox)",
    emoji: "🦊",
    theme: "#FF8C00",
    subTheme: "#FFE4B5",
    keywords: ["极速变通", "俏皮聪慧", "环境专家"],
    pros: ["机智过人", "资源寻宝者", "永不枯燥"],
    insight: "你是环境的大师。你拥有极强的变通能力和一丝恶作剧般的俏皮，让生活充满变数。",
    minefield: "如果你频繁地变换面孔，他人可能会觉得难以把握你的真实核心。",
    soulmate: "孤狼 (其坚定的核心能为你提供灵魂的归宿)",
  },
  [AnimalType.DRAGON]: {
    name: "巨龙 (The Dragon)",
    emoji: "🐲",
    theme: "#8B0000",
    subTheme: "#FFD700",
    keywords: ["极致力场", "完美主义", "深邃愿景"],
    pros: ["意志如钢", "视野宏大", "绝对权威"],
    insight: "你同时拥有狮子的行动力与狼的独立。你是不属于任何规则的存在，在这个世界上，你就是规则本身。",
    minefield: "过高的标准让你难以找到真正的同伴，巨大的力量往往伴随着极致的孤独。",
    soulmate: "雄狮 (旗鼓相当的对手即是最好的伙伴)",
  },
  [AnimalType.PEACOCK]: {
    name: "孔雀 (The Peacock)",
    emoji: "🦚",
    theme: "#1E90FF",
    subTheme: "#00CED1",
    keywords: ["审美极致", "舞台焦点", "生命庆典"],
    pros: ["表达天才", "极具美感", "乐观感染"],
    insight: "你是海豚的社交与狐狸的多变结合体。生活对你而言不是生存竞争，而是一场永不停歇的个人秀。",
    minefield: "如果观众离去，你可能会瞬间陷入严重的自我否定。",
    soulmate: "海豚 (共同创造最美的波浪)",
  },
  [AnimalType.TIGER]: {
    name: "猛虎 (The Tiger)",
    emoji: "🐯",
    theme: "#FF4500",
    subTheme: "#000000",
    keywords: ["瞬时爆发", "野性逻辑", "孤独执行"],
    pros: ["效率之王", "直抵目标", "从不迟疑"],
    insight: "你是猫头鹰的逻辑与狼的独立的混合。你只在目标出现时露面，精确得就像手术刀。",
    minefield: "过分的效率至上让你忽略了过程中那些柔软的风景。",
    soulmate: "灵狐 (让狩猎也充满艺术感)",
  },
  [AnimalType.PANDA]: {
    name: "大熊猫 (The Panda)",
    emoji: "🐼",
    theme: "#000000",
    subTheme: "#FFFFFF",
    keywords: ["大智若愚", "能量守恒", "平衡大师"],
    pros: ["核心极稳", "化繁为简", "天然亲和"],
    insight: "你是睿象的稳重与平原獾的善良结合。你用最慢的节奏处理最复杂的冲突，是真正的无为而治者。",
    minefield: "‘顺其自然’有时会演变成‘得过且过’，从而错失进化的机会。",
    soulmate: "平原獾 (最舒服的默契)",
  }
};
