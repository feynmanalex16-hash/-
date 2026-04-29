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
  BEE = 'BEE',
  SHARK = 'SHARK',
  WHALE = 'WHALE',
  HORSE = 'HORSE',
  SPIDER = 'SPIDER',
  BUTTERFLY = 'BUTTERFLY',
  PHOENIX = 'PHOENIX',
  RHINO = 'RHINO',
  CHAMELEON = 'CHAMELEON',
  SWAN = 'SWAN',
  SCORPION = 'SCORPION'
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
    theme: "#be123c",
    subTheme: "#fbbf24",
    keywords: ["卓越勇气", "领袖气质", "正义化身"],
    pros: ["敢于开拓", "极具魅力", "生死无畏"],
    insight: "你拥有火象般的炽阳魅力。你是那种能在黑暗中振臂一呼、引导众人前行的天然领袖。",
    detailedDescription: "作为雄狮原型，你的生命动力源于对卓越与正义的渴望。你天生具备一种能够穿透迷雾的领袖气质，这并非源于对他人的控制，而是源于你内心那股不灭的火焰。在这一生中，你往往会扮演开拓者或保护方的角色。你追求的是一种宏大的、能被历史铭记的正义。然而，你真正的挑战在于学会平衡内心的傲慢，并明白真正的力量背后，往往隐藏着最深重的责任与孤独。",
    minefield: "如果你过于执迷荣耀，最终可能会被英雄主义的虚名所累。",
    soulmate: "猫头鹰 (其深邃的理性能帮你降温，让勇气更具深度)",
  },
  [AnimalType.OWL]: {
    name: "猫头鹰",
    emoji: "🦉",
    theme: "#4338ca",
    subTheme: "#94a3b8",
    keywords: ["绝顶智慧", "独行观测", "博学审慎"],
    pros: ["洞察真理", "思维缜密", "独特品味"],
    insight: "对你而言，好奇心是比呼吸更重要的事情。你倾向于解构这个世界的运行法则。",
    detailedDescription: "猫头鹰代表着至高无上的理性与观测。你的灵魂在追求知识的纯粹性中寻找安宁。比起参与权力的角逐，你更倾向于站在高塔上思考。你的生命轨迹通常与研究、逻辑、艺术解构或前沿科技紧密相连。你并不渴望被理解，但你渴望被‘验证’。你内心的宁静源于对未知的征服。但请注意，若长时间拒绝情感的流动，你可能会成为一个完美的逻辑机器，却遗忘了作为碳基生物最原始的温暖。",
    minefield: "沉溺于高维度的思考，会让你在他人眼中显得孤傲且难以接近。",
    soulmate: "平原獾 (其温暖的忠诚能帮你连接现实)",
  },
  [AnimalType.BADGER]: {
    name: "平原獾",
    emoji: "🦡",
    theme: "#eab308",
    subTheme: "#451a03",
    keywords: ["至诚忠厚", "坚韧守恒", "共情之源"],
    pros: ["情绪稳定", "踏实勤恳", "值得信赖"],
    insight: "你是现实世界里最稳固的地基。‘善良’是你最强大的防御。你总能发现平凡生活里的光芒。",
    detailedDescription: "平原獾是一个关于‘持重’与‘慈悲’的古老故事。你是那些在风暴中依然守着炉火的人。你的动力不来自于向外扩张，而来自于向内扎根。你的生命之路通常是稳健且富有节奏的，你是团队中不可替代的粘合剂和情感基石。你的使命是通过微小的、持续的善意来对抗虚无。然而，你的影子中潜伏着对他人的过度依赖，或是由于不习惯冲突而导致的自我损耗。",
    minefield: "你的不争与包容，有时会被野心家当成可以随意踩踏的阶梯。",
    soulmate: "翡翠蛇 (其野心能推你一把，让你不再为了他人而牺牲自我)",
  },
  [AnimalType.SNAKE]: {
    name: "翡翠蛇",
    emoji: "🐍",
    theme: "#065f46",
    subTheme: "#cbd5e1",
    keywords: ["极致野心", "资源整合", "灵活实用"],
    pros: ["权谋大师", "适应力强", "优雅冷静"],
    insight: "你是一个优雅的现实主义者。你明白世界的规则是流动的，并选择成为规则的制定者。",
    detailedDescription: "翡翠蛇是资源与权谋的大师。你拥有极强的生存直觉，能敏锐地察觉到环境中潜伏的权力和利益缺口。你的生命轨迹往往伴随着财富的积累、阶层的跨越或规则的重塑。你选择隐忍与精准出击，以此来掌控脆弱的人生感。你动机纯粹，从不掩饰对成功的追求，这种坦荡有时比伪善更有力量。但如果失去了对‘纯粹情感’的敬畏，你终将在金钱与权势的废墟上感到无法慰藉的荒凉。",
    minefield: "如果一切都以利弊为先，那一刻的孤独将是外界无法救赎的。",
    soulmate: "雄狮 (其单纯的热度能照亮你内心幽闭的角落)",
  },
  [AnimalType.WOLF]: {
    name: "孤狼",
    emoji: "🐺",
    theme: "#334155",
    subTheme: "#f8fafc",
    keywords: ["野性觉醒", "极端独立", "敏锐战术"],
    pros: ["抗压极强", "本能过人", "忠于自我"],
    insight: "你是黑夜中的独行者，拥有极高的精神自由度。你始终保持着抽离的清醒。",
    detailedDescription: "孤狼是一曲关于‘边界’与‘真实’的赞歌。你核心的动机是保护灵魂的绝对自由不受侵蚀。你的生命之路通常伴随着深刻的自我探索和对社会陈旧规则的反叛。你不仅是在寻找一个地方生存，更是在寻找生存的意义。你具备极强的战术执行力，但在情感连接上却有着天然的屏障。你的一生中，只有那些能理解你沉默之下千言万语的人，才配得上你的灵魂结盟。",
    minefield: "过度的独行会让你陷入情感的荒漠，忘记如何向他人求助。",
    soulmate: "海豚 (其充盈的社交能量能融化你内心的坚冰)",
  },
  [AnimalType.DOLPHIN]: {
    name: "海豚",
    emoji: "🐬",
    theme: "#0284c7",
    subTheme: "#e0f2fe",
    keywords: ["灵动社交", "创意无限", "乐天主义"],
    pros: ["共情专家", "极速学习", "氛围制造"],
    insight: "你就是光本身。你拥有极其出色的社交直觉，总能用最轻盈的方式化解沉重。",
    detailedDescription: "海豚是潜意识海洋中最灵动的波纹。你的核心天赋是共情与创造。你的一生是不断学习与散播快乐的过程，你在人群中如同磁石，能瞬间捕捉到他人的情感波动。你的理想生活是充满创意、交流与协作的。你害怕被困在单调和平庸的框架里，那些重复性的琐事会消磨你灵魂的灵性。你存在的意义，在于告诉世界，深刻的智慧也可以用最轻盈、最活泼的方式来表达。",
    minefield: "为了维持和谐的表面，你可能会下意识地选择逃避现实中的矛盾。",
    soulmate: "象 (其深厚的阅历能为你提供稳固的锚点)",
  },
  [AnimalType.ELEPHANT]: {
    name: "睿象",
    emoji: "🐘",
    theme: "#57534e",
    subTheme: "#f5f5f4",
    keywords: ["博大阅历", "安稳基石", "长效守护"],
    pros: ["记忆力佳", "处变不惊", "责任感强"],
    insight: "你拥有超越年龄的稳重。你是传统的守护者，平和是因为见证过时间的力量。",
    detailedDescription: "睿象是历史的承载者与价值的守护者。你的人生通常建立在厚重的积累与深刻的责任感之上。你的动机是维护秩序，为后代留下某种可追随的印记。你是那种能经受住数十年沉寂而最终爆发巨大能量的人。你生命中最重要的时刻，往往是当你选择放下一己之私，去守护某个更伟大的传统或群体利益时。你的平静源于你明白，所有的喧嚣终将尘埃落定，唯有那些真正扎根的价值才能永恒。",
    minefield: "过度的稳重有时会演变成保守，让你在快速变化的环境中感到疲惫。",
    soulmate: "灵狐 (其灵活的变通能带你领略新时代的趣味)",
  },
  [AnimalType.FOX]: {
    name: "灵狐",
    emoji: "🦊",
    theme: "#ea580c",
    subTheme: "#ffedd5",
    keywords: ["极速变通", "俏皮聪慧", "环境专家"],
    pros: ["机智过人", "资源寻宝者", "永不枯燥"],
    insight: "你是环境的大师。你拥有极强的变通能力和一丝恶作剧般的俏皮，让生活充满变数。",
    detailedDescription: "灵狐是智慧的戏法师与环境的观察家。你不相信一成不变的终点，你只相信流动的过程。你的生命充满了探索与机敏，你总是能在别人看不到的地方发现隐藏的小路。你的人格核心是‘游戏感’——你把生活看作是一场大型解谜游戏。你最擅长在信息不对称中找到生存的平衡。你的动机是追求智力上的新鲜感与生存上的安全感。然而，如果你找不到那个值得你停留的‘支点’，你的一生可能会在轻飘飘的游离中飞逝。",
    minefield: "如果你频繁地变换面孔，他人可能会觉得难以把握你的真实核心。",
    soulmate: "孤狼 (其坚定的核心能为你提供灵魂的归宿)",
  },
  [AnimalType.DRAGON]: {
    name: "巨龙",
    emoji: "🐲",
    theme: "#991b1b",
    subTheme: "#fde047",
    keywords: ["极致力场", "完美主义", "深邃愿景"],
    pros: ["意志如钢", "视野宏大", "绝对权威"],
    insight: "你同时拥有狮子的行动力与狼的独立. 你是不属于任何规则的存在，在这个世界上，你就是规则本身。",
    detailedDescription: "巨龙是一种关于‘宿命’与‘愿景’的神性架构。由于同时具备高能量与深蓝智性，你通常会感到自己与周遭格格不入。你的动机不是被看见，而是被刻进时空。你的一生往往充满了宏大的奋斗历程与剧烈的冲突转换。你追求的是完美的秩序或绝对的自由。你是天生的异能者，拥有化腐朽为神奇的意志。但强大的力量也意味着极致的孤独——你的一生中，最难解开的课题是：如何在俯瞰众生的同时，依然保持对微小幸福的感知能力。",
    minefield: "过高的标准让你难以找到真正的同伴，巨大的力量往往伴随着极致的孤独。",
    soulmate: "雄狮 (旗鼓相当的对手即是最好的伙伴)",
  },
  [AnimalType.PEACOCK]: {
    name: "孔雀",
    emoji: "🦚",
    theme: "#2563eb",
    subTheme: "#22d3ee",
    keywords: ["审美极致", "舞台焦点", "生命庆典"],
    pros: ["表达天才", "极具美感", "乐观感染"],
    insight: "你是海豚的社交与狐狸的多变结合体。生活对你而言不是生存竞争，而是一场永不停歇的个人秀。",
    detailedDescription: "孔雀原型是关于‘美学’、‘表现’与‘生命力喷薄’的表达。你的核心动机是向世界展示生命的丰富与灿烂。你无法忍受被埋没在阴影中，你的一生都在寻找各种形式的舞台，无论那是艺术、演说还是某种独特的生活方式。你具备极强的影响力，能极速调动周围人的精绪。你存在的价值，就是打破单调，用色彩和韵律去对抗死亡的沉寂。你的脆弱在于对他人的期待过高，一旦失去这些反馈，你的灵魂可能会陷入深深的干涸。",
    minefield: "如果观众离去，你可能会瞬间陷入严重的自我否定。",
    soulmate: "海豚 (共同创造最美的波浪)",
  },
  [AnimalType.TIGER]: {
    name: "猛虎",
    emoji: "🐯",
    theme: "#c2410c",
    subTheme: "#0f172a",
    keywords: ["瞬时爆发", "野性逻辑", "孤独执行"],
    pros: ["效率之王", "直抵目标", "从不迟疑"],
    insight: "你是猫头鹰的逻辑与狼的独立的混合。你只在目标出现时露面，精确得就像手术刀。",
    detailedDescription: "猛虎是一个关于‘效率’与‘直击本质’的战术典范。你的灵魂极度排斥虚张声势与多余的寒暄。当你锁定一个目标时，你的行动力会以爆炸式的节奏释放。你的一生通常伴随着不断的自我超越与对专业技能的极致磨砺。你追求的是绝对的掌控与果决的终结。你就像一把游走于现实边界的高精度手术刀，只解决最核心的问题。然而，如果你总是活在即时反应中，你可能会错失那些需要长时间发酵才能绽放的生命意义。",
    minefield: "过分的效率至上让你忽略了过程中那些柔软的风景。",
    soulmate: "灵狐 (让狩猎也充满艺术感)",
  },
  [AnimalType.PANDA]: {
    name: "大熊猫",
    emoji: "🐼",
    theme: "#1e293b",
    subTheme: "#f8fafc",
    keywords: ["大智若愚", "能量守恒", "平衡大师"],
    pros: ["核心极稳", "化繁为简", "天然亲和"],
    insight: "你是睿象的稳重与平原獾的善良结合。你用最慢的节奏处理最复杂的冲突，是真正的无为而治者。",
    detailedDescription: "大熊猫是一种罕见的‘能量平衡’态。你的核心智慧不在于获取，而在于保留。你的一生通常是平静且极富包容力的。你的动机会引导你走向那些不仅是对自己，对他人也大有裨益的中道之路。你拥有极强的精神韧性，能在压力下依然保持温和。你的存在本身就是一种治疗，能让周围浮躁的空气瞬间安静下来。但你必须警惕灵魂的懒散——不要因为追求安逸，而错过了人生中那些必须穿过火焰才能到达的更高维度。",
    minefield: "‘顺其自然’有时会演变成‘得过且过’，从而错失进化的机会。",
    soulmate: "平原獾 (最舒服的默契)",
  },
  [AnimalType.HAWK]: {
    name: "隼鹰",
    emoji: "🦅",
    theme: "#78350f",
    subTheme: "#fcd34d",
    keywords: ["高空视野", "精准出击", "极度专注"],
    pros: ["大局观强", "行动果决", "极高自律"],
    insight: "你拥有雄狮的勇气与猛虎的效率。你立于云端，在众人还在纠结细节时，你已看到了终局。",
    detailedDescription: "隼鹰是关于‘大局观’与‘精准裁决’的化身。你的灵魂渴望高度，那种能将世间万象一眼收录的广阔视野。你的生命伴随着对卓越的绝对渴望和对平庸的生理性厌恶。你在事业或学业上往往能取得令人瞩目的单点突破。你的动机极其集中——识别目标，扫清障碍，精准执行。你就像一道闪电，划破沉闷的夜空。请记住，当你站在云端太久时，别忘了偶尔降落在土地上，去理解那些正在泥泞中挣扎的同类，那将赋予你的视野更深沉的人文关怀。",
    minefield: "过于追求高度会让你变得冷酷，甚至俯视那些无法跟上你节奏的人。",
    soulmate: "猫头鹰 (共同守护这片逻辑的天空)",
  },
  [AnimalType.CAT]: {
    name: "灵猫",
    emoji: "🐈",
    theme: "#171717",
    subTheme: "#facc15",
    keywords: ["神秘边界", "感官敏锐", "自由灵魂"],
    pros: ["优雅独立", "极速反应", "不可捉摸"],
    insight: "你是孤狼的独立与灵狐的多变结合。你不需要群体的认可，你的世界里，悦己才是第一准则。",
    detailedDescription: "灵猫是一个关于‘审美孤岛’与‘不可驯服’的现代寓言。你的灵魂属于一种极致的个人主义生活方式。你追求的是感官的精致与情绪的自给自足。你的一生往往是去中心化的，你拒绝任何形式的道德绑架。你的动机会带你走向跨学科的创意工作或高度自由的职业领域。你最迷人的地方在于你从不解释自己的古怪，这种自成体系的逻辑是你对抗庸俗最强有力的护甲。然而，你的影子中存在着对他人的冷漠，这可能会让你在真正需要灵魂碰撞时，发现自己已经习惯了孤独的频率。",
    minefield: "过度的疏离感有时会让你错过那些真正能触及灵魂的深度链接。",
    soulmate: "灵狐 (享受这场棋逢对手的追逐)",
  },
  [AnimalType.POLAR_BEAR]: {
    name: "北极熊",
    emoji: "🐻‍❄️",
    theme: "#0f172a",
    subTheme: "#94a3b8",
    keywords: ["孤独守护", "极致耐力", "平静力量"],
    pros: ["生存大师", "情绪内敛", "重击之力"],
    insight: "你是睿象的稳重与巨龙力场的结合. 在极端寒冷的环境中，你就是那座不可逾越的冰山。",
    detailedDescription: "北极熊是关于‘隐忍的力量’与‘极致专注’的寒地之王。你的人格核心是一种内敛的、能够抵御任何孤寂的生命厚度。你并不急于表现，但你的一举一动都充满了重量级的影响力。你的生命轨迹通常是孤独但极具目的性的，像是在永恒的寂静中积蓄力量。你是天生的危急时刻处理者，能在所有人都崩溃时保持绝对的冷峻。你的挑战是如何化解内心冻结的情绪，避免这种极致的力量在失控时演变成针对自己或周遭的毁灭性冰暴。",
    minefield: "你的平静有时看起来像麻木，一旦爆发，其破坏力往往连你自己都无法控制。",
    soulmate: "大熊猫 (一起在冬日的阳光下保持平静)",
  },
  [AnimalType.DEER]: {
    name: "林鹿",
    emoji: "🦌",
    theme: "#713f12",
    subTheme: "#fbbf24",
    keywords: ["灵性共振", "警觉敏锐", "优雅回避"],
    pros: ["预感准确", "极具美感", "和平使者"],
    insight: "你是海豚的社交与平原獾善良的结合。你对世界充满善意，并拥有一种近乎通灵的危险感知力。",
    detailedDescription: "林鹿是林间闪现的灵性光点。你的人生是关于‘敏感’、‘温情’与‘自然节律’的共鸣。由于具备超常的同理心，你往往能察觉到大气中细微的情绪变动。你选择用温柔来化解冲突，用美感来填补裂痕。你的生命之路通常充满了艺术性与人文关怀。你最渴望的是一个无需盔甲也能安全生存的环境。然而，你必须学会为你的‘灵性空间’筑起坚固的防御。如果没有边界，你的善良很可能会成为他人宣泄负能量的出口，最终导致你灵魂的灵性枯萎。",
    minefield: "过度的敏感会让你在面对冲突时下意识选择躲避，导致问题被无限期搁置。",
    soulmate: "海豚 (一起奔向森林深处的溪流)",
  },
  [AnimalType.BEE]: {
    name: "工蜂",
    emoji: "🐝",
    theme: "#854d0e",
    subTheme: "#fef08a",
    keywords: ["群体协同", "极度秩序", "勤勉奉献"],
    pros: ["团队核心", "细节控", "使命必达"],
    insight: "你是平原獾的勤勉与猫头鹰逻辑的结合。你相信集体的力量，在规则与秩序中寻找安稳。",
    detailedDescription: "工蜂是‘集体式智慧’与‘秩序美学’的典范。你深信集体的价值高于一切，这种无私的奉献精神使你成为任何文明架构中最坚固的砖石。你的动机源于对规则的敬畏与对繁荣的渴望。你的一生往往致力于某个长期的、需要高度协作的目标。你拥有惊人的细节处理能力和极高的责任感。请记住，在为了‘蜂群’工作的同时，也要偶尔停下来，去品尝一朵花本身带来的甘甜，那是属于你个体生命的、无法被集体化替代的纯粹喜悦。",
    minefield: "如果脱离了群体或既定规则，你可能会陷入严重的身份危机和焦虑中。",
    soulmate: "睿象 (在稳固的秩序中共同劳作)",
  },
  [AnimalType.SHARK]: {
    name: "破局之鲨",
    emoji: "🦈",
    theme: "#0c4a6e",
    subTheme: "#e0f2fe",
    keywords: ["绝对效率", "无情进化", "深海主宰"],
    pros: ["行动如风", "嗅觉极其敏锐", "无惧高压"],
    insight: "你是猛虎的决断力与巨龙野心的结合. 在这一刻，你不仅是捕猎者，更是规则的终结者。",
    detailedDescription: "破局之鲨是一种关于‘绝对进化’与‘生存掠夺’的意志流向。你认为生命只有两种状态：前进或死亡。这种极致的紧迫感让你在商业、竞技或任何需要高度竞争的环境中如鱼得水。你的生命伴随着不断的狩猎与扩张。你追求的是绝对的地位与无可争议的效率。你就像大洋深处的引擎，永不凝滞。你的动机极其纯粹：通过不断的变强来对抗不可预知的危机。但请注意，若你的人际关系只有‘利用价值’这一个维度，你最终会发现在你最辉煌的猎场上，除了猎物，空无一人。",
    minefield: "极度追求效率可能让你完全丧失对过程的感知，从而错过那些微小却温暖的情感碎片。",
    soulmate: "灵猫 (在效率与优雅之间保持动态平衡)",
  },
  [AnimalType.WHALE]: {
    name: "深海鲸",
    emoji: "🐋",
    theme: "#1e3a8a",
    subTheme: "#bfdbfe",
    keywords: ["深层同理", "古老智慧", "孤独共鸣"],
    pros: ["情绪容受力", "深思熟虑", "宏大愿景"],
    insight: "你是睿象的厚重与海豚情感深度的极致结合. 你的思维在深海中游弋，能听见世界微弱的心跳。",
    detailedDescription: "深海鲸是一个关于‘时空维度’与‘广袤悲悯’的神圣隐喻。你的核心动力是探索宇宙与生命的底层共鸣。你的一生通常是漫长、深邃且伴随着某种神圣孤独感的。你拥有的不仅是知识，更是智慧。你追求的是灵魂层面的波澜不惊。你的生命轨迹往往与哲学、灵性、基础科学或长期的公益事业相关。你存在的价值，就是告诉那些在浅海中喧闹的灵魂，只有通过深度的下潜，才能触碰到永恒。请留意那些细小的关系，不要因为过于宏大的视野，而忽略了身边亲人最真实的温度。",
    minefield: "过于沉溺于宏大的孤独感，会让现实生活中的细碎责任变得面目可憎。",
    soulmate: "猫头鹰 (共同探索宇宙最深处的逻辑与情感)",
  },
  [AnimalType.HORSE]: {
    name: "荒原马",
    emoji: "🐎",
    theme: "#78350f",
    subTheme: "#fef3c7",
    keywords: ["自由意志", "持久热忱", "纯粹行动"],
    pros: ["执行力爆表", "真诚坦荡", "乐天派"],
    insight: "你是雄狮的能量与灵狐多变的结合. 生命对你而言是一场永不停歇的奔跑，终点并不重要。",
    detailedDescription: "荒原马代表着‘自由’、‘驱动力’与‘无畏的真诚’。你的人生是一场宏大的公路电影，你的心跳总是随着风的节奏在律动。你拒绝任何形式的枷锁。你的动机来自于对‘远方’的病态迷恋。这种天生的不羁让你在动荡的环境中反而能焕发出惊人的生命力。你在行动中思考，在奔跑中寻找意义。然而，如果你不知道为何而战，这种永恒的运动可能会消解你所有沉淀下来的生命成果。学会停下来，哪怕只是一瞬间，去打量你曾踏过的土地，那将让你的奔跑不再是逃避，而是追寻。",
    minefield: "缺乏耐心的反复冲锋容易让你在接近成功的前一秒因倦殆而转向。",
    soulmate: "雄狮 (一起在广袤的原野上挥洒生命的能量)",
  },
  [AnimalType.SPIDER]: {
    name: "织网蛛",
    emoji: "🕷️",
    theme: "#020617",
    subTheme: "#f1f5f9",
    keywords: ["战略布局", "精微洞察", "静止爆发"],
    pros: ["极度耐心", "掌控细节", "以小博大"],
    insight: "你是猫头鹰的正向逻辑与灵狐多变的阴影面结合. 你并不急于出击，因为你早已织好了覆盖未来的网。",
    detailedDescription: "织网蛛是一个关于‘因果律’、‘布局’与‘耐力’的极致模型。你的人格核心是‘静态的掌控’。你不相信随机性，你相信所有的结果都是由于前期精密的投入。你的生命之路通常充满了隐忍、观察与关键时刻的雷霆一击。你具备极强的分析能力，能看穿权力流向的微弱震动。你在幕后掌控全局的快感远超台前的荣耀。这种对‘绝对安全’的变态追求是你内心的基石。请试着剪断几根丝线，让生活保留一部分混乱的自由，因为那是唯一能让你感到自己还‘活着’，而不仅是‘处于某种程序中’的契机。",
    minefield: "过分追求操控感会让生活变得机械化，失去原本的色彩与惊喜。",
    soulmate: "隼鹰 (你是地面上的网，他是天空中的眼)",
  },
  [AnimalType.BUTTERFLY]: {
    name: "幻梦之蝶",
    emoji: "🦋",
    theme: "#9d174d",
    subTheme: "#fbcfe8",
    keywords: ["灵魂蜕变", "美学至上", "瞬时感知"],
    pros: ["艺术天赋", "极强生命力", "传播希望"],
    insight: "你是开屏孔雀的美学表达与海豚社交性的升华. 你存在的意义就是把单调的现实美化成绚烂的梦境。",
    detailedDescription: "幻梦之蝶是‘蜕变’、‘唯美’与‘灵魂化境’的象征。你深信生命应当是一场持续的审美活动。你对丑陋与平庸有着生理性的抵触。你的核心动机是追求灵魂层面的极乐与感官的轻盈。你的人生充满了一次次自我否定后的华丽重生。你拥有极强的灵感捕捉能力，能将再平凡不过的瞬间点石成金。由于你的存在，世界变得可以忍受了。但请务必记住，无论翅膀上的鳞粉多么绚烂，你依然需要扎根在现实的泥土里，去面对那些最基本的生活逻辑，那是保护你脆弱美梦的唯一屏障。",
    minefield: "脆弱的心理防线让你难以承受现实的重压，容易在困境中选择幻灭式地逃避。",
    soulmate: "开屏孔雀 (共同编织一场永不落幕的人间盛宴)",
  },
  [AnimalType.PHOENIX]: {
    name: "不死鸟",
    emoji: "🏮",
    theme: "#991b1b",
    subTheme: "#f97316",
    keywords: ["涅槃重生", "永恒热忱", "精神统领"],
    pros: ["极强韧性", "启发他人", "跨越生死"],
    insight: "你是雄狮能量的升华与不死鸟灵魂的结合. 你的人生没有毁灭，只有在灰烬中不断升级的重启。",
    detailedDescription: "不死鸟是关于‘精神主权’、‘极致热忱’与‘周期性爆发’的英雄叙事。你的核心魅力源于你无惧任何形式的终结。在你的意识里，所有的挫折也不过是下一场辉煌爆发前必要的沉寂。你的动机是对生命可能性的极限挑战。你具备极强的感染力，能带领众人在绝望中重新燃志。你的人生往往充满了跨度极大的转折点。然而，这种‘对灰烬的迷恋’可能会让你下意识地破坏那些已经趋向稳定的生活，因为你习惯了通过‘重生’来确认自己的存在。学会享受平庸的宁静，那是比凤凰于飞更难的修行。",
    minefield: "过度的理想化可能让你在现实的琐碎中感到窒息，甚至为了追求‘重生’而主动制造毁灭。",
    soulmate: "深海鲸 (其沉静的深度能承接你的热烈)",
  },
  [AnimalType.RHINO]: {
    name: "铁甲犀",
    emoji: "🦏",
    theme: "#1e293b",
    subTheme: "#64748b",
    keywords: ["绝对防御", "单点突破", "厚重原则"],
    pros: ["边界感极强", "诚实可靠", "惊人爆发力"],
    insight: "你是睿象的稳重与巨龙爆发力的交点. 你平时是一座静默的山，一旦锁定目标，没有任何墙壁能挡住你。",
    detailedDescription: "铁甲犀是一个关于‘原则’、‘防御’与‘绝对执行’的重量级架构。你的灵魂里没有犹豫，只有等待下达指令前的绝对静默。当你认为某件事是‘正确且必要’的时候，你的惯性会带你碾平一切。你的动机源于对自我边界的绝对保护和对承诺的钢铁执行。你的一生通常建立在极其稳固的价值观之上，无论外界如何喧闹，你始终按自己的节奏前行。你最大的敌人是你的‘单向思维’，请试着给你的重型铁甲留出几道缝隙，让外界多变风向也吹拂进你的内心，那会让你在冲刺时多出一分灵动的智慧。",
    minefield: "过于僵硬的原则有时会变成偏执，让你在早已变化的赛道上盲目冲刺。",
    soulmate: "平原獾 (在稳健的步伐中共同前行)",
  },
  [AnimalType.CHAMELEON]: {
    name: "幻色龙",
    emoji: "🦎",
    theme: "#166534",
    subTheme: "#facc15",
    keywords: ["环境隐匿", "多维共情", "认知切换"],
    pros: ["极致生存力", "理解万物", "隐形观察者"],
    insight: "你是灵狐多变性与海豚社交本质的某种神秘融合. 你没有固定的颜色，因为你本身就是色彩的容器。",
    detailedDescription: "幻色龙是‘多维共情’、‘环境潜入’与‘生存智慧’的高级变奏。你核心的动机是对环境的极致理解与兼容。你并不追求被铭记，你追求的是在任何时代、任何族群中都能找到那一席‘绝对舒适’的立足之地。你的人格是液态的，这赋予了你理解众生之苦的神奇能力。你的生命轨迹通常是模糊且极具跨度感的。你是天生的调停者和隐秘的织网者。但这种极致的回避与隐匿，最深层的陷阱在于——当你彻底融入环境时，你可能会在这面巨大的互动镜子前，突然找不到自己的呼吸声在哪里。请保留一小块，哪怕只有百分之一的、永远不向环境妥协的纯色，那是你灵魂最后的尊严锚点。",
    minefield: "由于长期扮演他人的镜像，你可能会在某个深夜突然遗忘自己最原本的那个名字。",
    soulmate: "织网蛛 (在观察与布局中找到共鸣)",
  },
  [AnimalType.SWAN]: {
    name: "空灵天鹅",
    emoji: "🦢",
    theme: "#64748b",
    subTheme: "#f1f5f9",
    keywords: ["贵族秩序", "极致平衡", "灵魂忠诚"],
    pros: ["优雅如诗", "极高自律", "感知纯净"],
    insight: "你是猫头鹰理智与海豚情感的完美平衡点. 你在混乱中也能保持呼吸的匀称，并用优雅化解一切戾气。",
    detailedDescription: "空灵天鹅是‘秩序美学’、‘自律’与‘精神平衡’的结合体。你的人生核心是追求一种近乎神圣的‘完整感’。你不屑于在下水道里争抢食物，你追求的是在广阔湖面上优雅的滑行。你的核心动机是向世人展示，即便是在最混乱的现实里，依然可以维持一种匀称且高贵的生命节奏。你具备极强的抗干扰力，能对那些破坏你‘平衡’的信息流进行无声的排斥。你的挑战在于接受这个世界‘由于其不完美而产生的鲜活感’。不要因为追求一尘不染的羽翼，而切断了与这个虽然肮脏但却真实的尘世的必要链接。",
    minefield: "对完美的极端洁癖让你难以容忍哪怕一点点人性的幽暗与阴影。",
    soulmate: "翡翠蛇 (让雅致与野心在博弈中达成动态美感)",
  },
  [AnimalType.SCORPION]: {
    name: "砂岩蝎",
    emoji: "🦂",
    theme: "#1e293b",
    subTheme: "#ca8a04",
    keywords: ["致命静默", "内卷深度", "孤独决绝"],
    pros: ["洞察人性", "绝对专注", "反击艺术"],
    insight: "你是猛虎的决断与翡翠蛇权势的暗面融合. 你并不追求阳光下的荣耀，你只在阴影中等待那个唯一的契机。",
    detailedDescription: "砂岩蝎是一个关于‘深度洞察’、『绝对专注』与『心理博弈』的冷峻课题。你的动机极其深刻且往往不为人知。你的人生充满了对核心权力结构的探索和对人性的极限审计。你不相信唾手可得的表面现象，你只相信由痛苦和危机淬炼出来的真相。你像蛰伏在沙漠深处的观测者，极度的耐心是为了最关键的一次爆发。你对于领地的边界感超常敏锐。这种‘致命的静默’让你在这个浮躁的世界里显得极具磁性。请稍微降低你的防御水位，不要让原本可以滋润你灵魂的泉水，因为感受到你的‘刺’而提前干涸。",
    minefield: "如果你习惯了以恶意和戒备去揣摩世界，你将永远被囚禁在自己亲手挖掘的战壕里。",
    soulmate: "幻梦之蝶 (在残酷的现实与绚烂的梦境间共舞)",
  }
};
