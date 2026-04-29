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
  PANDA = 'PANDA',
  HAWK = 'HAWK',
  CAT = 'CAT',
  POLAR_BEAR = 'POLAR_BEAR',
  DEER = 'DEER',
  BEE = 'BEE'
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
  },
  {
    id: 16,
    question: "在一座被时间遗忘的图书馆里，你被一本书的标题吸引，它是：",
    options: [
      { text: "《破晓之剑：意志的终极征程》", dimension: Dimension.ENERGY, value: 2 },
      { text: "《万物算法：解码宇宙的隐形逻辑》", dimension: Dimension.LOGIC, value: 2 },
      { text: "《共生协议：如何建立跨越物种的连接》", dimension: Dimension.SOCIAL, value: 1 },
      { text: "《无常之书：在混乱中优雅生存的正典》", dimension: Dimension.ADAPT, value: 1 }
    ]
  },
  {
    id: 17,
    question: "面对一个无法解开的死结，你的处理策略是：",
    options: [
      { text: "奋力一搏，即使绳索俱断也要将其彻底拆解", dimension: Dimension.ENERGY, value: 1 },
      { text: "寻找源头，顺着每一根纤维推演结成的逻辑步骤", dimension: Dimension.LOGIC, value: 1 },
      { text: "请求外援，相信汇聚众人的智慧能找到突破点", dimension: Dimension.SOCIAL, value: 2 },
      { text: "改变定义，让“死结”本身变成一种独特的艺术装饰", dimension: Dimension.ADAPT, value: 2 }
    ]
  },
  {
    id: 18,
    question: "如果要在荒废的城市中播下一粒种子，你希望它长成：",
    options: [
      { text: "高耸入云的神木，作为指引方向的绝对路标", dimension: Dimension.ENERGY, value: 1 },
      { text: "精准对成的水晶之花，在月光下折射出理性的光辉", dimension: Dimension.LOGIC, value: 2 },
      { text: "成片蔓延的爬山虎，温柔地覆盖每一处冰冷的废墟", dimension: Dimension.SOCIAL, value: 1 },
      { text: "色彩变幻的捕蝇草，在危机四伏的环境中展现生存智慧", dimension: Dimension.ADAPT, value: 2 }
    ]
  },
  {
    id: 19,
    question: "当你在深夜听到一阵意义不明的呼唤，你的直觉反应是：",
    options: [
      { text: "握紧防御，带着进取心追踪声音的来处", dimension: Dimension.ENERGY, value: 2 },
      { text: "保持冷静，通过回声定位和频率分析判断风险", dimension: Dimension.LOGIC, value: 1 },
      { text: "回应呼唤，即使是未知的灵魂也可能需要交流", dimension: Dimension.SOCIAL, value: 2 },
      { text: "融入黑暗，观察环境的变化再决定是否现身", dimension: Dimension.ADAPT, value: 1 }
    ]
  },
  {
    id: 20,
    question: "在一次漫长的漂流中，你最依赖的导航工具是：",
    options: [
      { text: "你那永不枯竭的意志，划动船桨直至彼岸", dimension: Dimension.ENERGY, value: 1 },
      { text: "精密校准的六分仪，通过星空锁定绝对坐标", dimension: Dimension.LOGIC, value: 2 },
      { text: "飘在水面的漂流瓶，希望能引导你走向有人烟的地方", dimension: Dimension.SOCIAL, value: 1 },
      { text: "随波逐流的智慧，根据洋流的变化寻找最省力的路径", dimension: Dimension.ADAPT, value: 2 }
    ]
  },
  {
    id: 21,
    question: "如果可以定制一种超能力，你最想拥有的是：",
    options: [
      { text: "瞬间爆发的力量，击碎阻碍一切的力量", dimension: Dimension.ENERGY, value: 2 },
      { text: "看穿事物未来的演化逻辑", dimension: Dimension.LOGIC, value: 2 },
      { text: "能感受到全世界所有生物痛苦并给予抚慰的情感共鸣", dimension: Dimension.SOCIAL, value: 1 },
      { text: "在任意状态下重组分子结构的拟态能力", dimension: Dimension.ADAPT, value: 1 }
    ]
  },
  {
    id: 22,
    question: "你认为一个人真正的成熟标志是：",
    options: [
      { text: "明知不可为而为之的英雄豪气", dimension: Dimension.ENERGY, value: 1 },
      { text: "能够忍受孤独，并在逻辑的真理中获得安宁", dimension: Dimension.LOGIC, value: 2 },
      { text: "学会在复杂的人情世故中保护那些脆弱的温情", dimension: Dimension.SOCIAL, value: 1 },
      { text: "不仅能看透各种规则，还能在规则的缝隙里游刃有余", dimension: Dimension.ADAPT, value: 2 }
    ]
  },
  {
    id: 23,
    question: "在一场盛大的假面舞会上，你挑选的面具是：",
    options: [
      { text: "夺目威严、象征战神的黄金战盔", dimension: Dimension.ENERGY, value: 1 },
      { text: "精密复杂、转动着无数极小齿轮的机械面具", dimension: Dimension.LOGIC, value: 2 },
      { text: "柔和温暖、能让人瞬间产生信任感的笑脸面具", dimension: Dimension.SOCIAL, value: 1 },
      { text: "材质不明、在不同灯光下呈现不同情绪的镜像面具", dimension: Dimension.ADAPT, value: 2 }
    ]
  },
  {
    id: 24,
    question: "如果你是某种艺术创作体，你觉得自己更像：",
    options: [
      { text: "气势磅礴、充满力量感的巨型雕塑", dimension: Dimension.ENERGY, value: 2 },
      { text: "逻辑严谨、意蕴深远的古典协奏曲", dimension: Dimension.LOGIC, value: 1 },
      { text: "富有感染力、描绘温馨众生相的巨幅油画", dimension: Dimension.SOCIAL, value: 2 },
      { text: "意识流风格、跨越多种体裁的实验先锋文学", dimension: Dimension.ADAPT, value: 1 }
    ]
  },
  {
    id: 25,
    question: "面对人生的终点站，你希望是以什么样的方式谢幕：",
    options: [
      { text: "在一场壮丽的冒险中燃烧尽最后一丝能量", dimension: Dimension.ENERGY, value: 1 },
      { text: "在彻底解开了所有困惑后，从容地合上智慧之书", dimension: Dimension.LOGIC, value: 2 },
      { text: "在所有爱人的环绕中，带着最深重的眷恋离去", dimension: Dimension.SOCIAL, value: 1 },
      { text: "像一滴水回归海洋，化作千万种形态继续存在", dimension: Dimension.ADAPT, value: 2 }
    ]
  },
  {
    id: 26,
    question: "每个清晨推动你醒来的最核心动力是：",
    options: [
      { text: "踏上征程，在世界留下属于我的印记", dimension: Dimension.ENERGY, value: 2 },
      { text: "解决难题，拼凑出世界运行的又一块碎片", dimension: Dimension.LOGIC, value: 2 },
      { text: "守护温情，与所爱之人共享生命的律动", dimension: Dimension.SOCIAL, value: 1 },
      { text: "迎接未知，看变幻莫测的命运今天会带来什么惊喜", dimension: Dimension.ADAPT, value: 1 }
    ]
  },
  {
    id: 27,
    question: "面对一个需要背井离乡、前往陌生城市的高薪机会，你的考量是：",
    options: [
      { text: "毫不犹豫地接受，这是开辟新领地的绝佳机会", dimension: Dimension.ENERGY, value: 1 },
      { text: "建立详细的评估矩阵，计算职业天花板与生活成本比", dimension: Dimension.LOGIC, value: 2 },
      { text: "深刻担忧关系的断裂，考虑新环境是否能建立同样深入的链接", dimension: Dimension.SOCIAL, value: 1 },
      { text: "感到兴奋，正好可以借此机会彻底重塑自己的生活形态", dimension: Dimension.ADAPT, value: 2 }
    ]
  },
  {
    id: 28,
    question: "在突如其来的混乱危机中，你本能表现出的第一特质是：",
    options: [
      { text: "挺身而出，用果断的决策稳定军心并下达指令", dimension: Dimension.ENERGY, value: 1 },
      { text: "保持静止，在脑内飞速处理数据以提取最优逃生方案", dimension: Dimension.LOGIC, value: 1 },
      { text: "环顾四周，确保身边最脆弱的人没有被混乱所吞噬", dimension: Dimension.SOCIAL, value: 2 },
      { text: "顺势隐匿，像水一样渗透进混乱的缝隙寻找最省力的出口", dimension: Dimension.ADAPT, value: 2 }
    ]
  },
  {
    id: 29,
    question: "你认为艺术作品存在的最高价值应当是：",
    options: [
      { text: "激发力量，成为推动时代变革的史诗号角", dimension: Dimension.ENERGY, value: 1 },
      { text: "映射真理，展现自然与宇宙背后的深邃逻辑", dimension: Dimension.LOGIC, value: 2 },
      { text: "抚慰心灵，让孤独的灵魂感受到跨越时空的共振", dimension: Dimension.SOCIAL, value: 1 },
      { text: "挑战定义，打破一切僵化的形式并保持思维的流动", dimension: Dimension.ADAPT, value: 2 }
    ]
  },
  {
    id: 30,
    question: "在你生命旅途的最后，你希望墓碑上刻着的墓志铭是：",
    options: [
      { text: "“他征服了所有高山，从未向任何困难妥协”", dimension: Dimension.ENERGY, value: 2 },
      { text: "“他看透了迷雾，将清晰的真理留给了后世”", dimension: Dimension.LOGIC, value: 2 },
      { text: "“他爱过每一个人，也被每一个温暖的灵魂所铭记”", dimension: Dimension.SOCIAL, value: 1 },
      { text: "“他无法被任何定义所锚定，他就是流动的生命本身”", dimension: Dimension.ADAPT, value: 1 }
    ]
  }
];

export const results_info = {
  [AnimalType.LION]: {
    name: "雄狮",
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
    name: "猫头鹰",
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
    name: "平原獾",
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
    name: "翡翠蛇",
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
    name: "孤狼",
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
    name: "海豚",
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
    name: "睿象",
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
    name: "灵狐",
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
    name: "巨龙",
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
    name: "孔雀",
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
    name: "猛虎",
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
    name: "大熊猫",
    emoji: "🐼",
    theme: "#000000",
    subTheme: "#FFFFFF",
    keywords: ["大智若愚", "能量守恒", "平衡大师"],
    pros: ["核心极稳", "化繁为简", "天然亲和"],
    insight: "你是睿象的稳重与平原獾的善良结合。你用最慢的节奏处理最复杂的冲突，是真正的无为而治者。",
    minefield: "‘顺其自然’有时会演变成‘得过且过’，从而错失进化的机会。",
    soulmate: "平原獾 (最舒服的默契)",
  },
  [AnimalType.HAWK]: {
    name: "隼鹰",
    emoji: "🦅",
    theme: "#4A3728",
    subTheme: "#E2B13C",
    keywords: ["高空视野", "精准出击", "极度专注"],
    pros: ["大局观强", "行动果决", "极高自律"],
    insight: "你拥有雄狮的勇气与猛虎的效率。你立于云端，在众人还在纠结细节时，你已看到了终局。",
    minefield: "过于追求高度会让你变得冷酷，甚至俯视那些无法跟上你节奏的人。",
    soulmate: "猫头鹰 (共同守护这片逻辑的天空)",
  },
  [AnimalType.CAT]: {
    name: "灵猫",
    emoji: "🐈",
    theme: "#2F2F2F",
    subTheme: "#FFD700",
    keywords: ["神秘边界", "感官敏锐", "自由灵魂"],
    pros: ["优雅独立", "极速反应", "不可捉摸"],
    insight: "你是孤狼的独立与灵狐的多变结合。你不需要群体的认可，你的世界里，悦己才是第一准则。",
    minefield: "过度的疏离感有时会让你错过那些真正能触及灵魂的深度链接。",
    soulmate: "灵狐 (享受这场棋逢对手的追逐)",
  },
  [AnimalType.POLAR_BEAR]: {
    name: "北极熊",
    emoji: "🐻‍❄️",
    theme: "#F0F8FF",
    subTheme: "#708090",
    keywords: ["孤独守护", "极致耐力", "平静力量"],
    pros: ["生存大师", "情绪内敛", "重击之力"],
    insight: "你是睿象的稳重与巨龙力场的结合。在极端寒冷的环境中，你就是那座不可逾越的冰山。",
    minefield: "你的平静有时看起来像麻木，一旦爆发，其破坏力往往连你自己都无法控制。",
    soulmate: "大熊猫 (一起在冬日的阳光下保持平静)",
  },
  [AnimalType.DEER]: {
    name: "林鹿",
    emoji: "🦌",
    theme: "#8B4513",
    subTheme: "#CD853F",
    keywords: ["灵性共振", "警觉敏锐", "优雅回避"],
    pros: ["预感准确", "极具美感", "和平使者"],
    insight: "你是海豚的社交与平原獾善良的结合。你对世界充满善意，并拥有一种近乎通灵的危险感知力。",
    minefield: "过度的敏感会让你在面对冲突时下意识选择躲避，导致问题被无限期搁置。",
    soulmate: "海豚 (一起奔向森林深处的溪流)",
  },
  [AnimalType.BEE]: {
    name: "工蜂",
    emoji: "🐝",
    theme: "#FFD700",
    subTheme: "#000000",
    keywords: ["群体协同", "极度秩序", "勤勉奉献"],
    pros: ["团队核心", "细节控", "使命必达"],
    insight: "你是平原獾的勤勉与猫头鹰逻辑的结合。你相信集体的力量，在规则与秩序中寻找安稳。",
    minefield: "如果脱离了群体或既定规则，你可能会陷入严重的身份危机和焦虑中。",
    soulmate: "睿象 (在稳固的秩序中共同劳作)",
  }
};
