const sentenceData = {
  day1: [
    // 1번
    {
      id: 'sentence1',
      level: 1,
      isFinal: false,
      korean: '환경이 깨끗하다.',
      chinese: {
        hanzi: ['环境', '干净'],
        pinyin: ['huánjìng', 'gānjìng'],
      },
    },
    {
      id: 'sentence1',
      level: 2,
      isFinal: false,
      korean: '환경이 점점 깨끗해지다.',
      chinese: {
        hanzi: ['环境', '越来越', '干净'],
        pinyin: ['huánjìng', 'yuèláiyuè', 'gānjìng'],
      },
    },
    {
      id: 'sentence1',
      level: 3,
      isFinal: true,
      korean: '이곳의 환경이 점점 깨끗해지고 있다.',
      chinese: {
        hanzi: ['这里', '的', '环境', '越来越', '干净'],
        pinyin: ['zhèlǐ', 'de', 'huánjìng', 'yuèláiyuè', 'gānjìng'],
      },
    },

    // 2번
    {
      id: 'sentence2',
      level: 1,
      isFinal: false,
      korean: '생수가 있다.',
      chinese: {
        hanzi: ['有', '矿泉水'],
        pinyin: ['yǒu', 'kuàngquánshuǐ'],
      },
    },
    {
      id: 'sentence2',
      level: 2,
      isFinal: false,
      korean: '생수 다섯 병이 있다.',
      chinese: {
        hanzi: ['有', '五', '瓶', '矿泉水'],
        pinyin: ['yǒu', 'wǔ', 'píng', 'kuàngquánshuǐ'],
      },
    },
    {
      id: 'sentence2',
      level: 3,
      isFinal: false,
      korean: '비닐봉지 안에 생수 다섯 병이 있다.',
      chinese: {
        hanzi: ['塑料袋里', '有', '五', '瓶', '矿泉水'],
        pinyin: ['sùliàodài lǐ', 'yǒu', 'wǔ', 'píng', 'kuàngquánshuǐ'],
      },
    },
    {
      id: 'sentence2',
      level: 4,
      isFinal: true,
      korean: '이 비닐봉지 안에 생수 다섯 병이 있다.',
      chinese: {
        hanzi: ['这个', '塑料袋', '里', '有', '五', '瓶', '矿泉水'],
        pinyin: [
          'zhège',
          'sùliàodài',
          'lǐ',
          'yǒu',
          'wǔ',
          'píng',
          'kuàngquánshuǐ',
        ],
      },
    },

    // 3번
    {
      id: 'sentence3',
      level: 1,
      isFinal: false,
      korean: '좋은 습관.',
      chinese: {
        hanzi: ['好', '习惯'],
        pinyin: ['hǎo', 'xíguàn'],
      },
    },
    {
      id: 'sentence3',
      level: 2,
      isFinal: false,
      korean: '일찍 일어나는 좋은 습관.',
      chinese: {
        hanzi: ['早起', '的', '好', '习惯'],
        pinyin: ['zǎo qǐ', 'de', 'hǎo', 'xíguàn'],
      },
    },
    {
      id: 'sentence3',
      level: 3,
      isFinal: false,
      korean: '매일 일찍 일어나는 좋은 습관.',
      chinese: {
        hanzi: ['每天', '早起', '的', '好', '习惯'],
        pinyin: ['měitiān', 'zǎo qǐ', 'de', 'hǎo', 'xíguàn'],
      },
    },
    {
      id: 'sentence3',
      level: 4,
      isFinal: false,
      korean: '매일 일찍 일어나는 좋은 습관을 기르다.',
      chinese: {
        hanzi: ['养成', '每天', '早起', '的', '好', '习惯'],
        pinyin: ['yǎngchéng', 'měitiān', 'zǎo qǐ', 'de', 'hǎo', 'xíguàn'],
      },
    },
    {
      id: 'sentence3',
      level: 5,
      isFinal: false,
      korean: '매일 일찍 일어나는 좋은 습관을 길렀다.',
      chinese: {
        hanzi: ['养成', '了', '每天', '早起', '的', '好', '习惯'],
        pinyin: ['yǎngchéng', 'le', 'měitiān', 'zǎo qǐ', 'de', 'hǎo', 'xíguàn'],
      },
    },
    {
      id: 'sentence3',
      level: 6,
      isFinal: true,
      korean: '그는 매일 일찍 일어나는 좋은 습관을 길렀다.',
      chinese: {
        hanzi: ['他', '养成', '了', '每天', '早起', '的', '好', '习惯'],
        pinyin: [
          'tā',
          'yǎngchéng',
          'le',
          'měitiān',
          'zǎo qǐ',
          'de',
          'hǎo',
          'xíguàn',
        ],
      },
    },

    // 4번
    {
      id: 'sentence4',
      level: 1,
      isFinal: false,
      korean: '서로 돕다.',
      chinese: {
        hanzi: ['互相', '帮助'],
        pinyin: ['hùxiāng', 'bāngzhù'],
      },
    },
    {
      id: 'sentence4',
      level: 2,
      isFinal: false,
      korean: '서로 도와야 한다.',
      chinese: {
        hanzi: ['要', '互相', '帮助'],
        pinyin: ['yào', 'hùxiāng', 'bāngzhù'],
      },
    },
    {
      id: 'sentence4',
      level: 3,
      isFinal: false,
      korean: '친구 사이',
      chinese: {
        hanzi: ['朋友', '之间'],
        pinyin: ['péngyou', 'zhījiān'],
      },
    },
    {
      id: 'sentence4',
      level: 4,
      isFinal: true,
      korean: '친구 사이에는 서로 도와야 한다.',
      chinese: {
        hanzi: ['朋友', '之间', '要', '互相', '帮助'],
        pinyin: ['péngyou', 'zhījiān', 'yào', 'hùxiāng', 'bāngzhù'],
      },
    },

    // 5번
    {
      id: 'sentence5',
      level: 1,
      isFinal: false,
      korean: '환경을 보호하다.',
      chinese: {
        hanzi: ['保护', '环境'],
        pinyin: ['bǎohù', 'huánjìng'],
      },
    },
    {
      id: 'sentence5',
      level: 2,
      isFinal: false,
      korean: '환경 보호는 임무이다.',
      chinese: {
        hanzi: ['保护', '环境', '是', '任务'],
        pinyin: ['bǎohù', 'huánjìng', 'shì', 'rènwu'],
      },
    },
    {
      id: 'sentence5',
      level: 3,
      isFinal: false,
      korean: '모든 사람의 임무',
      chinese: {
        hanzi: ['每', '个', '人', '的', '任务'],
        pinyin: ['měi', 'ge', 'rén', 'de', 'rènwu'],
      },
    },
    {
      id: 'sentence5',
      level: 4,
      isFinal: true,
      korean: '환경을 보호하는 것은 모든 사람의 임무이다.',
      chinese: {
        hanzi: ['保护', '环境', '是', '每', '个', '人', '的', '任务'],
        pinyin: ['bǎohù', 'huánjìng', 'shì', 'měi', 'ge', 'rén', 'de', 'rènwu'],
      },
    },
    {
      id: 'sentence6',
      level: 1,
      isFinal: false,
      korean: '감기가 심하다.',
      chinese: {
        hanzi: ['感冒', '得', '严重'],
        pinyin: ['gǎnmào', 'de', 'yánzhòng'],
      },
    },
    {
      id: 'sentence6',
      level: 2,
      isFinal: false,
      korean: '감기가 너무 심하다.',
      chinese: {
        hanzi: ['感冒', '得', '太', '严重'],
        pinyin: ['gǎnmào', 'de', 'tài', 'yánzhòng'],
      },
    },
    {
      id: 'sentence6',
      level: 3,
      isFinal: false,
      korean: '요즘 감기가 너무 심하다.',
      chinese: {
        hanzi: ['最近', '感冒', '得', '太', '严重', '了'],
        pinyin: ['zuìjìn', 'gǎnmào', 'de', 'tài', 'yánzhòng', 'le'],
      },
    },
    {
      id: 'sentence6',
      level: 4,
      isFinal: true,
      korean: '너 요즘 감기가 너무 심하네.',
      chinese: {
        hanzi: ['你', '最近', '感冒', '得', '太', '严重', '了'],
        pinyin: ['nǐ', 'zuìjìn', 'gǎnmào', 'de', 'tài', 'yánzhòng', 'le'],
      },
    },
    // 7번
    {
      id: 'sentence7',
      level: 1,
      isFinal: false,
      korean: '문자를 보내다.',
      chinese: {
        hanzi: ['发', '短信'],
        pinyin: ['fā', 'duǎnxìn'],
      },
    },
    {
      id: 'sentence7',
      level: 2,
      isFinal: false,
      korean: '문자를 보냈다.',
      chinese: {
        hanzi: ['发', '短信了'],
        pinyin: ['fā', 'duǎnxìn le'],
      },
    },
    {
      id: 'sentence7',
      level: 3,
      isFinal: false,
      korean: '엄마에게 문자를 보냈다.',
      chinese: {
        hanzi: ['给', '妈妈', '发', '短信了'],
        pinyin: ['gěi', 'māma', 'fā', 'duǎnxìn le'],
      },
    },
    {
      id: 'sentence7',
      level: 4,
      isFinal: false,
      korean: '엄마에게 문자를 보냈니?',
      chinese: {
        hanzi: ['给', '妈妈', '发', '短信了', '吗'],
        pinyin: ['gěi', 'māma', 'fā', 'duǎnxìn le', 'ma'],
      },
    },
    {
      id: 'sentence7',
      level: 5,
      isFinal: true,
      korean: '너 엄마에게 문자를 보냈니?',
      chinese: {
        hanzi: ['你', '给', '妈妈', '发', '短信了', '吗'],
        pinyin: ['nǐ', 'gěi', 'māma', 'fā', 'duǎnxìn le', 'ma'],
      },
    },

    // 8번
    {
      id: 'sentence8',
      level: 1,
      isFinal: false,
      korean: '평소보다 많다.',
      chinese: {
        hanzi: ['比', '平时', '多'],
        pinyin: ['bǐ', 'píngshí', 'duō'],
      },
    },
    {
      id: 'sentence8',
      level: 2,
      isFinal: false,
      korean: '평소보다 많아졌다.',
      chinese: {
        hanzi: ['比', '平时', '多', '了'],
        pinyin: ['bǐ', 'píngshí', 'duō', 'le'],
      },
    },
    {
      id: 'sentence8',
      level: 3,
      isFinal: false,
      korean: '평소보다 두 배 많아졌다.',
      chinese: {
        hanzi: ['比', '平时', '多', '了', '一', '倍'],
        pinyin: ['bǐ', 'píngshí', 'duō', 'le', 'yí', 'bèi'],
      },
    },
    {
      id: 'sentence8',
      level: 4,
      isFinal: false,
      korean: '공원에 가다.',
      chinese: {
        hanzi: ['去', '公园'],
        pinyin: ['qù', 'gōngyuán'],
      },
    },
    {
      id: 'sentence8',
      level: 5,
      isFinal: false,
      korean: '공원에 가는 사람',
      chinese: {
        hanzi: ['去', '公园', '的', '人'],
        pinyin: ['qù', 'gōngyuán', 'de', 'rén'],
      },
    },
    {
      id: 'sentence8',
      level: 6,
      isFinal: true,
      korean: '공원에 가는 사람이 평소보다 두 배 많아졌다.',
      chinese: {
        hanzi: ['去', '公园', '的', '人', '比', '平时', '多', '了', '一', '倍'],
        pinyin: [
          'qù',
          'gōngyuán',
          'de',
          'rén',
          'bǐ',
          'píngshí',
          'duō',
          'le',
          'yí',
          'bèi',
        ],
      },
    },
    // 9번
    {
      id: 'sentence9',
      level: 1,
      isFinal: false,
      korean: '꺼내다.',
      chinese: {
        hanzi: ['拿', '出来'],
        pinyin: ['ná', 'chūlai'],
      },
    },
    {
      id: 'sentence9',
      level: 2,
      isFinal: false,
      korean: '여권을 꺼내다.',
      chinese: {
        hanzi: ['把', '护照', '拿', '出来'],
        pinyin: ['bǎ', 'hùzhào', 'ná', 'chūlai'],
      },
    },
    {
      id: 'sentence9',
      level: 3,
      isFinal: false,
      korean: '당신은 여권을 꺼내세요.',
      chinese: {
        hanzi: ['你', '把', '护照', '拿', '出来'],
        pinyin: ['nǐ', 'bǎ', 'hùzhào', 'ná', 'chūlai'],
      },
    },
    {
      id: 'sentence9',
      level: 4,
      isFinal: true,
      korean: '번거로우시겠지만 (당신은) 여권을 꺼내 주세요.',
      chinese: {
        hanzi: ['麻烦', '您', '把', '护照', '拿', '出来'],
        pinyin: ['máfan', 'nín', 'bǎ', 'hùzhào', 'ná', 'chūlai'],
      },
    },
    // 10번
    {
      id: 'sentence10',
      level: 1,
      isFinal: false,
      korean: '양식을 작성하다.',
      chinese: {
        hanzi: ['填写', '表格'],
        pinyin: ['tiánxiě', 'biǎogé'],
      },
    },
    {
      id: 'sentence10',
      level: 2,
      isFinal: false,
      korean: '연필로 양식을 작성하다.',
      chinese: {
        hanzi: ['用', '铅笔', '填写', '表格'],
        pinyin: ['yòng', 'qiānbǐ', 'tiánxiě', 'biǎogé'],
      },
    },
    {
      id: 'sentence10',
      level: 3,
      isFinal: false,
      korean: '먼저 연필로 양식을 작성하다.',
      chinese: {
        hanzi: ['先', '用', '铅笔', '填写', '表格'],
        pinyin: ['xiān', 'yòng', 'qiānbǐ', 'tiánxiě', 'biǎogé'],
      },
    },
    {
      id: 'sentence10',
      level: 4,
      isFinal: true,
      korean: '먼저 연필로 양식을 작성해 주세요.',
      chinese: {
        hanzi: ['请', '先', '用', '铅笔', '填写', '表格'],
        pinyin: ['qǐng', 'xiān', 'yòng', 'qiānbǐ', 'tiánxiě', 'biǎogé'],
      },
    },
  ],
  day2: [
    // 6번
    {
      id: 'sentence11',
      level: 1,
      isFinal: false,
      korean: '전화하다.',
      chinese: {
        hanzi: ['打', '电话'],
        pinyin: ['dǎ', 'diànhuà'],
      },
    },
    {
      id: 'sentence11',
      level: 2,
      isFinal: false,
      korean: '전화하는 것을 금지하다.',
      chinese: {
        hanzi: ['禁止', '打', '电话'],
        pinyin: ['jìnzhǐ', 'dǎ', 'diànhuà'],
      },
    },
    {
      id: 'sentence11',
      level: 3,
      isFinal: true,
      korean: '박물관 안에서는 전화하는 것이 금지되어 있다.',
      chinese: {
        hanzi: ['博物馆', '里', '禁止', '打', '电话'],
        pinyin: ['bówùguǎn', 'lǐ', 'jìnzhǐ', 'dǎ', 'diànhuà'],
      },
    },
    // 7번
    {
      id: 'sentence12',
      level: 1,
      isFinal: false,
      korean: '좋은 점이 있다.',
      chinese: {
        hanzi: ['有', '好处'],
        pinyin: ['yǒu', 'hǎochu'],
      },
    },
    {
      id: 'sentence12',
      level: 2,
      isFinal: false,
      korean: '어느 정도의 좋은 점이 있다.',
      chinese: {
        hanzi: ['有', '一定', '的', '好处'],
        pinyin: ['yǒu', 'yídìng', 'de', 'hǎochu'],
      },
    },
    {
      id: 'sentence12',
      level: 3,
      isFinal: false,
      korean: '몸에 어느 정도 좋은 점이 있다.',
      chinese: {
        hanzi: ['对', '身体', '有', '一定', '的', '好处'],
        pinyin: ['duì', 'shēntǐ', 'yǒu', 'yídìng', 'de', 'hǎochu'],
      },
    },
    {
      id: 'sentence12',
      level: 4,
      isFinal: true,
      korean: '운동은 몸에 어느 정도 좋은 점이 있다.',
      chinese: {
        hanzi: ['锻炼', '对', '身体', '有', '一定', '的', '好处'],
        pinyin: ['duànliàn', 'duì', 'shēntǐ', 'yǒu', 'yídìng', 'de', 'hǎochu'],
      },
    },

    // 8번
    {
      id: 'sentence13',
      level: 1,
      isFinal: false,
      korean: '(노래를) 잘 부르다.',
      chinese: {
        hanzi: ['唱', '得', '棒'],
        pinyin: ['chàng', 'de', 'bàng'],
      },
    },
    {
      id: 'sentence13',
      level: 2,
      isFinal: false,
      korean: '(노래를) 아주 잘 부르다.',
      chinese: {
        hanzi: ['唱', '得', '棒', '极', '了'],
        pinyin: ['chàng', 'de', 'bàng', 'jí', 'le'],
      },
    },
    {
      id: 'sentence13',
      level: 3,
      isFinal: false,
      korean: '그는 노래를 부르다.',
      chinese: {
        hanzi: ['他', '唱', '歌'],
        pinyin: ['tā', 'chàng', 'gē'],
      },
    },
    {
      id: 'sentence13',
      level: 4,
      isFinal: true,
      korean:
        '그는 노래를 정말 잘 부른다.(=그는 노래를 부르는데 정말 잘 부른다.)',
      chinese: {
        hanzi: ['他', '唱', '歌', '唱', '得', '棒', '极', '了'],
        pinyin: ['tā', 'chàng', 'gē', 'chàng', 'de', 'bàng', 'jí', 'le'],
      },
    },

    // 9번
    {
      id: 'sentence14',
      level: 1,
      isFinal: false,
      korean: '이 커피',
      chinese: {
        hanzi: ['这', '杯', '咖啡'],
        pinyin: ['zhè', 'bēi', 'kāfēi'],
      },
    },
    {
      id: 'sentence14',
      level: 2,
      isFinal: false,
      korean: '무슨 맛',
      chinese: {
        hanzi: ['什么', '味道'],
        pinyin: ['shénme', 'wèidào'],
      },
    },
    {
      id: 'sentence14',
      level: 3,
      isFinal: false,
      korean: '무슨 맛의 (커피)',
      chinese: {
        hanzi: ['什么', '味道', '的'],
        pinyin: ['shénme', 'wèidào', 'de'],
      },
    },
    {
      id: 'sentence14',
      level: 4,
      isFinal: true,
      korean: '이 커피는 무슨 맛이에요?',
      chinese: {
        hanzi: ['这', '杯', '咖啡', '是', '什么', '味道', '的'],
        pinyin: ['zhè', 'bēi', 'kāfēi', 'shì', 'shénme', 'wèidào', 'de'],
      },
    },
    // 15번
    {
      id: 'sentence15',
      level: 1,
      isFinal: false,
      korean: '걸려 있다.',
      chinese: {
        hanzi: ['挂', '着'],
        pinyin: ['guà', 'zhe'],
      },
    },
    {
      id: 'sentence15',
      level: 2,
      isFinal: false,
      korean: '옷 한 벌이 걸려 있다.',
      chinese: {
        hanzi: ['挂', '着', '一', '件', '衣服'],
        pinyin: ['guà', 'zhe', 'yí', 'jiàn', 'yīfu'],
      },
    },
    {
      id: 'sentence15',
      level: 3,
      isFinal: true,
      korean: '문에 옷 한 벌이 걸려 있다.',
      chinese: {
        hanzi: ['门', '上', '挂', '着', '一', '件', '衣服'],
        pinyin: ['mén', 'shàng', 'guà', 'zhe', 'yí', 'jiàn', 'yīfu'],
      },
    },
    // 16번
    {
      id: 'sentence16',
      level: 1,
      isFinal: false,
      korean: '인상을 남기다.',
      chinese: {
        hanzi: ['留下', '印象'],
        pinyin: ['liúxià', 'yìnxiàng'],
      },
    },
    {
      id: 'sentence16',
      level: 2,
      isFinal: false,
      korean: '깊은 인상을 남기다.',
      chinese: {
        hanzi: ['留下', '很', '深', '的', '印象'],
        pinyin: ['liúxià', 'hěn', 'shēn', 'de', 'yìnxiàng'],
      },
    },
    {
      id: 'sentence16',
      level: 3,
      isFinal: false,
      korean: '나에게 깊은 인상을 남기다.',
      chinese: {
        hanzi: ['给', '我', '留下', '很', '深', '的', '印象'],
        pinyin: ['gěi', 'wǒ', 'liúxià', 'hěn', 'shēn', 'de', 'yìnxiàng'],
      },
    },
    {
      id: 'sentence16',
      level: 4,
      isFinal: true,
      korean: '그 영화는 나에게 깊은 인상을 남긴다.',
      chinese: {
        hanzi: [
          '那',
          '部',
          '电影',
          '给',
          '我',
          '留下',
          '很',
          '深',
          '的',
          '印象',
        ],
        pinyin: [
          'nà',
          'bù',
          'diànyǐng',
          'gěi',
          'wǒ',
          'liúxià',
          'hěn',
          'shēn',
          'de',
          'yìnxiàng',
        ],
      },
    },
    // 17번
    {
      id: 'sentence17',
      level: 1,
      isFinal: false,
      korean: '업무 수준, 일의 실력',
      chinese: {
        hanzi: ['工作', '水平'],
        pinyin: ['gōngzuò', 'shuǐpíng'],
      },
    },
    {
      id: 'sentence17',
      level: 2,
      isFinal: false,
      korean: '업무 수준이 이상적이다.',
      chinese: {
        hanzi: ['工作', '水平', '理想'],
        pinyin: ['gōngzuò', 'shuǐpíng', 'lǐxiǎng'],
      },
    },
    {
      id: 'sentence17',
      level: 3,
      isFinal: false,
      korean: '업무 수준이 충분히 이상적이지 않다(그다지 이상적이지 않다).',
      chinese: {
        hanzi: ['工作', '水平', '不', '够', '理想'],
        pinyin: ['gōngzuò', 'shuǐpíng', 'bú', 'gòu', 'lǐxiǎng'],
      },
    },
    {
      id: 'sentence17',
      level: 4,
      isFinal: true,
      korean: '그의 업무 수준은 그다지 이상적이지 않다.',
      chinese: {
        hanzi: ['他', '的', '工作', '水平', '不', '够', '理想'],
        pinyin: ['Tā', 'de', 'gōngzuò', 'shuǐpíng', 'bú', 'gòu', 'lǐxiǎng'],
      },
    },
    // 18번
    {
      id: 'sentence18',
      level: 1,
      isFinal: false,
      korean: '다 먹었다.',
      chinese: {
        hanzi: ['吃', '完', '了'],
        pinyin: ['chī', 'wán', 'le'],
      },
    },
    {
      id: 'sentence18',
      level: 2,
      isFinal: false,
      korean: '언니에게 다 먹혔다(언니가 다 먹어버렸다).',
      chinese: {
        hanzi: ['被', '姐姐', '吃', '完', '了'],
        pinyin: ['bèi', 'jiějie', 'chī', 'wán', 'le'],
      },
    },
    {
      id: 'sentence18',
      level: 3,
      isFinal: false,
      korean: '책상 위의 케이크',
      chinese: {
        hanzi: ['桌子', '上', '的', '蛋糕'],
        pinyin: ['zhuōzi', 'shàng', 'de', 'dàngāo'],
      },
    },
    {
      id: 'sentence18',
      level: 4,
      isFinal: true,
      korean:
        '책상 위의 케이크를 언니가 다 먹어버렸다. (=책상 위의 케이크가 언니에게 다 먹혔다.)',
      chinese: {
        hanzi: ['桌子', '上', '的', '蛋糕', '被', '姐姐', '吃', '完', '了'],
        pinyin: [
          'zhuōzi',
          'shàng',
          'de',
          'dàngāo',
          'bèi',
          'jiějie',
          'chī',
          'wán',
          'le',
        ],
      },
    },
    {
      id: 'sentence19',
      level: 1,
      isFinal: false,
      korean: '캐리어 안에.',
      chinese: {
        hanzi: ['行李箱', '里'],
        pinyin: ['xínglǐxiāng', 'lǐ'],
      },
    },
    {
      id: 'sentence19',
      level: 2,
      isFinal: false,
      korean: '캐리어 안에 넣다.',
      chinese: {
        hanzi: ['放进', '行李箱', '里'],
        pinyin: ['fàngjìn', 'xínglǐxiāng', 'lǐ'],
      },
    },
    {
      id: 'sentence19',
      level: 3,
      isFinal: false,
      korean: '노트북을 캐리어 안에 넣다.',
      chinese: {
        hanzi: ['把', '电脑', '放进', '行李箱', '里'],
        pinyin: ['bǎ', 'diànnǎo', 'fàngjìn', 'xínglǐxiāng', 'lǐ'],
      },
    },
    {
      id: 'sentence19',
      level: 4,
      isFinal: true,
      korean: '노트북을 캐리어 안에 넣어주세요.',
      chinese: {
        hanzi: ['请', '把', '电脑', '放进', '行李箱', '里'],
        pinyin: ['qǐng', 'bǎ', 'diànnǎo', 'fàngjìn', 'xínglǐxiāng', 'lǐ'],
      },
    },
    {
      id: 'sentence20',
      level: 1,
      isFinal: false,
      korean: '인사하다.',
      chinese: {
        hanzi: ['打', '招呼'],
        pinyin: ['dǎ', 'zhāohu'],
      },
    },
    {
      id: 'sentence20',
      level: 2,
      isFinal: false,
      korean: '누구에게 인사해?',
      chinese: {
        hanzi: ['跟', '谁', '打', '招呼'],
        pinyin: ['gēn', 'shéi', 'dǎ', 'zhāohu'],
      },
    },
    {
      id: 'sentence20',
      level: 3,
      isFinal: false,
      korean: '누구에게 인사하고 있는 거야?',
      chinese: {
        hanzi: ['在', '跟', '谁', '打', '招呼'],
        pinyin: ['zài', 'gēn', 'shéi', 'dǎ', 'zhāohu'],
      },
    },
    {
      id: 'sentence20',
      level: 4,
      isFinal: true,
      korean: '저 배우는 누구에게 인사하고 있는 거야?',
      chinese: {
        hanzi: ['那', '个', '演员', '在', '跟', '谁', '打', '招呼'],
        pinyin: ['nà', 'ge', 'yǎnyuán', 'zài', 'gēn', 'shéi', 'dǎ', 'zhāohu'],
      },
    },
  ],
  day3: [
    // 21번
    {
      id: 'sentence21',
      level: 1,
      isFinal: false,
      korean: '언니는 사람이다.',
      chinese: {
        hanzi: ['姐姐', '是', '人'],
        pinyin: ['jiějie', 'shì', 'rén'],
      },
    },
    {
      id: 'sentence21',
      level: 2,
      isFinal: false,
      korean: '유머러스한 사람',
      chinese: {
        hanzi: ['幽默', '的', '人'],
        pinyin: ['yōumò', 'de', 'rén'],
      },
    },
    {
      id: 'sentence21',
      level: 3,
      isFinal: false,
      korean: '가장 유머러스한 사람',
      chinese: {
        hanzi: ['最', '幽默', '的', '人'],
        pinyin: ['zuì', 'yōumò', 'de', 'rén'],
      },
    },
    {
      id: 'sentence21',
      level: 4,
      isFinal: false,
      korean: '세상에서 가장 유머러스한 사람',
      chinese: {
        hanzi: ['世界', '上', '最', '幽默', '的', '人'],
        pinyin: ['shìjiè', 'shàng', 'zuì', 'yōumò', 'de', 'rén'],
      },
    },
    {
      id: 'sentence21',
      level: 5,
      isFinal: true,
      korean: '언니는 세상에서 가장 유머러스한 사람이다.',
      chinese: {
        hanzi: ['姐姐', '是', '世界', '上', '最', '幽默', '的', '人'],
        pinyin: [
          'jiějie',
          'shì',
          'shìjiè',
          'shàng',
          'zuì',
          'yōumò',
          'de',
          'rén',
        ],
      },
    },
    // 22번
    {
      id: 'sentence22',
      level: 1,
      isFinal: false,
      korean: '식었다.',
      chinese: {
        hanzi: ['凉了'],
        pinyin: ['liáng le'],
      },
    },
    {
      id: 'sentence22',
      level: 2,
      isFinal: false,
      korean: '밥이 식었다.',
      chinese: {
        hanzi: ['饭', '凉', '了'],
        pinyin: ['fàn', 'liáng', 'le'],
      },
    },
    {
      id: 'sentence22',
      level: 3,
      isFinal: true,
      korean: '그릇 속의 밥이 식었다.',
      chinese: {
        hanzi: ['碗', '里', '的', '饭', '凉', '了'],
        pinyin: ['wǎn', 'lǐ', 'de', 'fàn', 'liáng', 'le'],
      },
    },
    // 13번
    {
      id: 'sentence23',
      level: 1,
      isFinal: false,
      korean: '주목을 끌다.',
      chinese: {
        hanzi: ['引起', '重视'],
        pinyin: ['yǐnqǐ', 'zhòngshì'],
      },
    },
    {
      id: 'sentence23',
      level: 2,
      isFinal: false,
      korean: '주목을 끌었다.',
      chinese: {
        hanzi: ['引起了', '重视'],
        pinyin: ['yǐnqǐ le', 'zhòngshì'],
      },
    },
    {
      id: 'sentence23',
      level: 3,
      isFinal: false,
      korean: '모두의 주목을 끌었다.',
      chinese: {
        hanzi: ['引起了', '大家', '的', '重视'],
        pinyin: ['yǐnqǐ le', 'dàjiā', 'de', 'zhòngshì'],
      },
    },
    {
      id: 'sentence23',
      level: 4,
      isFinal: false,
      korean: '발언은 모두의 주목을 끌었다.',
      chinese: {
        hanzi: ['发言', '引起了', '大家', '的', '重视'],
        pinyin: ['fāyán', 'yǐnqǐ le', 'dàjiā', 'de', 'zhòngshì'],
      },
    },
    {
      id: 'sentence23',
      level: 5,
      isFinal: true,
      korean: '그의 발언은 모두의 주목을 끌었다.',
      chinese: {
        hanzi: ['他', '的', '发言', '引起了', '大家', '的', '重视'],
        pinyin: ['tā', 'de', 'fāyán', 'yǐnqǐ le', 'dàjiā', 'de', 'zhòngshì'],
      },
    },
    // 24번
    {
      id: 'sentence24',
      level: 1,
      isFinal: false,
      korean: '내용이 특별하다.',
      chinese: {
        hanzi: ['内容', '特别'],
        pinyin: ['nèiróng', 'tèbié'],
      },
    },
    {
      id: 'sentence24',
      level: 2,
      isFinal: false,
      korean: '내용이 약간 특별하다.',
      chinese: {
        hanzi: ['内容', '有点儿', '特别'],
        pinyin: ['nèiróng', 'yǒudiǎnr', 'tèbié'],
      },
    },
    {
      id: 'sentence24',
      level: 3,
      isFinal: false,
      korean: '이 내용이 약간 특별하다.',
      chinese: {
        hanzi: ['这个', '内容', '有点儿', '特别'],
        pinyin: ['zhège', 'nèiróng', 'yǒudiǎnr', 'tèbié'],
      },
    },
    {
      id: 'sentence24',
      level: 4,
      isFinal: true,
      korean: '잡지의 이 내용이 약간 특별하다.',
      chinese: {
        hanzi: ['杂志', '上', '的', '这个', '内容', '有点儿', '特别'],
        pinyin: [
          'zázhì',
          'shàng',
          'de',
          'zhège',
          'nèiróng',
          'yǒudiǎnr',
          'tèbié',
        ],
      },
    },
    // 25번
    {
      id: 'sentence25',
      level: 1,
      isFinal: false,
      korean: '건배하다.',
      chinese: {
        hanzi: ['干杯'],
        pinyin: ['gānbēi'],
      },
    },
    {
      id: 'sentence25',
      level: 2,
      isFinal: false,
      korean: '미래를 위해 건배하다.',
      chinese: {
        hanzi: ['为', '未来', '干杯'],
        pinyin: ['wèi', 'wèilái', 'gānbēi'],
      },
    },
    {
      id: 'sentence25',
      level: 3,
      isFinal: true,
      korean: '우리 미래를 위해 건배합시다.',
      chinese: {
        hanzi: ['让', '我们', '为', '未来', '干杯'],
        pinyin: ['ràng', 'wǒmen', 'wèi', 'wèilái', 'gānbēi'],
      },
    },
    // 26번
    {
      id: 'sentence26',
      level: 1,
      isFinal: false,
      korean: '이유를 믿다.',
      chinese: {
        hanzi: ['相信', '理由'],
        pinyin: ['xiāngxìn', 'lǐyóu'],
      },
    },
    {
      id: 'sentence26',
      level: 2,
      isFinal: false,
      korean: '어떤 이유든 믿다.',
      chinese: {
        hanzi: ['相信', '任何', '理由'],
        pinyin: ['xiāngxìn', 'rènhé', 'lǐyóu'],
      },
    },
    {
      id: 'sentence26',
      level: 3,
      isFinal: false,
      korean: '그의 어떤 이유든 믿다.',
      chinese: {
        hanzi: ['相信', '他', '的', '任何', '理由'],
        pinyin: ['xiāngxìn', 'tā', 'de', 'rènhé', 'lǐyóu'],
      },
    },
    {
      id: 'sentence26',
      level: 4,
      isFinal: false,
      korean: '더 이상 그의 어떤 이유도 믿지 않는다.',
      chinese: {
        hanzi: ['不再', '相信', '他', '的', '任何', '理由'],
        pinyin: ['bú zài', 'xiāngxìn', 'tā', 'de', 'rènhé', 'lǐyóu'],
      },
    },
    {
      id: 'sentence26',
      level: 5,
      isFinal: true,
      korean: '우리는 더 이상 그의 어떤 이유도 믿지 않는다.',
      chinese: {
        hanzi: ['我们', '不再', '相信', '他', '的', '任何', '理由'],
        pinyin: ['wǒmen', 'bú zài', 'xiāngxìn', 'tā', 'de', 'rènhé', 'lǐyóu'],
      },
    },
    // 27번
    {
      id: 'sentence27',
      level: 1,
      isFinal: false,
      korean: '과제가 많다.',
      chinese: {
        hanzi: ['任务', '重'],
        pinyin: ['rènwu', 'zhòng'],
      },
    },
    {
      id: 'sentence27',
      level: 2,
      isFinal: false,
      korean: '과제가 매우 많다.',
      chinese: {
        hanzi: ['任务', '非常', '重'],
        pinyin: ['rènwu', 'fēicháng', 'zhòng'],
      },
    },
    {
      id: 'sentence27',
      level: 3,
      isFinal: false,
      korean: '학습 과제가 매우 많다.',
      chinese: {
        hanzi: ['学习', '任务', '非常', '重'],
        pinyin: ['xuéxí', 'rènwu', 'fēicháng', 'zhòng'],
      },
    },
    {
      id: 'sentence27',
      level: 4,
      isFinal: true,
      korean: '이 수업의 학습 과제는 매우 많다.',
      chinese: {
        hanzi: ['这', '门', '课', '的', '学习', '任务', '非常', '重'],
        pinyin: [
          'zhè',
          'mén',
          'kè',
          'de',
          'xuéxí',
          'rènwu',
          'fēicháng',
          'zhòng',
        ],
      },
    },
    {
      id: 'sentence28',
      level: 1,
      isFinal: false,
      korean: '뛰어난 사람',
      chinese: {
        hanzi: ['出色', '的', '人'],
        pinyin: ['chūsè', 'de', 'rén'],
      },
    },
    {
      id: 'sentence28',
      level: 2,
      isFinal: false,
      korean: '뛰어난 사람이 되다.',
      chinese: {
        hanzi: ['成为', '出色', '的', '人'],
        pinyin: ['chéngwéi', 'chūsè', 'de', 'rén'],
      },
    },
    {
      id: 'sentence28',
      level: 3,
      isFinal: false,
      korean: '너가 ......한 것을 축하한다.',
      chinese: {
        hanzi: ['祝贺你……'],
        pinyin: ['zhùhè nǐ'],
      },
    },
    {
      id: 'sentence28',
      level: 4,
      isFinal: true,
      korean: '(너가) 뛰어난 사람이 된 것을 축하해.',
      chinese: {
        hanzi: ['祝贺', '你', '成为', '出色', '的', '人'],
        pinyin: ['zhùhè', 'nǐ', 'chéngwéi', 'chūsè', 'de', 'rén'],
      },
    },
    {
      id: 'sentence29',
      level: 1,
      isFinal: false,
      korean: '택배를 부치다.',
      chinese: {
        hanzi: ['寄', '快递'],
        pinyin: ['jì', 'kuàidì'],
      },
    },
    {
      id: 'sentence29',
      level: 2,
      isFinal: false,
      korean: '택배 하나를 부치다.',
      chinese: {
        hanzi: ['寄', '个', '快递'],
        pinyin: ['jì', 'ge', 'kuàidì'],
      },
    },
    {
      id: 'sentence29',
      level: 3,
      isFinal: false,
      korean: '나를 도와 택배 하나를 부쳐줘.',
      chinese: {
        hanzi: ['帮', '我', '寄', '个', '快递'],
        pinyin: ['bāng', 'wǒ', 'jì', 'ge', 'kuàidì'],
      },
    },
    {
      id: 'sentence29',
      level: 4,
      isFinal: false,
      korean: '겸사겸사 나 대신 택배 하나를 부쳐줘.',
      chinese: {
        hanzi: ['顺便', '帮', '我', '寄', '个', '快递'],
        pinyin: ['shùnbiàn', 'bāng', 'wǒ', 'jì', 'ge', 'kuàidì'],
      },
    },
    {
      id: 'sentence29',
      level: 5,
      isFinal: false,
      korean: '겸사겸사 나 대신 택배 하나를 부쳐줄 수 있나요?',
      chinese: {
        hanzi: ['可以', '顺便', '帮', '我', '寄', '个', '快递', '吗'],
        pinyin: ['kěyǐ', 'shùnbiàn', 'bāng', 'wǒ', 'jì', 'ge', 'kuàidì', 'ma'],
      },
    },
    {
      id: 'sentence29',
      level: 6,
      isFinal: true,
      korean: '너는 나 대신 택배 하나를 부쳐줄 수 있니?',
      chinese: {
        hanzi: ['你', '可以', '顺便', '帮', '我', '寄', '个', '快递', '吗'],
        pinyin: [
          'nǐ',
          'kěyǐ',
          'shùnbiàn',
          'bāng',
          'wǒ',
          'jì',
          'ge',
          'kuàidì',
          'ma',
        ],
      },
    },
    {
      id: 'sentence30',
      level: 1,
      isFinal: false,
      korean: '일이 번거롭다.',
      chinese: {
        hanzi: ['事情', '麻烦'],
        pinyin: ['shìqing', 'máfan'],
      },
    },
    {
      id: 'sentence30',
      level: 2,
      isFinal: false,
      korean: '일이 더 번거롭다.',
      chinese: {
        hanzi: ['事情', '更', '麻烦'],
        pinyin: ['shìqing', 'gèng', 'máfan'],
      },
    },
    {
      id: 'sentence30',
      level: 3,
      isFinal: false,
      korean: '일이 더 번거로워질 것이다.',
      chinese: {
        hanzi: ['事情', '会', '更', '麻烦'],
        pinyin: ['shìqing', 'huì', 'gèng', 'máfan'],
      },
    },
    {
      id: 'sentence30',
      level: 4,
      isFinal: true,
      korean:
        '일이 가끔 더 번거로워질 수 있다. (=일이 가끔 더 번거로워질 것이다.)',
      chinese: {
        hanzi: ['事情', '有时', '会', '更', '麻烦'],
        pinyin: ['shìqing', 'yǒushí', 'huì', 'gèng', 'máfan'],
      },
    },
  ],
  day4: [
    // 31번
    {
      id: 'sentence31',
      level: 1,
      isFinal: false,
      korean: '매우 중요하다.',
      chinese: {
        hanzi: ['非常', '重要'],
        pinyin: ['fēicháng', 'zhòngyào'],
      },
    },
    {
      id: 'sentence31',
      level: 2,
      isFinal: false,
      korean: '지지는 매우 중요하다.',
      chinese: {
        hanzi: ['支持', '非常', '重要'],
        pinyin: ['zhīchí', 'fēicháng', 'zhòngyào'],
      },
    },
    {
      id: 'sentence31',
      level: 3,
      isFinal: true,
      korean: '부모님의 지지는 매우 중요하다.',
      chinese: {
        hanzi: ['父母', '的', '支持', '非常', '重要'],
        pinyin: ['fùmǔ', 'de', 'zhīchí', 'fēicháng', 'zhòngyào'],
      },
    },
    {
      id: 'sentence32',
      level: 1,
      isFinal: false,
      korean: '다른 도시.',
      chinese: {
        hanzi: ['不同', '的', '城市'],
        pinyin: ['bùtóng', 'de', 'chéngshì'],
      },
    },
    {
      id: 'sentence32',
      level: 2,
      isFinal: false,
      korean: '다른 도시에서 왔다.',
      chinese: {
        hanzi: ['来自', '不同', '的', '城市'],
        pinyin: ['láizì', 'bùtóng', 'de', 'chéngshì'],
      },
    },
    {
      id: 'sentence32',
      level: 3,
      isFinal: true,
      korean: '참가자들은 다른 도시에서 왔다.',
      chinese: {
        hanzi: ['参加者', '来自', '不同', '的', '城市'],
        pinyin: ['cānjiāzhě', 'láizì', 'bùtóng', 'de', 'chéngshì'],
      },
    },
    // 33번
    {
      id: 'sentence33',
      level: 1,
      isFinal: false,
      korean: '가장 성실하다.',
      chinese: {
        hanzi: ['最', '认真'],
        pinyin: ['zuì', 'rènzhēn'],
      },
    },
    {
      id: 'sentence33',
      level: 2,
      isFinal: false,
      korean: '가장 성실한 (사람)',
      chinese: {
        hanzi: ['最', '认真', '的'],
        pinyin: ['zuì', 'rènzhēn', 'de'],
      },
    },
    {
      id: 'sentence33',
      level: 3,
      isFinal: false,
      korean: '모든 사람 중에서 가장 성실한 (사람)',
      chinese: {
        hanzi: ['所有', '人', '中', '最', '认真', '的'],
        pinyin: ['suǒyǒu', 'rén', 'zhōng', 'zuì', 'rènzhēn', 'de'],
      },
    },
    {
      id: 'sentence33',
      level: 4,
      isFinal: true,
      korean: '그는 모든 사람 중에서 가장 성실한 사람이다.',
      chinese: {
        hanzi: ['他', '是', '所有', '人', '中', '最', '认真', '的'],
        pinyin: ['tā', 'shì', 'suǒyǒu', 'rén', 'zhōng', 'zuì', 'rènzhēn', 'de'],
      },
    },
    //34
    {
      id: 'sentence34',
      level: 1,
      isFinal: false,
      korean: '문서를 인쇄하다.',
      chinese: {
        hanzi: ['打印', '文件'],
        pinyin: ['dǎyìn', 'wénjiàn'],
      },
    },
    {
      id: 'sentence34',
      level: 2,
      isFinal: false,
      korean: '문서를 인쇄하는 중이다.',
      chinese: {
        hanzi: ['正在', '打印', '文件'],
        pinyin: ['zhèngzài', 'dǎyìn', 'wénjiàn'],
      },
    },
    {
      id: 'sentence34',
      level: 3,
      isFinal: true,
      korean: '선생님은 문서를 인쇄하는 중이다.',
      chinese: {
        hanzi: ['老师', '正在', '打印', '文件'],
        pinyin: ['lǎoshī', 'zhèngzài', 'dǎyìn', 'wénjiàn'],
      },
    },

    // 35번
    {
      id: 'sentence35',
      level: 1,
      isFinal: false,
      korean: '아주 유창하다.',
      chinese: {
        hanzi: ['非常', '流利'],
        pinyin: ['fēicháng', 'liúlì'],
      },
    },
    {
      id: 'sentence35',
      level: 2,
      isFinal: false,
      korean: '말을 아주 유창하게 하다. (= 말하는 정도가 매우 유창하다.)',
      chinese: {
        hanzi: ['说', '得', '非常', '流利'],
        pinyin: ['shuō', 'de', 'fēicháng', 'liúlì'],
      },
    },
    {
      id: 'sentence35',
      level: 3,
      isFinal: true,
      korean:
        '그의 영어는 매우 유창하다. (= 그의 영어는 말하는 정도가 매우 유창하다.)',
      chinese: {
        hanzi: ['他的英语', '说', '得', '非常', '流利'],
        pinyin: ['tā de yīngyǔ', 'shuō', 'de', 'fēicháng', 'liúlì'],
      },
    },

    // 36번
    {
      id: 'sentence36',
      level: 1,
      isFinal: false,
      korean: '500미터 정도 된다.',
      chinese: {
        hanzi: ['有', '五百', '米'],
        pinyin: ['yǒu', 'wǔbǎi', 'mǐ'],
      },
    },
    {
      id: 'sentence36',
      level: 2,
      isFinal: false,
      korean: '대략 500미터 정도 된다.',
      chinese: {
        hanzi: ['大约', '有', '五百', '米'],
        pinyin: ['dàyuē', 'yǒu', 'wǔbǎi', 'mǐ'],
      },
    },
    {
      id: 'sentence36',
      level: 3,
      isFinal: false,
      korean: '학교에서 서점까지',
      chinese: {
        hanzi: ['从', '学校', '到', '书店'],
        pinyin: ['cóng', 'xuéxiào', 'dào', 'shūdiàn'],
      },
    },
    {
      id: 'sentence36',
      level: 4,
      isFinal: true,
      korean: '학교에서 서점까지는 대략 500미터 정도 된다.',
      chinese: {
        hanzi: ['从', '学校', '到', '书店', '大约', '有', '五百', '米'],
        pinyin: [
          'cóng',
          'xuéxiào',
          'dào',
          'shūdiàn',
          'dàyuē',
          'yǒu',
          'wǔbǎi',
          'mǐ',
        ],
      },
    },
    // 37번
    {
      id: 'sentence37',
      level: 1,
      isFinal: false,
      korean: '다른 사람에게 주다.',
      chinese: {
        hanzi: ['给', '别人'],
        pinyin: ['gěi', 'biérén'],
      },
    },
    {
      id: 'sentence37',
      level: 2,
      isFinal: false,
      korean: '지갑을 다른 사람에게 주다.',
      chinese: {
        hanzi: ['把', '钱包', '给', '别人'],
        pinyin: ['bǎ', 'qiánbāo', 'gěi', 'biérén'],
      },
    },
    {
      id: 'sentence37',
      level: 3,
      isFinal: false,
      korean: '지갑을 다른 사람에게 주지 마라.',
      chinese: {
        hanzi: ['不要', '把', '钱包', '给', '别人'],
        pinyin: ['bú yào', 'bǎ', 'qiánbāo', 'gěi', 'biérén'],
      },
    },
    {
      id: 'sentence37',
      level: 4,
      isFinal: true,
      korean: '절대 지갑을 다른 사람에게 주지 마라.',
      chinese: {
        hanzi: ['千万', '不要', '把', '钱包', '给', '别人'],
        pinyin: ['qiānwàn', 'bú yào', 'bǎ', 'qiánbāo', 'gěi', 'biérén'],
      },
    },

    // 38번
    {
      id: 'sentence38',
      level: 1,
      isFinal: false,
      korean: '누가 말해?',
      chinese: {
        hanzi: ['谁', '说', '话'],
        pinyin: ['shéi', 'shuō', 'huà'],
      },
    },
    {
      id: 'sentence38',
      level: 2,
      isFinal: false,
      korean: '누가 멈추지 않고 말해?',
      chinese: {
        hanzi: ['谁', '不停', '地', '说', '话'],
        pinyin: ['shéi', 'bùtíng', 'de', 'shuō', 'huà'],
      },
    },
    {
      id: 'sentence38',
      level: 3,
      isFinal: false,
      korean: '누가 계속 말하고 있어? (= 누가 멈추지 않고 말하고 있어?)',
      chinese: {
        hanzi: ['谁', '在', '不停', '地', '说', '话'],
        pinyin: ['shéi', 'zài', 'bùtíng', 'de', 'shuō', 'huà'],
      },
    },
    {
      id: 'sentence38',
      level: 4,
      isFinal: true,
      korean:
        '도대체 누가 계속 말하고 있는 거야? (= 도대체 누가 멈추지 않고 말하고 있는 거야?)',
      chinese: {
        hanzi: ['到底是', '谁', '在', '不停', '地', '说', '话'],
        pinyin: ['dàodǐ shì', 'shéi', 'zài', 'bùtíng', 'de', 'shuō', 'huà'],
      },
    },
    // 39번
    {
      id: 'sentence39',
      level: 1,
      isFinal: false,
      korean: '나에게 결제하게 하다.',
      chinese: {
        hanzi: ['让', '我', '付款'],
        pinyin: ['ràng', 'wǒ', 'fù kuǎn'],
      },
    },
    {
      id: 'sentence39',
      level: 2,
      isFinal: false,
      korean: '나에게 현금으로 결제하게 하다.',
      chinese: {
        hanzi: ['让', '我', '用', '现金', '付款'],
        pinyin: ['ràng', 'wǒ', 'yòng', 'xiànjīn', 'fù kuǎn'],
      },
    },
    {
      id: 'sentence39',
      level: 3,
      isFinal: true,
      korean: '사장님이 나에게 현금으로 결제하라고 한다. ',
      chinese: {
        hanzi: ['老板', '让', '我', '用', '现金', '付款'],
        pinyin: ['lǎobǎn', 'ràng', 'wǒ', 'yòng', 'xiànjīn', 'fù kuǎn'],
      },
    },
    // 40번
    {
      id: 'sentence40',
      level: 1,
      isFinal: false,
      korean: '찢었다, 망가뜨렸다',
      chinese: {
        hanzi: ['弄', '破', '了'],
        pinyin: ['nòng', 'pò', 'le'],
      },
    },
    {
      id: 'sentence40',
      level: 2,
      isFinal: false,
      korean: '내가 찢었다. (= 나에 의해 찢어졌다.)',
      chinese: {
        hanzi: ['被', '我', '弄', '破', '了'],
        pinyin: ['bèi', 'wǒ', 'nòng', 'pò', 'le'],
      },
    },
    {
      id: 'sentence40',
      level: 3,
      isFinal: true,
      korean: '옷을 내가 찢어버렸다. (= 옷은 나에 의해 찢어졌다.)',
      chinese: {
        hanzi: ['衣服', '被', '我', '弄', '破', '了'],
        pinyin: ['yīfu', 'bèi', 'wǒ', 'nòng', 'pò', 'le'],
      },
    },
  ],
  day5: [
    // 41번
    {
      id: 'sentence41',
      level: 1,
      isFinal: false,
      korean: '흡연을 금지하다.',
      chinese: {
        hanzi: ['禁止', '吸烟'],
        pinyin: ['jìnzhǐ', 'xī yān'],
      },
    },
    {
      id: 'sentence41',
      level: 2,
      isFinal: true,
      korean: '문 앞에서 흡연을 금지한다.',
      chinese: {
        hanzi: ['门', '前', '禁止', '吸烟'],
        pinyin: ['mén', 'qián', 'jìnzhǐ', 'xī yān'],
      },
    },
    // 42번
    {
      id: 'sentence42',
      level: 1,
      isFinal: false,
      korean: '식당 한 곳이 있다.',
      chinese: {
        hanzi: ['有', '一', '家', '餐厅'],
        pinyin: ['yǒu', 'yì', 'jiā', 'cāntīng'],
      },
    },
    {
      id: 'sentence42',
      level: 2,
      isFinal: false,
      korean: '옆에 식당 한 곳이 있다.',
      chinese: {
        hanzi: ['旁边', '有', '一', '家', '餐厅'],
        pinyin: ['pángbiān', 'yǒu', 'yì', 'jiā', 'cāntīng'],
      },
    },
    {
      id: 'sentence42',
      level: 3,
      isFinal: true,
      korean: '공원 옆에 식당 한 곳이 있다.',
      chinese: {
        hanzi: ['公园', '旁边', '有', '一', '家', '餐厅'],
        pinyin: ['gōngyuán', 'pángbiān', 'yǒu', 'yì', 'jiā', 'cāntīng'],
      },
    },
    // 43번
    {
      id: 'sentence43',
      level: 1,
      isFinal: false,
      korean: '아주 훌륭하다.',
      chinese: {
        hanzi: ['精彩', '极了'],
        pinyin: ['jīngcǎi', 'jí le'],
      },
    },
    {
      id: 'sentence43',
      level: 2,
      isFinal: false,
      korean: '공연이 아주 훌륭하다.',
      chinese: {
        hanzi: ['表演', '精彩', '极了'],
        pinyin: ['biǎoyǎn', 'jīngcǎi', 'jí le'],
      },
    },
    {
      id: 'sentence43',
      level: 3,
      isFinal: true,
      korean: '이번 공연이 아주 훌륭하다.',
      chinese: {
        hanzi: ['这次', '表演', '精彩', '极了'],
        pinyin: ['zhècì', 'biǎoyǎn', 'jīngcǎi', 'jí le'],
      },
    },
    // 44번
    {
      id: 'sentence44',
      level: 1,
      isFinal: false,
      korean: '소파 위에 던지다.',
      chinese: {
        hanzi: ['扔在', '沙发', '上'],
        pinyin: ['rēng zài', 'shāfā', 'shàng'],
      },
    },
    {
      id: 'sentence44',
      level: 2,
      isFinal: false,
      korean: '책을 소파 위에 던지다.',
      chinese: {
        hanzi: ['把', '书', '扔在', '沙发', '上'],
        pinyin: ['bǎ', 'shū', 'rēng zài', 'shāfā', 'shàng'],
      },
    },
    {
      id: 'sentence44',
      level: 3,
      isFinal: true,
      korean: '책을 소파 위에 던지지 마라.',
      chinese: {
        hanzi: ['别', '把', '书', '扔', '在', '沙发', '上'],
        pinyin: ['bié', 'bǎ', 'shū', 'rēng', 'zài', 'shāfā', 'shàng'],
      },
    },
    // 45번
    {
      id: 'sentence45',
      level: 1,
      isFinal: false,
      korean: '큰 용기를 주고 자신감을 불어넣는다. (= 매우 고무적이다).',
      chinese: {
        hanzi: ['十分', '鼓舞'],
        pinyin: ['shífēn', 'gǔwǔ'],
      },
    },
    {
      id: 'sentence45',
      level: 2,
      isFinal: false,
      korean:
        '사람에게 큰 용기를 주고 자신감을 불어넣는다. (= 사람을 매우 고무시킨다.)',
      chinese: {
        hanzi: ['让', '人', '十分', '鼓舞'],
        pinyin: ['ràng', 'rén', 'shífēn', 'gǔwǔ'],
      },
    },
    {
      id: 'sentence45',
      level: 3,
      isFinal: false,
      korean: '성공 경험은 사람들에게 큰 용기를 주고 자신감을 불어넣는다.',
      chinese: {
        hanzi: ['成功', '经历', '让', '人', '十分', '鼓舞'],
        pinyin: ['chénggōng', 'jīnglì', 'ràng', 'rén', 'shífēn', 'gǔwǔ'],
      },
    },
    {
      id: 'sentence45',
      level: 4,
      isFinal: true,
      korean: '그의 성공 경험은 사람들에게 큰 용기를 주고 자신감을 불어넣는다.',
      chinese: {
        hanzi: ['他', '的', '成功', '经历', '让', '人', '十分', '鼓舞'],
        pinyin: [
          'tā',
          'de',
          'chénggōng',
          'jīnglì',
          'ràng',
          'rén',
          'shífēn',
          'gǔwǔ',
        ],
      },
    },
    // 46번
    {
      id: 'sentence46',
      level: 1,
      isFinal: false,
      korean: '(일 처리 방식이) 체계적이다, (말, 글이) 조리가 있다(논리적이다)',
      chinese: {
        hanzi: ['有', '条理'],
        pinyin: ['yǒu', 'tiáolǐ'],
      },
    },
    {
      id: 'sentence46',
      level: 2,
      isFinal: false,
      korean: '매우 체계적이다.',
      chinese: {
        hanzi: ['很', '有', '条理'],
        pinyin: ['hěn', 'yǒu', 'tiáolǐ'],
      },
    },
    {
      id: 'sentence46',
      level: 3,
      isFinal: false,
      korean: '매우 체계적으로 진행된다. (= 진행되는 정도가 매우 체계적이다.)',
      chinese: {
        hanzi: ['进行得', '很', '有', '条理'],
        pinyin: ['jìnxíng de', 'hěn', 'yǒu', 'tiáolǐ'],
      },
    },
    {
      id: 'sentence46',
      level: 4,
      isFinal: true,
      korean:
        '일이 전반적으로 매우 체계적으로 진행된다. (= 일이 전반적으로 진행되는 정도가 매우 체계적이다.)',
      chinese: {
        hanzi: ['工作都', '进行', '得', '很', '有', '条理'],
        pinyin: ['gōngzuò dōu', 'jìnxíng', 'de', 'hěn', 'yǒu', 'tiáolǐ'],
      },
    },
    // 47번
    {
      id: 'sentence47',
      level: 1,
      isFinal: false,
      korean: '증가했다.',
      chinese: {
        hanzi: ['提高', '了'],
        pinyin: ['tígāo', 'le'],
      },
    },
    {
      id: 'sentence47',
      level: 2,
      isFinal: false,
      korean: '지난 몇 년보다 증가했다.',
      chinese: {
        hanzi: ['比', '前几年', '提高', '了'],
        pinyin: ['bǐ', 'qián jǐ nián', 'tígāo', 'le'],
      },
    },
    {
      id: 'sentence47',
      level: 3,
      isFinal: false,
      korean: '지난 몇 년보다 세 배 증가했다.',
      chinese: {
        hanzi: ['比', '前几年', '提高了', '三倍'],
        pinyin: ['bǐ', 'qián jǐ nián', 'tígāo le', 'sān bèi'],
      },
    },
    {
      id: 'sentence47',
      level: 4,
      isFinal: false,
      korean: '생산량이 지난 몇 년보다 세 배 증가했다.',
      chinese: {
        hanzi: ['产量', '比', '前', '几', '年', '提高了', '三倍'],
        pinyin: [
          'chǎnliàng',
          'bǐ',
          'qián',
          'jǐ',
          'nián',
          'tígāo le',
          'sān bèi',
        ],
      },
    },
    {
      id: 'sentence47',
      level: 5,
      isFinal: true,
      korean: '회사의 생산량이 지난 몇 년보다 세 배 증가했다.',
      chinese: {
        hanzi: ['公司的', '产量', '比', '前', '几', '年', '提高了', '三倍'],
        pinyin: [
          'gōngsī de',
          'chǎnliàng',
          'bǐ',
          'qián',
          'jǐ',
          'nián',
          'tígāo le',
          'sān bèi',
        ],
      },
    },
    // 48번
    {
      id: 'sentence48',
      level: 1,
      isFinal: false,
      korean: '~로 번역되었다.',
      chinese: {
        hanzi: ['翻译成了~'],
        pinyin: ['fānyì chéng le'],
      },
    },
    {
      id: 'sentence48',
      level: 2,
      isFinal: false,
      korean: '(…에게) ~로 번역되었다.',
      chinese: {
        hanzi: ['被', '翻译成', '了'],
        pinyin: ['bèi', 'fānyì chéng', 'le'],
      },
    },
    {
      id: 'sentence48',
      level: 3,
      isFinal: false,
      korean: '(…에게) 프랑스어로 번역되었다.',
      chinese: {
        hanzi: ['被', '翻译', '成了', '法文'],
        pinyin: ['bèi', 'fānyì', 'chéng le', 'fǎwén'],
      },
    },
    {
      id: 'sentence48',
      level: 4,
      isFinal: true,
      korean: '이 글은 (…에게) 프랑스어로 번역되었다.',
      chinese: {
        hanzi: ['这', '篇', '文章', '被', '翻译', '成了', '法文'],
        pinyin: [
          'zhè',
          'piān',
          'wénzhāng',
          'bèi',
          'fānyì',
          'chéng le',
          'fǎwén',
        ],
      },
    },
    {
      id: 'sentence49',
      level: 1,
      isFinal: false,
      korean: '점점 번화하다.',
      chinese: {
        hanzi: ['越来越', '繁华'],
        pinyin: ['yuèláiyuè', 'fánhuá'],
      },
    },
    {
      id: 'sentence49',
      level: 2,
      isFinal: false,
      korean: '점점 번화해지다.',
      chinese: {
        hanzi: ['变得', '越来越', '繁华'],
        pinyin: ['biànde', 'yuèláiyuè', 'fánhuá'],
      },
    },
    {
      id: 'sentence49',
      level: 3,
      isFinal: false,
      korean: '점점 번화해질 것이다.',
      chinese: {
        hanzi: ['会', '变得', '越来越', '繁华'],
        pinyin: ['huì', 'biànde', 'yuèláiyuè', 'fánhuá'],
      },
    },
    {
      id: 'sentence49',
      level: 4,
      isFinal: true,
      korean: '이 도시는 점점 번화해질 것이다.',
      chinese: {
        hanzi: ['这个', '城市', '会', '变得', '越来越', '繁华'],
        pinyin: ['zhège', 'chéngshì', 'huì', 'biànde', 'yuèláiyuè', 'fánhuá'],
      },
    },
    //50번
    {
      id: 'sentence50',
      level: 1,
      isFinal: false,
      korean: '숙제를 끝내다.',
      chinese: {
        hanzi: ['完成', '作业'],
        pinyin: ['wánchéng', 'zuòyè'],
      },
    },
    {
      id: 'sentence50',
      level: 2,
      isFinal: false,
      korean: '제시간에 숙제를 끝내다.',
      chinese: {
        hanzi: ['按时', '完成', '作业'],
        pinyin: ['ànshí', 'wánchéng', 'zuòyè'],
      },
    },
    {
      id: 'sentence50',
      level: 3,
      isFinal: false,
      korean: '제시간에 숙제를 끝낼 것이다.',
      chinese: {
        hanzi: ['会', '按时', '完成', '作业'],
        pinyin: ['huì', 'ànshí', 'wánchéng', 'zuòyè'],
      },
    },
    {
      id: 'sentence50',
      level: 4,
      isFinal: false,
      korean: '앞으로 제시간에 숙제를 끝낼 것이다.',
      chinese: {
        hanzi: ['以后', '会', '按时', '完成', '作业'],
        pinyin: ['yǐhòu', 'huì', 'ànshí', 'wánchéng', 'zuòyè'],
      },
    },
    {
      id: 'sentence50',
      level: 5,
      isFinal: false,
      korean: '앞으로 제시간에 숙제를 끝내겠다고 약속하다.',
      chinese: {
        hanzi: ['保证', '以后', '会', '按时', '完成', '作业'],
        pinyin: ['bǎozhèng', 'yǐhòu', 'huì', 'ànshí', 'wánchéng', 'zuòyè'],
      },
    },
    {
      id: 'sentence50',
      level: 6,
      isFinal: false,
      korean: '선생님께 앞으로 제시간에 숙제를 끝내겠다고 약속하다.',
      chinese: {
        hanzi: ['向', '老师', '保证', '以后', '会', '按时', '完成', '作业'],
        pinyin: [
          'xiàng',
          'lǎoshī',
          'bǎozhèng',
          'yǐhòu',
          'huì',
          'ànshí',
          'wánchéng',
          'zuòyè',
        ],
      },
    },
    {
      id: 'sentence50',
      level: 7,
      isFinal: true,
      korean: '그녀는 앞으로 숙제를 제시간에 끝내겠다고 선생님께 약속했다.',
      chinese: {
        hanzi: [
          '她',
          '向',
          '老师',
          '保证',
          '以后',
          '会',
          '按时',
          '完成',
          '作业',
        ],
        pinyin: [
          'tā',
          'xiàng',
          'lǎoshī',
          'bǎozhèng',
          'yǐhòu',
          'huì',
          'ànshí',
          'wánchéng',
          'zuòyè',
        ],
      },
    },
  ],
  day6: [
    // 51번
    {
      id: 'sentence51',
      level: 1,
      isFinal: false,
      korean: '수량이 증가하다.',
      chinese: {
        hanzi: ['数量', '增加'],
        pinyin: ['shùliàng', 'zēngjiā'],
      },
    },
    {
      id: 'sentence51',
      level: 2,
      isFinal: false,
      korean: '상품 수량이 증가하다.',
      chinese: {
        hanzi: ['商品', '数量', '增加'],
        pinyin: ['shāngpǐn', 'shùliàng', 'zēngjiā'],
      },
    },
    {
      id: 'sentence51',
      level: 3,
      isFinal: false,
      korean: '상품 수량이 증가했다.',
      chinese: {
        hanzi: ['商品', '数量', '增加', '了'],
        pinyin: ['shāngpǐn', 'shùliàng', 'zēngjiā', 'le'],
      },
    },
    {
      id: 'sentence51',
      level: 4,
      isFinal: true,
      korean: '이 슈퍼마켓의 상품 수량이 증가했다.',
      chinese: {
        hanzi: ['这', '家', '超市', '的', '商品', '数量', '增加', '了'],
        pinyin: [
          'zhè',
          'jiā',
          'chāoshì',
          'de',
          'shāngpǐn',
          'shùliàng',
          'zēngjiā',
          'le',
        ],
      },
    },
    // 52번
    {
      id: 'sentence52',
      level: 1,
      isFinal: false,
      korean: '매우 익숙하다.',
      chinese: {
        hanzi: ['非常', '熟悉'],
        pinyin: ['fēicháng', 'shúxī'],
      },
    },
    {
      id: 'sentence52',
      level: 2,
      isFinal: false,
      korean: '국제 무역 규칙에 매우 익숙하다.',
      chinese: {
        hanzi: ['对', '国际', '贸易', '规则', '非常', '熟悉'],
        pinyin: ['duì', 'guójì', 'màoyì', 'guīzé', 'fēicháng', 'shúxī'],
      },
    },
    {
      id: 'sentence52',
      level: 3,
      isFinal: true,
      korean: '이 전문가는 국제 무역 규칙에 매우 익숙하다.',
      chinese: {
        hanzi: [
          '这',
          '位',
          '专家',
          '对',
          '国际',
          '贸易',
          '规则',
          '非常',
          '熟悉',
        ],
        pinyin: [
          'zhè',
          'wèi',
          'zhuānjiā',
          'duì',
          'guójì',
          'màoyì',
          'guīzé',
          'fēicháng',
          'shúxī',
        ],
      },
    },
    // 28번
    {
      id: 'sentence53',
      level: 1,
      isFinal: false,
      korean: '땀을 닦다.',
      chinese: {
        hanzi: ['擦', '汗'],
        pinyin: ['cā', 'hàn'],
      },
    },
    {
      id: 'sentence53',
      level: 2,
      isFinal: false,
      korean: '땀을 한번 닦다.',
      chinese: {
        hanzi: ['擦', '一', '擦', '汗'],
        pinyin: ['cā', 'yi', 'cā', 'hàn'],
      },
    },
    {
      id: 'sentence53',
      level: 3,
      isFinal: false,
      korean: '수건으로 땀을 닦다.',
      chinese: {
        hanzi: ['用', '毛巾', '擦', '一', '擦', '汗'],
        pinyin: ['yòng', 'máojīn', 'cā', 'yi', 'cā', 'hàn'],
      },
    },
    {
      id: 'sentence53',
      level: 4,
      isFinal: true,
      korean: '빨리 수건으로 땀 좀 닦아라.',
      chinese: {
        hanzi: ['快', '用', '毛巾', '擦', '一', '擦', '汗'],
        pinyin: ['kuài', 'yòng', 'máojīn', 'cā', 'yi', 'cā', 'hàn'],
      },
    },
    // 54번
    {
      id: 'sentence54',
      level: 1,
      isFinal: false,
      korean: '예의가 있다.',
      chinese: {
        hanzi: ['有', '礼貌'],
        pinyin: ['yǒu', 'lǐmào'],
      },
    },
    {
      id: 'sentence54',
      level: 2,
      isFinal: false,
      korean: '특히 예의가 있다.',
      chinese: {
        hanzi: ['特别', '有', '礼貌'],
        pinyin: ['tèbié', 'yǒu', 'lǐmào'],
      },
    },
    {
      id: 'sentence54',
      level: 3,
      isFinal: false,
      korean: '아이가 특히 예의가 있다.',
      chinese: {
        hanzi: ['孩子', '特别', '有', '礼貌'],
        pinyin: ['háizi', 'tèbié', 'yǒu', 'lǐmào'],
      },
    },
    {
      id: 'sentence54',
      level: 4,
      isFinal: true,
      korean: '이웃집 아이는 특히 예의가 있다.',
      chinese: {
        hanzi: ['邻居家', '的', '孩子', '特别', '有', '礼貌'],
        pinyin: ['línjū jiā', 'de', 'háizi', 'tèbié', 'yǒu', 'lǐmào'],
      },
    },

    // 55번
    {
      id: 'sentence55',
      level: 1,
      isFinal: false,
      korean: '생기가 없다.',
      chinese: {
        hanzi: ['没有', '精神'],
        pinyin: ['méiyǒu', 'jīngshen'],
      },
    },
    {
      id: 'sentence55',
      level: 2,
      isFinal: false,
      korean: '정말 생기가 없다.',
      chinese: {
        hanzi: ['实在', '没有', '精神'],
        pinyin: ['shízài', 'méiyǒu', 'jīngshen'],
      },
    },
    {
      id: 'sentence55',
      level: 3,
      isFinal: false,
      korean: '정말 생기가 없어졌다.',
      chinese: {
        hanzi: ['实在', '没有', '精神', '了'],
        pinyin: ['shízài', 'méiyǒu', 'jīngshen', 'le'],
      },
    },
    {
      id: 'sentence55',
      level: 4,
      isFinal: true,
      korean: '그의 눈에는 정말 생기가 없다.',
      chinese: {
        hanzi: ['他', '的', '眼睛', '实在', '没有', '精神', '了'],
        pinyin: ['tā', 'de', 'yǎnjing', 'shízài', 'méiyǒu', 'jīngshen', 'le'],
      },
    },
    // 56번
    {
      id: 'sentence56',
      level: 1,
      isFinal: false,
      korean: '쓰레기를 함부로 버리다.',
      chinese: {
        hanzi: ['乱扔', '垃圾'],
        pinyin: ['luàn rēng', 'lājī'],
      },
    },
    {
      id: 'sentence56',
      level: 2,
      isFinal: false,
      korean: '쓰레기를 함부로 버리지 마라.',
      chinese: {
        hanzi: ['不要', '乱扔', '垃圾'],
        pinyin: ['búyào', 'luàn rēng', 'lājī'],
      },
    },
    {
      id: 'sentence56',
      level: 3,
      isFinal: false,
      korean: '제발 쓰레기를 함부로 버리지 마세요.',
      chinese: {
        hanzi: ['请', '不要', '乱扔', '垃圾'],
        pinyin: ['qǐng', 'búyào', 'luàn rēng', 'lājī'],
      },
    },
    {
      id: 'sentence56',
      level: 4,
      isFinal: true,
      korean: '여행객 여러분 쓰레기를 함부로 버리지 말아주세요.',
      chinese: {
        hanzi: ['各位', '游客', '请', '不要', '乱', '扔', '垃圾'],
        pinyin: ['gèwèi', 'yóukè', 'qǐng', 'búyào', 'luàn', 'rēng', 'lājī'],
      },
    },
    // 57번
    {
      id: 'sentence57',
      level: 1,
      isFinal: false,
      korean: '서랍 안에 넣었다.',
      chinese: {
        hanzi: ['放进了', '抽屉', '里'],
        pinyin: ['fàng jìn le', 'chōuti', 'lǐ'],
      },
    },
    {
      id: 'sentence57',
      level: 2,
      isFinal: false,
      korean: '책상의 서랍에 넣었다.',
      chinese: {
        hanzi: ['放进了', '桌子', '的', '抽屉', '里'],
        pinyin: ['fàng jìn le', 'zhuōzi', 'de', 'chōuti', 'lǐ'],
      },
    },
    {
      id: 'sentence57',
      level: 3,
      isFinal: false,
      korean: '계약서를 책상 서랍에 넣었다.',
      chinese: {
        hanzi: ['把', '合同', '放进了', '桌子', '的', '抽屉', '里'],
        pinyin: ['bǎ', 'hétóng', 'fàng jìn le', 'zhuōzi', 'de', 'chōuti', 'lǐ'],
      },
    },
    {
      id: 'sentence57',
      level: 4,
      isFinal: true,
      korean: '비서가 계약서를 책상 서랍에 넣었다.',
      chinese: {
        hanzi: ['秘书', '把', '合同', '放进了', '桌子', '的', '抽屉', '里'],
        pinyin: [
          'mìshū',
          'bǎ',
          'hétóng',
          'fàng jìn le',
          'zhuōzi',
          'de',
          'chōuti',
          'lǐ',
        ],
      },
    },
    // 58번
    {
      id: 'sentence58',
      level: 1,
      isFinal: false,
      korean: '잃어버렸다.',
      chinese: {
        hanzi: ['弄', '丢', '了'],
        pinyin: ['nòng', 'diū', 'le'],
      },
    },
    {
      id: 'sentence58',
      level: 2,
      isFinal: false,
      korean: '샤오리에게 잃어버려졌다.',
      chinese: {
        hanzi: ['被', '小李', '弄', '丢', '了'],
        pinyin: ['bèi', 'Xiǎo Lǐ', 'nòng', 'diū', 'le'],
      },
    },
    {
      id: 'sentence58',
      level: 3,
      isFinal: true,
      korean: '자료를 샤오리가 잃어버렸다. (= 자료가 샤오리에게 잃어버려졌다.)',
      chinese: {
        hanzi: ['材料', '被', '小李', '弄', '丢', '了'],
        pinyin: ['cáiliào', 'bèi', 'Xiǎo Lǐ', 'nòng', 'diū', 'le'],
      },
    },
    // 59번
    {
      id: 'sentence59',
      level: 1,
      isFinal: false,
      korean: '저는 분명히 말했어요.',
      chinese: {
        hanzi: ['我', '说', '得', '清楚'],
        pinyin: ['wǒ', 'shuō', 'de', 'qīngchu'],
      },
    },
    {
      id: 'sentence59',
      level: 2,
      isFinal: false,
      korean: '제가 분명히 말했나요?',
      chinese: {
        hanzi: ['我', '说', '得', '清楚', '吗'],
        pinyin: ['wǒ', 'shuō', 'de', 'qīngchu', 'ma'],
      },
    },
    {
      id: 'sentence59',
      level: 3,
      isFinal: false,
      korean: '제가 충분히 분명하게 말하지 않았나요?',
      chinese: {
        hanzi: ['我', '说', '得', '不够清楚', '吗'],
        pinyin: ['wǒ', 'shuō', 'de', 'búgòu qīngchu', 'ma'],
      },
    },
    {
      id: 'sentence59',
      level: 4,
      isFinal: false,
      korean: '제가 아직 충분히 분명하게 말하지 않은 건가요?',
      chinese: {
        hanzi: ['我', '说', '得', '还不够清楚', '吗'],
        pinyin: ['wǒ', 'shuō', 'de', 'hái búgòu qīngchu', 'ma'],
      },
    },
    {
      id: 'sentence59',
      level: 5,
      isFinal: true,
      korean: '도대체 제가 아직도 충분히 분명하게 말하지 않은 건가요?',
      chinese: {
        hanzi: ['难道', '我', '说', '得', '还', '不够', '清楚', '吗'],
        pinyin: ['nándào', 'wǒ', 'shuō', 'de', 'hái', 'búgòu', 'qīngchu', 'ma'],
      },
    },
    //60번
    {
      id: 'sentence60',
      level: 1,
      isFinal: false,
      korean: '중요하게 여겨지다, 주목을 끌다',
      chinese: {
        hanzi: ['引起', '重视'],
        pinyin: ['yǐnqǐ', 'zhòngshì'],
      },
    },
    {
      id: 'sentence60',
      level: 2,
      isFinal: false,
      korean: '중시되다.',
      chinese: {
        hanzi: ['被', '引起', '重视'],
        pinyin: ['bèi', 'yǐnqǐ', 'zhòngshì'],
      },
    },
    {
      id: 'sentence60',
      level: 3,
      isFinal: false,
      korean: '중시되지 않았다.',
      chinese: {
        hanzi: ['没有被', '引起', '重视'],
        pinyin: ['méiyǒu bèi', 'yǐnqǐ', 'zhòngshì'],
      },
    },
    {
      id: 'sentence60',
      level: 4,
      isFinal: false,
      korean: '전혀 중시되지 않았다.',
      chinese: {
        hanzi: ['并没有', '被', '引起', '重视'],
        pinyin: ['bìng méiyǒu', 'bèi', 'yǐnqǐ', 'zhòngshì'],
      },
    },
    {
      id: 'sentence60',
      level: 5,
      isFinal: true,
      korean: '이러한 위험들은 전혀 중시되지 않았다.',
      chinese: {
        hanzi: ['这', '些', '风险', '并', '没有', '被', '引起', '重视'],
        pinyin: [
          'zhè',
          'xiē',
          'fēngxiǎn',
          'bìng',
          'méiyǒu',
          'bèi',
          'yǐnqǐ',
          'zhòngshì',
        ],
      },
    },
  ],
  day7: [
    // 61번
    {
      id: 'sentence61',
      level: 1,
      isFinal: false,
      korean: '8위안 3마오에 팔다.',
      chinese: {
        hanzi: ['卖', '八', '块', '三', '毛', '钱'],
        pinyin: ['mài', 'bā', 'kuài', 'sān', 'máo', 'qián'],
      },
    },
    {
      id: 'sentence61',
      level: 2,
      isFinal: false,
      korean: '8위안 3마오에 팔렸다.',
      chinese: {
        hanzi: ['卖了', '八', '块', '三', '毛', '钱'],
        pinyin: ['mài le', 'bā', 'kuài', 'sān', 'máo', 'qián'],
      },
    },
    {
      id: 'sentence61',
      level: 3,
      isFinal: false,
      korean: '헌 책을 8위안 3마오에 팔았다.',
      chinese: {
        hanzi: ['旧书', '卖', '了', '八', '块', '三', '毛', '钱'],
        pinyin: ['jiùshū', 'mài', 'le', 'bā', 'kuài', 'sān', 'máo', 'qián'],
      },
    },
    {
      id: 'sentence61',
      level: 4,
      isFinal: true,
      korean: '집에 있던 헌 책을 8위안 3마오에 팔았다.',
      chinese: {
        hanzi: ['家里', '的', '旧书', '卖', '了', '八', '块', '三', '毛', '钱'],
        pinyin: [
          'jiālǐ',
          'de',
          'jiùshū',
          'mài',
          'le',
          'bā',
          'kuài',
          'sān',
          'máo',
          'qián',
        ],
      },
    },
    // 62번
    {
      id: 'sentence62',
      level: 1,
      isFinal: false,
      korean: '작년의 두 배',
      chinese: {
        hanzi: ['去年', '的', '两', '倍'],
        pinyin: ['qùnián', 'de', 'liǎng', 'bèi'],
      },
    },
    {
      id: 'sentence62',
      level: 2,
      isFinal: false,
      korean: '작년의 두 배이다.',
      chinese: {
        hanzi: ['是', '去年', '的', '两', '倍'],
        pinyin: ['shì', 'qùnián', 'de', 'liǎng', 'bèi'],
      },
    },
    {
      id: 'sentence62',
      level: 3,
      isFinal: false,
      korean: '급여가 작년의 두 배이다.',
      chinese: {
        hanzi: ['工资', '是', '去年', '的', '两', '倍'],
        pinyin: ['gōngzī', 'shì', 'qùnián', 'de', 'liǎng', 'bèi'],
      },
    },
    {
      id: 'sentence62',
      level: 4,
      isFinal: true,
      korean: '이 직위의 급여는 작년의 두 배이다.',
      chinese: {
        hanzi: ['这个', '岗位', '的', '工资', '是', '去年', '的', '两', '倍'],
        pinyin: [
          'zhège',
          'gǎngwèi',
          'de',
          'gōngzī',
          'shì',
          'qùnián',
          'de',
          'liǎng',
          'bèi',
        ],
      },
    },
    // 63번
    {
      id: 'sentence63',
      level: 1,
      isFinal: false,
      korean: '도움이 된다.',
      chinese: {
        hanzi: ['有', '帮助'],
        pinyin: ['yǒu', 'bāngzhù'],
      },
    },
    {
      id: 'sentence63',
      level: 2,
      isFinal: false,
      korean: '큰 도움이 된다.',
      chinese: {
        hanzi: ['有', '很', '大', '帮助'],
        pinyin: ['yǒu', 'hěn', 'dà', 'bāngzhù'],
      },
    },
    {
      id: 'sentence63',
      level: 3,
      isFinal: false,
      korean: '회사 관리에 큰 도움이 된다.',
      chinese: {
        hanzi: ['对', '公司的管理', '有', '很', '大', '帮助'],
        pinyin: ['duì', 'gōngsī de guǎnlǐ', 'yǒu', 'hěn', 'dà', 'bāngzhù'],
      },
    },
    {
      id: 'sentence63',
      level: 4,
      isFinal: true,
      korean: '이 제도는 회사 관리에 큰 도움이 된다.',
      chinese: {
        hanzi: [
          '这个',
          '制度',
          '对',
          '公司',
          '的',
          '管理',
          '有',
          '很',
          '大',
          '帮助',
        ],
        pinyin: [
          'zhège',
          'zhìdù',
          'duì',
          'gōngsī',
          'de',
          'guǎnlǐ',
          'yǒu',
          'hěn',
          'dà',
          'bāngzhù',
        ],
      },
    },
    // 74번
    {
      id: 'sentence64',
      level: 1,
      isFinal: false,
      korean: '너무 자세하다.',
      chinese: {
        hanzi: ['太', '详细', '了'],
        pinyin: ['tài', 'xiángxì', 'le'],
      },
    },
    {
      id: 'sentence64',
      level: 2,
      isFinal: false,
      korean: '보고서도 너무 자세하다.',
      chinese: {
        hanzi: ['报告', '也', '太', '详细', '了'],
        pinyin: ['bàogào', 'yě', 'tài', 'xiángxì', 'le'],
      },
    },
    {
      id: 'sentence64',
      level: 3,
      isFinal: false,
      korean: '그가 쓴 보고서도 너무 자세하다.',
      chinese: {
        hanzi: ['他', '写', '的', '报告', '也', '太', '详细', '了'],
        pinyin: ['tā', 'xiě', 'de', 'bàogào', 'yě', 'tài', 'xiángxì', 'le'],
      },
    },
    {
      id: 'sentence64',
      level: 4,
      isFinal: true,
      korean: '그가 새로 쓴 보고서도 너무 자세하다.',
      chinese: {
        hanzi: ['他', '新', '写', '的', '报告', '也', '太', '详细', '了'],
        pinyin: [
          'tā',
          'xīn',
          'xiě',
          'de',
          'bàogào',
          'yě',
          'tài',
          'xiángxì',
          'le',
        ],
      },
    },
    // 75번
    {
      id: 'sentence65',
      level: 1,
      isFinal: false,
      korean: '더 중요하다.',
      chinese: {
        hanzi: ['更', '重要'],
        pinyin: ['gèng', 'zhòngyào'],
      },
    },
    {
      id: 'sentence65',
      level: 2,
      isFinal: false,
      korean: '시간보다 더 중요하다.',
      chinese: {
        hanzi: ['比', '时间', '更', '重要'],
        pinyin: ['bǐ', 'shíjiān', 'gèng', 'zhòngyào'],
      },
    },
    {
      id: 'sentence65',
      level: 3,
      isFinal: false,
      korean: '효율이 시간보다 더 중요하다.',
      chinese: {
        hanzi: ['效率', '比', '时间', '更', '重要'],
        pinyin: ['xiàolǜ', 'bǐ', 'shíjiān', 'gèng', 'zhòngyào'],
      },
    },
    {
      id: 'sentence65',
      level: 4,
      isFinal: true,
      korean: '업무 효율이 시간보다 더 중요하다.',
      chinese: {
        hanzi: ['工作的', '效率', '比', '时间', '更', '重要'],
        pinyin: ['gōngzuò de', 'xiàolǜ', 'bǐ', 'shíjiān', 'gèng', 'zhòngyào'],
      },
    },
    // 76번
    {
      id: 'sentence66',
      level: 1,
      isFinal: false,
      korean: '활동에 참여하다.',
      chinese: {
        hanzi: ['参加', '活动'],
        pinyin: ['cānjiā', 'huódòng'],
      },
    },
    {
      id: 'sentence66',
      level: 2,
      isFinal: false,
      korean: '활동에 참여하고 싶다.',
      chinese: {
        hanzi: ['想', '参加', '活动'],
        pinyin: ['xiǎng', 'cānjiā', 'huódòng'],
      },
    },
    {
      id: 'sentence66',
      level: 3,
      isFinal: false,
      korean: '활동에 참여하고 싶지 않다.',
      chinese: {
        hanzi: ['不', '想', '参加', '活动'],
        pinyin: ['bù', 'xiǎng', 'cānjiā', 'huódòng'],
      },
    },
    {
      id: 'sentence66',
      level: 4,
      isFinal: false,
      korean: '조금도 활동에 참여하고 싶지 않다.',
      chinese: {
        hanzi: ['一点儿也', '不', '想', '参加', '活动'],
        pinyin: ['yìdiǎnr yě', 'bù', 'xiǎng', 'cānjiā', 'huódòng'],
      },
    },
    {
      id: 'sentence66',
      level: 5,
      isFinal: true,
      korean: '내 동료는 활동에 조금도 참여하고 싶어 하지 않는다.',
      chinese: {
        hanzi: ['我', '同事', '一点儿', '也', '不', '想', '参加', '活动'],
        pinyin: [
          'wǒ',
          'tóngshì',
          'yìdiǎnr',
          'yě',
          'bù',
          'xiǎng',
          'cānjiā',
          'huódòng',
        ],
      },
    },
    // 77번
    {
      id: 'sentence67',
      level: 1,
      isFinal: false,
      korean: '편의점 한 곳',
      chinese: {
        hanzi: ['一', '家', '便利店'],
        pinyin: ['yì', 'jiā', 'biànlìdiàn'],
      },
    },
    {
      id: 'sentence67',
      level: 2,
      isFinal: false,
      korean: '편의점이 한 곳 있다.',
      chinese: {
        hanzi: ['有', '一', '家', '便利店'],
        pinyin: ['yǒu', 'yì', 'jiā', 'biànlìdiàn'],
      },
    },
    {
      id: 'sentence67',
      level: 3,
      isFinal: false,
      korean: '(......하면,) 바로 편의점이 있다.',
      chinese: {
        hanzi: ['就有', '一', '家', '便利店'],
        pinyin: ['jiù yǒu', 'yì', 'jiā', 'biànlìdiàn'],
      },
    },
    {
      id: 'sentence67',
      level: 4,
      isFinal: false,
      korean: '10분 걷다.',
      chinese: {
        hanzi: ['走', '十', '分钟'],
        pinyin: ['zǒu', 'shí', 'fēnzhōng'],
      },
    },
    {
      id: 'sentence67',
      level: 5,
      isFinal: false,
      korean: '10분 더 걷다.',
      chinese: {
        hanzi: ['再', '走', '十', '分钟'],
        pinyin: ['zài', 'zǒu', 'shí', 'fēnzhōng'],
      },
    },
    {
      id: 'sentence67',
      level: 6,
      isFinal: true,
      korean: '10분 더 걸으면 바로 편의점이 있다.',
      chinese: {
        hanzi: ['再', '走', '十', '分钟', '就', '有', '一', '家', '便利店'],
        pinyin: [
          'zài',
          'zǒu',
          'shí',
          'fēnzhōng',
          'jiù',
          'yǒu',
          'yì',
          'jiā',
          'biànlìdiàn',
        ],
      },
    },
    // 78번
    {
      id: 'sentence68',
      level: 1,
      isFinal: false,
      korean: '한번 번역해봐요.',
      chinese: {
        hanzi: ['翻译', '一下'],
        pinyin: ['fānyì', 'yíxià'],
      },
    },
    {
      id: 'sentence68',
      level: 2,
      isFinal: false,
      korean: '내용을 한번 번역해봐요.',
      chinese: {
        hanzi: ['把', '内容', '翻译', '一下'],
        pinyin: ['bǎ', 'nèiróng', 'fānyì', 'yíxià'],
      },
    },
    {
      id: 'sentence68',
      level: 3,
      isFinal: false,
      korean: '이 단락 내용을 한번 번역해봐요.',
      chinese: {
        hanzi: ['把', '这', '段', '内容', '翻译', '一下'],
        pinyin: ['bǎ', 'zhè', 'duàn', 'nèiróng', 'fānyì', 'yíxià'],
      },
    },
    {
      id: 'sentence68',
      level: 4,
      isFinal: true,
      korean: '이 단락 내용을 한번 번역해보세요.',
      chinese: {
        hanzi: ['请', '把', '这', '段', '内容', '翻译', '一下'],
        pinyin: ['qǐng', 'bǎ', 'zhè', 'duàn', 'nèiróng', 'fānyì', 'yíxià'],
      },
    },
    // 79번
    {
      id: 'sentence69',
      level: 1,
      isFinal: false,
      korean: '잘 정리되었다.',
      chinese: {
        hanzi: ['整理', '好', '了'],
        pinyin: ['zhěnglǐ', 'hǎo', 'le'],
      },
    },
    {
      id: 'sentence69',
      level: 2,
      isFinal: false,
      korean: '분류하여 잘 정리되었다.',
      chinese: {
        hanzi: ['分类', '整理', '好', '了'],
        pinyin: ['fēnlèi', 'zhěnglǐ', 'hǎo', 'le'],
      },
    },
    {
      id: 'sentence69',
      level: 3,
      isFinal: false,
      korean: '그가 분류하여 잘 정리했다. (= 그에 의해 분류되어 잘 정리됐다.)',
      chinese: {
        hanzi: ['被', '他', '分类', '整理', '好', '了'],
        pinyin: ['bèi', 'tā', 'fēnlèi', 'zhěnglǐ', 'hǎo', 'le'],
      },
    },
    {
      id: 'sentence69',
      level: 4,
      isFinal: false,
      korean:
        '다 그가 분류해서 정리했다. (= 다 그에 의해 분류되어 잘 정리됐다.)',
      chinese: {
        hanzi: ['都', '被', '他', '分类', '整理', '好', '了'],
        pinyin: ['dōu', 'bèi', 'tā', 'fēnlèi', 'zhěnglǐ', 'hǎo', 'le'],
      },
    },
    {
      id: 'sentence69',
      level: 5,
      isFinal: true,
      korean:
        '모든 파일은 다 그가 분류·정리했다. (= 모든 파일은 다 그에 의해 분류되어 잘 정리됐다.)',
      chinese: {
        hanzi: ['所有', '文件', '都', '被', '他', '分类', '整理', '好', '了'],
        pinyin: [
          'suǒyǒu',
          'wénjiàn',
          'dōu',
          'bèi',
          'tā',
          'fēnlèi',
          'zhěnglǐ',
          'hǎo',
          'le',
        ],
      },
    },
    // 80번
    {
      id: 'sentence70',
      level: 1,
      isFinal: false,
      korean: '더 효율적이다.',
      chinese: {
        hanzi: ['更', '高效'],
        pinyin: ['gèng', 'gāoxiào'],
      },
    },
    {
      id: 'sentence70',
      level: 2,
      isFinal: false,
      korean: '더 효율적으로 변했다.',
      chinese: {
        hanzi: ['变得', '更', '高效', '了'],
        pinyin: ['biànde', 'gèng', 'gāoxiào', 'le'],
      },
    },
    {
      id: 'sentence70',
      level: 3,
      isFinal: false,
      korean: '일을 더 효율적으로 변하도록 했다.',
      chinese: {
        hanzi: ['让', '工作', '变得', '更', '高效', '了'],
        pinyin: ['ràng', 'gōngzuò', 'biànde', 'gèng', 'gāoxiào', 'le'],
      },
    },
    {
      id: 'sentence70',
      level: 4,
      isFinal: false,
      korean: '우리의 일을 더 효율적으로 변하도록 했다.',
      chinese: {
        hanzi: ['让', '我们', '的', '工作', '变得', '更', '高效', '了'],
        pinyin: [
          'ràng',
          'wǒmen',
          'de',
          'gōngzuò',
          'biànde',
          'gèng',
          'gāoxiào',
          'le',
        ],
      },
    },
    {
      id: 'sentence70',
      level: 5,
      isFinal: true,
      korean: '새 기술이 우리의 일을 더 효율적으로 변하도록 했다.',
      chinese: {
        hanzi: [
          '新',
          '技术',
          '让',
          '我们',
          '的',
          '工作',
          '变得',
          '更',
          '高效',
          '了',
        ],
        pinyin: [
          'xīn',
          'jìshù',
          'ràng',
          'wǒmen',
          'de',
          'gōngzuò',
          'biànde',
          'gèng',
          'gāoxiào',
          'le',
        ],
      },
    },
  ],
  day8: [
    // 71번
    {
      id: 'sentence71',
      level: 1,
      isFinal: false,
      korean: '공동의 책임',
      chinese: {
        hanzi: ['共同', '的', '责任'],
        pinyin: ['gòngtóng', 'de', 'zérèn'],
      },
    },
    {
      id: 'sentence71',
      level: 2,
      isFinal: false,
      korean: '인류 공동의 책임',
      chinese: {
        hanzi: ['人类', '共同', '的', '责任'],
        pinyin: ['rénlèi', 'gòngtóng', 'de', 'zérèn'],
      },
    },
    {
      id: 'sentence71',
      level: 3,
      isFinal: true,
      korean: '교육은 인류 공동의 책임이다.',
      chinese: {
        hanzi: ['教育', '是', '人类', '共同', '的', '责任'],
        pinyin: ['jiàoyù', 'shì', 'rénlèi', 'gòngtóng', 'de', 'zérèn'],
      },
    },

    // 72번
    {
      id: 'sentence72',
      level: 1,
      isFinal: false,
      korean: '감동적으로 친다. (= 치는 정도가 감동적이다.)',
      chinese: {
        hanzi: ['弹', '得', '动人'],
        pinyin: ['tán', 'de', 'dòngrén'],
      },
    },
    {
      id: 'sentence72',
      level: 2,
      isFinal: false,
      korean: '매우 감동적으로 친다. (= 치는 정도가 매우 감동적이다.)',
      chinese: {
        hanzi: ['弹', '得', '十分', '动人'],
        pinyin: ['tán', 'de', 'shífēn', 'dòngrén'],
      },
    },
    {
      id: 'sentence72',
      level: 3,
      isFinal: false,
      korean:
        '피아노를 매우 감동적으로 친다. (= 피아노를 치는 정도가 매우 감동적이다.)',
      chinese: {
        hanzi: ['钢琴', '弹', '得', '十分', '动人'],
        pinyin: ['gāngqín', 'tán', 'de', 'shífēn', 'dòngrén'],
      },
    },
    {
      id: 'sentence72',
      level: 4,
      isFinal: true,
      korean:
        '그는 피아노를 매우 감동적으로 친다. (= 그는 피아노를 치는 정도가 매우 감동적이다.)',
      chinese: {
        hanzi: ['他', '钢琴', '弹', '得', '十分', '动人'],
        pinyin: ['tā', 'gāngqín', 'tán', 'de', 'shífēn', 'dòngrén'],
      },
    },

    // 73번
    {
      id: 'sentence73',
      level: 1,
      isFinal: false,
      korean: '방법은 매우 간단하다.',
      chinese: {
        hanzi: ['方法', '很', '简单'],
        pinyin: ['fāngfǎ', 'hěn', 'jiǎndān'],
      },
    },
    {
      id: 'sentence73',
      level: 2,
      isFinal: false,
      korean: '조작 방법은 매우 간단하다.',
      chinese: {
        hanzi: ['操作', '方法', '很', '简单'],
        pinyin: ['cāozuò', 'fāngfǎ', 'hěn', 'jiǎndān'],
      },
    },
    {
      id: 'sentence73',
      level: 3,
      isFinal: false,
      korean: '소프트웨어의 조작 방법은 매우 간단하다.',
      chinese: {
        hanzi: ['软件', '的', '操作', '方法', '很', '简单'],
        pinyin: ['ruǎnjiàn', 'de', 'cāozuò', 'fāngfǎ', 'hěn', 'jiǎndān'],
      },
    },
    {
      id: 'sentence73',
      level: 4,
      isFinal: true,
      korean: '이 소프트웨어의 조작 방법은 매우 간단하다.',
      chinese: {
        hanzi: ['这个', '软件', '的', '操作', '方法', '很', '简单'],
        pinyin: [
          'zhège',
          'ruǎnjiàn',
          'de',
          'cāozuò',
          'fāngfǎ',
          'hěn',
          'jiǎndān',
        ],
      },
    },
    // 74번
    {
      id: 'sentence74',
      level: 1,
      isFinal: false,
      korean: '냉장고에 넣다.',
      chinese: {
        hanzi: ['放进', '冰箱', '里'],
        pinyin: ['fàngjìn', 'bīngxiāng', 'lǐ'],
      },
    },
    {
      id: 'sentence74',
      level: 2,
      isFinal: false,
      korean: '냉장고에 넣자(넣어라).',
      chinese: {
        hanzi: ['放进', '冰箱', '里', '吧'],
        pinyin: ['fàngjìn', 'bīngxiāng', 'lǐ', 'ba'],
      },
    },
    {
      id: 'sentence74',
      level: 3,
      isFinal: false,
      korean: '다 마시지 않은 우유',
      chinese: {
        hanzi: ['没', '喝', '完', '的', '牛奶'],
        pinyin: ['méi', 'hē', 'wán', 'de', 'niúnǎi'],
      },
    },
    {
      id: 'sentence74',
      level: 4,
      isFinal: true,
      korean: '다 마시지 않은 우유를 냉장고에 넣어라.',
      chinese: {
        hanzi: [
          '把',
          '没',
          '喝',
          '完',
          '的',
          '牛奶',
          '放进',
          '冰箱',
          '里',
          '吧',
        ],
        pinyin: [
          'bǎ',
          'méi',
          'hē',
          'wán',
          'de',
          'niúnǎi',
          'fàngjìn',
          'bīngxiāng',
          'lǐ',
          'ba',
        ],
      },
    },
    // 75번
    {
      id: 'sentence75',
      level: 1,
      isFinal: false,
      korean: '기침이 심하다. (=기침하는 정도가 심하다)',
      chinese: {
        hanzi: ['咳嗽', '得', '严重'],
        pinyin: ['késou', 'de', 'yánzhòng'],
      },
    },
    {
      id: 'sentence75',
      level: 2,
      isFinal: false,
      korean: '점점 심하게 기침한다. (=기침하는 정도가 점점 심하다)',
      chinese: {
        hanzi: ['咳嗽', '得', '越来越', '严重'],
        pinyin: ['késou', 'de', 'yuèláiyuè', 'yánzhòng'],
      },
    },
    {
      id: 'sentence75',
      level: 3,
      isFinal: true,
      korean:
        '아이가 점점 심하게 기침한다. (=아이가 기침하는 정도가 점점 심하다)',
      chinese: {
        hanzi: ['孩子', '咳嗽', '得', '越来越', '严重'],
        pinyin: ['háizi', 'késou', 'de', 'yuèláiyuè', 'yánzhòng'],
      },
    },
    // 76번
    {
      id: 'sentence76',
      level: 1,
      isFinal: false,
      korean: '내용은 훌륭하다.',
      chinese: {
        hanzi: ['内容', '精彩'],
        pinyin: ['nèiróng', 'jīngcǎi'],
      },
    },
    {
      id: 'sentence76',
      level: 2,
      isFinal: false,
      korean: '영화 내용은 훌륭하다.',
      chinese: {
        hanzi: ['电影', '内容', '精彩'],
        pinyin: ['diànyǐng', 'nèiróng', 'jīngcǎi'],
      },
    },
    {
      id: 'sentence76',
      level: 3,
      isFinal: false,
      korean: '영화 내용은 훌륭해?',
      chinese: {
        hanzi: ['电影', '内容', '精彩', '吗'],
        pinyin: ['diànyǐng', 'nèiróng', 'jīngcǎi', 'ma'],
      },
    },
    {
      id: 'sentence76',
      level: 4,
      isFinal: true,
      korean: '지난주 영화 내용은 훌륭했어?',
      chinese: {
        hanzi: ['上周', '的', '电影', '内容', '精彩', '吗'],
        pinyin: ['shàngzhōu', 'de', 'diànyǐng', 'nèiróng', 'jīngcǎi', 'ma'],
      },
    },
    // 77번
    {
      id: 'sentence77',
      level: 1,
      isFinal: false,
      korean: '의견이 있다.',
      chinese: {
        hanzi: ['有', '看法'],
        pinyin: ['yǒu', 'kànfǎ'],
      },
    },
    {
      id: 'sentence77',
      level: 2,
      isFinal: false,
      korean: '이 일에 대해 의견이 있다.',
      chinese: {
        hanzi: ['对', '这件事', '有', '看法'],
        pinyin: ['duì', 'zhè jiàn shì', 'yǒu', 'kànfǎ'],
      },
    },
    {
      id: 'sentence77',
      level: 3,
      isFinal: false,
      korean: '이 일에 대해 같은 의견이 있다.',
      chinese: {
        hanzi: ['对', '这', '件', '事', '有', '相同', '看法'],
        pinyin: ['duì', 'zhè', 'jiàn', 'shì', 'yǒu', 'xiāngtóng', 'kànfǎ'],
      },
    },
    {
      id: 'sentence77',
      level: 4,
      isFinal: true,
      korean: '그들은 이 일에 대해 같은 의견이 있다.',
      chinese: {
        hanzi: ['他们', '对', '这', '件', '事', '有', '相同', '看法'],
        pinyin: [
          'tāmen',
          'duì',
          'zhè',
          'jiàn',
          'shì',
          'yǒu',
          'xiāngtóng',
          'kànfǎ',
        ],
      },
    },
    // 78번
    {
      id: 'sentence78',
      level: 1,
      isFinal: false,
      korean: '(나쁜 습관 등을) 기르지 마라(들이지 마라)',
      chinese: {
        hanzi: ['不要', '养成'],
        pinyin: ['búyào', 'yǎngchéng'],
      },
    },
    {
      id: 'sentence78',
      level: 2,
      isFinal: false,
      korean: '나쁜 습관을 들이지 마라.',
      chinese: {
        hanzi: ['不要', '养成', '坏', '习惯'],
        pinyin: ['búyào', 'yǎngchéng', 'huài', 'xíguàn'],
      },
    },
    {
      id: 'sentence78',
      level: 3,
      isFinal: true,
      korean: '지각하는 나쁜 습관을 들이지 마라.',
      chinese: {
        hanzi: ['不要', '养成', '迟到', '的', '坏', '习惯'],
        pinyin: ['búyào', 'yǎngchéng', 'chídào', 'de', 'huài', 'xíguàn'],
      },
    },
    // 79번
    {
      id: 'sentence79',
      level: 1,
      isFinal: false,
      korean: '눈물을 흘렸다.',
      chinese: {
        hanzi: ['流泪', '了'],
        pinyin: ['liúlèi', 'le'],
      },
    },
    {
      id: 'sentence79',
      level: 2,
      isFinal: false,
      korean: '눈물을 흘릴 정도로 감동했다.',
      chinese: {
        hanzi: ['感动', '得', '流泪', '了'],
        pinyin: ['gǎndòng', 'de', 'liúlèi', 'le'],
      },
    },
    {
      id: 'sentence79',
      level: 3,
      isFinal: true,
      korean: '그녀는 눈물을 흘릴 정도로 감동했다.',
      chinese: {
        hanzi: ['她', '感动', '得', '流泪', '了'],
        pinyin: ['tā', 'gǎndòng', 'de', 'liúlèi', 'le'],
      },
    },
    // 80번
    {
      id: 'sentence80',
      level: 1,
      isFinal: false,
      korean: '그는 ……을 증명했다.',
      chinese: {
        hanzi: ['他', '证明'],
        pinyin: ['tā', 'zhèngmíng'],
      },
    },
    {
      id: 'sentence80',
      level: 2,
      isFinal: false,
      korean: '그는 ……을 증명하고 싶어 한다.',
      chinese: {
        hanzi: ['他', '想', '证明'],
        pinyin: ['tā', 'xiǎng', 'zhèngmíng'],
      },
    },
    {
      id: 'sentence80',
      level: 3,
      isFinal: false,
      korean: '선택은 옳다. (= 선택은 옳은 것이다.)',
      chinese: {
        hanzi: ['选择', '是', '正确的'],
        pinyin: ['xuǎnzé', 'shì', 'zhèngquè de'],
      },
    },
    {
      id: 'sentence80',
      level: 4,
      isFinal: false,
      korean: '자신의 선택은 옳다. (= 자신의 선택은 옳은 것이다.)',
      chinese: {
        hanzi: ['自己', '的', '选择', '是', '正确的'],
        pinyin: ['zìjǐ', 'de', 'xuǎnzé', 'shì', 'zhèngquè de'],
      },
    },
    {
      id: 'sentence80',
      level: 5,
      isFinal: true,
      korean: '그는 자신의 선택이 옳다는 것을 증명하고 싶어 한다.',
      chinese: {
        hanzi: ['他', '想', '证明', '自己', '的', '选择', '是', '正确', '的'],
        pinyin: [
          'tā',
          'xiǎng',
          'zhèngmíng',
          'zìjǐ',
          'de',
          'xuǎnzé',
          'shì',
          'zhèngquè',
          'de',
        ],
      },
    },
  ],
  day9: [
    // 81번
    {
      id: 'sentence81',
      level: 1,
      isFinal: false,
      korean: '다리 하나',
      chinese: {
        hanzi: ['一座桥'],
        pinyin: ['yí zuò qiáo'],
      },
    },
    {
      id: 'sentence81',
      level: 2,
      isFinal: false,
      korean: '다리 하나를 그리다.',
      chinese: {
        hanzi: ['画', '一', '座', '桥'],
        pinyin: ['huà', 'yí', 'zuò', 'qiáo'],
      },
    },
    {
      id: 'sentence81',
      level: 3,
      isFinal: false,
      korean: '다리 하나를 그렸다.',
      chinese: {
        hanzi: ['画了', '一', '座', '桥'],
        pinyin: ['huà le', 'yí', 'zuò', 'qiáo'],
      },
    },
    {
      id: 'sentence81',
      level: 4,
      isFinal: true,
      korean: '화이트보드에 다리 하나를 그렸다.',
      chinese: {
        hanzi: ['白板上', '画', '了', '一', '座', '桥'],
        pinyin: ['báibǎn shàng', 'huà', 'le', 'yí', 'zuò', 'qiáo'],
      },
    },
    // 82번
    {
      id: 'sentence82',
      level: 1,
      isFinal: false,
      korean: '완전히 반대이다.',
      chinese: {
        hanzi: ['正好', '相反'],
        pinyin: ['zhènghǎo', 'xiāngfǎn'],
      },
    },
    {
      id: 'sentence82',
      level: 2,
      isFinal: false,
      korean: '의견이 완전히 반대이다.',
      chinese: {
        hanzi: ['意见', '正好', '相反'],
        pinyin: ['yìjiàn', 'zhènghǎo', 'xiāngfǎn'],
      },
    },
    {
      id: 'sentence82',
      level: 3,
      isFinal: false,
      korean: '학우의 의견과 완전히 반대이다.',
      chinese: {
        hanzi: ['和', '同学', '的', '意见', '正好', '相反'],
        pinyin: ['hé', 'tóngxué', 'de', 'yìjiàn', 'zhènghǎo', 'xiāngfǎn'],
      },
    },
    {
      id: 'sentence82',
      level: 4,
      isFinal: true,
      korean: '나와 학우의 의견이 완전히 반대이다.',
      chinese: {
        hanzi: ['我', '和', '同学', '的', '意见', '正好', '相反'],
        pinyin: ['wǒ', 'hé', 'tóngxué', 'de', 'yìjiàn', 'zhènghǎo', 'xiāngfǎn'],
      },
    },
    // 83번
    {
      id: 'sentence83',
      level: 1,
      isFinal: false,
      korean: '관객을 끌어당기다.',
      chinese: {
        hanzi: ['吸引', '观众'],
        pinyin: ['xīyǐn', 'guānzhòng'],
      },
    },
    {
      id: 'sentence83',
      level: 2,
      isFinal: false,
      korean: '많은 관객을 끌어당기다',
      chinese: {
        hanzi: ['吸引', '大量', '的', '观众'],
        pinyin: ['xīyǐn', 'dàliàng', 'de', 'guānzhòng'],
      },
    },
    {
      id: 'sentence83',
      level: 3,
      isFinal: false,
      korean: '많은 관객을 끌어당겼다.',
      chinese: {
        hanzi: ['吸引了', '大量', '的', '观众'],
        pinyin: ['xīyǐn le', 'dàliàng', 'de', 'guānzhòng'],
      },
    },
    {
      id: 'sentence83',
      level: 4,
      isFinal: false,
      korean: '공연이 많은 관객을 끌어당겼다.',
      chinese: {
        hanzi: ['演出', '吸引了', '大量', '的', '观众'],
        pinyin: ['yǎnchū', 'xīyǐn le', 'dàliàng', 'de', 'guānzhòng'],
      },
    },
    {
      id: 'sentence83',
      level: 5,
      isFinal: true,
      korean: '멋진 공연이 많은 관객을 끌어당겼다.',
      chinese: {
        hanzi: ['精彩', '的', '演出', '吸引了', '大量', '的', '观众'],
        pinyin: [
          'jīngcǎi',
          'de',
          'yǎnchū',
          'xīyǐn le',
          'dàliàng',
          'de',
          'guānzhòng',
        ],
      },
    },
    // 84번
    {
      id: 'sentence84',
      level: 1,
      isFinal: false,
      korean: '놀라지 않다.',
      chinese: {
        hanzi: ['不', '惊讶'],
        pinyin: ['bù', 'jīngyà'],
      },
    },
    {
      id: 'sentence84',
      level: 2,
      isFinal: false,
      korean: '조금도 놀라지 않다.',
      chinese: {
        hanzi: ['一点儿', '都不', '惊讶'],
        pinyin: ['yìdiǎnr', 'dōu bù', 'jīngyà'],
      },
    },
    {
      id: 'sentence84',
      level: 3,
      isFinal: false,
      korean: '설마 조금도 놀라지 않는 거니?',
      chinese: {
        hanzi: ['难道', '一点儿', '都不', '惊讶', '吗'],
        pinyin: ['nándào', 'yìdiǎnr', 'dōu bù', 'jīngyà', 'ma'],
      },
    },
    {
      id: 'sentence84',
      level: 4,
      isFinal: true,
      korean:
        '너는 설마 조금도 놀라지 않는 거니? (= 너는 정말 조금도 놀라지 않는 거니?)',
      chinese: {
        hanzi: ['你', '难道', '一点儿', '都', '不', '惊讶', '吗'],
        pinyin: ['nǐ', 'nándào', 'yìdiǎnr', 'dōu', 'bù', 'jīngyà', 'ma'],
      },
    },
    // 85번
    {
      id: 'sentence85',
      level: 1,
      isFinal: false,
      korean: '재채기하다.',
      chinese: {
        hanzi: ['打', '喷嚏'],
        pinyin: ['dǎ', 'pēntì'],
      },
    },
    {
      id: 'sentence85',
      level: 2,
      isFinal: false,
      korean: '멈추지 않고 재채기하다.',
      chinese: {
        hanzi: ['不停地', '打', '喷嚏'],
        pinyin: ['bùtíng de', 'dǎ', 'pēntì'],
      },
    },
    {
      id: 'sentence85',
      level: 3,
      isFinal: false,
      korean: '눕기만 하면 바로…… 하다.',
      chinese: {
        hanzi: ['一', '躺下', '就'],
        pinyin: ['yì', 'tǎngxia', 'jiù'],
      },
    },
    {
      id: 'sentence85',
      level: 4,
      isFinal: false,
      korean: '눕기만 하면 (바로) 멈추지 않고 재채기한다.',
      chinese: {
        hanzi: ['一', '躺下', '就', '不停地', '打', '喷嚏'],
        pinyin: ['yì', 'tǎngxia', 'jiù', 'bùtíng de', 'dǎ', 'pēntì'],
      },
    },
    {
      id: 'sentence85',
      level: 5,
      isFinal: true,
      korean: '외할머니는 눕기만 하면 (바로) 멈추지 않고 재채기한다.',
      chinese: {
        hanzi: ['外婆', '一', '躺下', '就', '不停', '地', '打', '喷嚏'],
        pinyin: [
          'wàipó',
          'yì',
          'tǎngxia',
          'jiù',
          'bùtíng',
          'de',
          'dǎ',
          'pēntì',
        ],
      },
    },
    // 86번
    {
      id: 'sentence86',
      level: 1,
      isFinal: false,
      korean: '한번 닦다.',
      chinese: {
        hanzi: ['擦', '一下'],
        pinyin: ['cā', 'yíxià'],
      },
    },
    {
      id: 'sentence86',
      level: 2,
      isFinal: false,
      korean: '땀을 한번 닦다.',
      chinese: {
        hanzi: ['把', '汗', '擦', '一下'],
        pinyin: ['bǎ', 'hàn', 'cā', 'yíxià'],
      },
    },
    {
      id: 'sentence86',
      level: 3,
      isFinal: false,
      korean: '이마의 땀을 한번 닦다.',
      chinese: {
        hanzi: ['把', '额头', '上', '的', '汗', '擦', '一下'],
        pinyin: ['bǎ', 'étóu', 'shàng', 'de', 'hàn', 'cā', 'yíxià'],
      },
    },
    {
      id: 'sentence86',
      level: 4,
      isFinal: true,
      korean: '어서 이마의 땀을 한번 닦아라.',
      chinese: {
        hanzi: ['快', '把', '额头', '上', '的', '汗', '擦', '一下'],
        pinyin: ['kuài', 'bǎ', 'étóu', 'shàng', 'de', 'hàn', 'cā', 'yíxià'],
      },
    },
    {
      id: 'sentence87',
      level: 1,
      isFinal: false,
      korean: '잃어버렸다.',
      chinese: {
        hanzi: ['弄丢', '了'],
        pinyin: ['nòngdiū', 'le'],
      },
    },
    {
      id: 'sentence87',
      level: 2,
      isFinal: false,
      korean: '학우가 잃어버렸다. (= 학우에 의해 잃어버려졌다.)',
      chinese: {
        hanzi: ['被', '同学', '弄丢', '了'],
        pinyin: ['bèi', 'tóngxué', 'nòngdiū', 'le'],
      },
    },
    {
      id: 'sentence87',
      level: 3,
      isFinal: true,
      korean:
        '내 여권을 학우가 잃어버렸다. (= 내 여권은 학우에 의해 잃어버려졌다.)',
      chinese: {
        hanzi: ['我', '的', '护照', '被', '同学', '弄', '丢', '了'],
        pinyin: ['wǒ', 'de', 'hùzhào', 'bèi', 'tóngxué', 'nòng', 'diū', 'le'],
      },
    },
    {
      id: 'sentence88',
      level: 1,
      isFinal: false,
      korean: '채용에 통과하다.',
      chinese: {
        hanzi: ['通过', '应聘'],
        pinyin: ['tōngguò', 'yìngpìn'],
      },
    },
    {
      id: 'sentence88',
      level: 2,
      isFinal: false,
      korean: '순조롭게 채용에 통과하다.',
      chinese: {
        hanzi: ['顺利', '通过', '应聘'],
        pinyin: ['shùnlì', 'tōngguò', 'yìngpìn'],
      },
    },
    {
      id: 'sentence88',
      level: 3,
      isFinal: false,
      korean: '순조롭게 채용에 (충분히) 통과할 수 있다.',
      chinese: {
        hanzi: ['能够', '顺利通过', '应聘'],
        pinyin: ['nénggòu', 'shùnlì tōngguò', 'yìngpìn'],
      },
    },
    {
      id: 'sentence88',
      level: 4,
      isFinal: false,
      korean: '1%의 사람이 순조롭게 채용에 (충분히) 통과할 수 있다.',
      chinese: {
        hanzi: ['百分之', '一', '的', '人', '能够', '顺利', '通过', '应聘'],
        pinyin: [
          'bǎifēnzhī',
          'yī',
          'de',
          'rén',
          'nénggòu',
          'shùnlì',
          'tōngguò',
          'yìngpìn',
        ],
      },
    },
    {
      id: 'sentence88',
      level: 5,
      isFinal: true,
      korean: '오직 1%의 사람이 순조롭게 채용에 (충분히) 통과할 수 있다.',
      chinese: {
        hanzi: [
          '只有',
          '百分之',
          '一',
          '的',
          '人',
          '能够',
          '顺利',
          '通过',
          '应聘',
        ],
        pinyin: [
          'zhǐyǒu',
          'bǎifēnzhī',
          'yī',
          'de',
          'rén',
          'nénggòu',
          'shùnlì',
          'tōngguò',
          'yìngpìn',
        ],
      },
    },
    {
      id: 'sentence89',
      level: 1,
      isFinal: false,
      korean: '시간 안에 가능하다. (= 시간에 맞는다.)',
      chinese: {
        hanzi: ['来得及'],
        pinyin: ['láidejí'],
      },
    },
    {
      id: 'sentence89',
      level: 2,
      isFinal: false,
      korean: '완전히 시간 안에 가능하다. (= 충분히 시간에 맞는다.)',
      chinese: {
        hanzi: ['完全', '来得及'],
        pinyin: ['wánquán', 'láidejí'],
      },
    },
    {
      id: 'sentence89',
      level: 3,
      isFinal: false,
      korean: '등록하러 가기에 충분히 시간에 맞는다.',
      chinese: {
        hanzi: ['去', '登记', '完全', '来得及'],
        pinyin: ['qù', 'dēngjì', 'wánquán', 'láidejí'],
      },
    },
    {
      id: 'sentence89',
      level: 4,
      isFinal: true,
      korean: '지금 등록하러 가도 충분히 시간에 맞는다.',
      chinese: {
        hanzi: ['现在', '去', '登记', '完全', '来得及'],
        pinyin: ['xiànzài', 'qù', 'dēngjì', 'wánquán', 'láidejí'],
      },
    },
    {
      id: 'sentence90',
      level: 1,
      isFinal: false,
      korean: '기차를 제시간에 타다.',
      chinese: {
        hanzi: ['赶上', '火车'],
        pinyin: ['gǎnshàng', 'huǒchē'],
      },
    },
    {
      id: 'sentence90',
      level: 2,
      isFinal: false,
      korean: '기차를 제시간에 탈 수 있다.',
      chinese: {
        hanzi: ['能', '赶上', '火车'],
        pinyin: ['néng', 'gǎnshàng', 'huǒchē'],
      },
    },
    {
      id: 'sentence90',
      level: 3,
      isFinal: false,
      korean: '기차를 제시간에 타지 못했다.',
      chinese: {
        hanzi: ['没能', '赶上', '火车'],
        pinyin: ['méi néng', 'gǎnshàng', 'huǒchē'],
      },
    },
    {
      id: 'sentence90',
      level: 4,
      isFinal: false,
      korean: '역시 기차를 제시간에 타지 못했다.',
      chinese: {
        hanzi: ['还是', '没能', '赶上', '火车'],
        pinyin: ['háishì', 'méi néng', 'gǎnshàng', 'huǒchē'],
      },
    },
    {
      id: 'sentence90',
      level: 5,
      isFinal: false,
      korean: '결국 역시 기차를 제시간에 타지 못했다.',
      chinese: {
        hanzi: ['到底', '还是', '没能', '赶上', '火车'],
        pinyin: ['dàodǐ', 'háishì', 'méi néng', 'gǎnshàng', 'huǒchē'],
      },
    },
    {
      id: 'sentence90',
      level: 6,
      isFinal: true,
      korean: '남동생은 결국 (역시) 기차를 제시간에 타지 못했다.',
      chinese: {
        hanzi: ['弟弟', '到底', '还是', '没', '能', '赶上', '火车'],
        pinyin: [
          'dìdi',
          'dàodǐ',
          'háishì',
          'méi',
          'néng',
          'gǎnshàng',
          'huǒchē',
        ],
      },
    },
  ],
  day10: [
    // 91번
    {
      id: 'sentence91',
      level: 1,
      isFinal: false,
      korean: '유명한 강',
      chinese: {
        hanzi: ['著名的河流'],
        pinyin: ['zhùmíng de héliú'],
      },
    },
    {
      id: 'sentence91',
      level: 2,
      isFinal: false,
      korean: '가장 유명한 강',
      chinese: {
        hanzi: ['最', '著名', '的', '河流'],
        pinyin: ['zuì', 'zhùmíng', 'de', 'héliú'],
      },
    },
    {
      id: 'sentence91',
      level: 3,
      isFinal: false,
      korean: '중국에서 가장 유명한 강',
      chinese: {
        hanzi: ['中国', '最', '著名', '的', '河流'],
        pinyin: ['zhōngguó', 'zuì', 'zhùmíng', 'de', 'héliú'],
      },
    },
    {
      id: 'sentence91',
      level: 4,
      isFinal: false,
      korean: '중국에서 가장 유명한 강 중 하나이다.',
      chinese: {
        hanzi: ['中国', '最', '著名', '的', '河流', '之一'],
        pinyin: ['zhōngguó', 'zuì', 'zhùmíng', 'de', 'héliú', 'zhī yī'],
      },
    },
    {
      id: 'sentence91',
      level: 5,
      isFinal: true,
      korean: '황허강은 중국에서 가장 유명한 강 중 하나이다.',
      chinese: {
        hanzi: ['黄河', '是', '中国', '最', '著名', '的', '河流', '之', '一'],
        pinyin: [
          'huánghé',
          'shì',
          'Zhōngguó',
          'zuì',
          'zhùmíng',
          'de',
          'héliú',
          'zhī',
          'yī',
        ],
      },
    },
    //92번
    {
      id: 'sentence92',
      level: 1,
      isFinal: false,
      korean: '어떤 차이?',
      chinese: {
        hanzi: ['什么', '区别'],
        pinyin: ['shénme', 'qūbié'],
      },
    },
    {
      id: 'sentence92',
      level: 2,
      isFinal: false,
      korean: '어떤 차이가 있나요?',
      chinese: {
        hanzi: ['有', '什么', '区别'],
        pinyin: ['yǒu', 'shénme', 'qūbié'],
      },
    },
    {
      id: 'sentence92',
      level: 3,
      isFinal: false,
      korean: '두 표현에 어떤 차이가 있나요?',
      chinese: {
        hanzi: ['两', '个', '表达', '有', '什么', '区别'],
        pinyin: ['liǎng', 'ge', 'biǎodá', 'yǒu', 'shénme', 'qūbié'],
      },
    },
    {
      id: 'sentence92',
      level: 4,
      isFinal: true,
      korean: '이 두 표현에 어떤 차이가 있나요?',
      chinese: {
        hanzi: ['这', '两', '个', '表达', '有', '什么', '区别'],
        pinyin: ['zhè', 'liǎng', 'ge', 'biǎodá', 'yǒu', 'shénme', 'qūbié'],
      },
    },
    //93번
    {
      id: 'sentence93',
      level: 1,
      isFinal: false,
      korean: '적혀 있다.',
      chinese: {
        hanzi: ['写着'],
        pinyin: ['xiězhe'],
      },
    },
    {
      id: 'sentence93',
      level: 2,
      isFinal: false,
      korean: '이름이 적혀 있다.',
      chinese: {
        hanzi: ['写着', '姓名'],
        pinyin: ['xiězhe', 'xìngmíng'],
      },
    },
    {
      id: 'sentence93',
      level: 3,
      isFinal: false,
      korean: '이름이 분명하게 적혀 있다.',
      chinese: {
        hanzi: ['清楚地', '写着', '姓名'],
        pinyin: ['qīngchu de', 'xiězhe', 'xìngmíng'],
      },
    },
    {
      id: 'sentence93',
      level: 4,
      isFinal: true,
      korean: '명단에 이름이 분명하게 적혀 있다.',
      chinese: {
        hanzi: ['名单', '上', '清楚', '地', '写着', '姓名'],
        pinyin: ['míngdān', 'shàng', 'qīngchu', 'de', 'xiězhe', 'xìngmíng'],
      },
    },

    // 94번
    {
      id: 'sentence94',
      level: 1,
      isFinal: false,
      korean: '증가했다.',
      chinese: {
        hanzi: ['增加了'],
        pinyin: ['zēngjiā le'],
      },
    },
    {
      id: 'sentence94',
      level: 2,
      isFinal: false,
      korean: '4배 증가했다.',
      chinese: {
        hanzi: ['增加了', '四', '倍'],
        pinyin: ['zēngjiā le', 'sì', 'bèi'],
      },
    },
    {
      id: 'sentence94',
      level: 3,
      isFinal: false,
      korean: '과거보다 4배 증가했다.',
      chinese: {
        hanzi: ['比', '过去', '增加了', '四', '倍'],
        pinyin: ['bǐ', 'guòqù', 'zēngjiā le', 'sì', 'bèi'],
      },
    },
    {
      id: 'sentence94',
      level: 4,
      isFinal: true,
      korean: '월급이 과거보다 4배 증가했다.',
      chinese: {
        hanzi: ['工资', '比', '过去', '增加了', '四', '倍'],
        pinyin: ['gōngzī', 'bǐ', 'guòqù', 'zēngjiā le', 'sì', 'bèi'],
      },
    },

    //95번
    {
      id: 'sentence95',
      level: 1,
      isFinal: false,
      korean: '아주 깊은 인상',
      chinese: {
        hanzi: ['很深', '的', '印象'],
        pinyin: ['hěn shēn', 'de', 'yìnxiàng'],
      },
    },
    {
      id: 'sentence95',
      level: 2,
      isFinal: false,
      korean: '(아주) 깊은 인상을 남겼다.',
      chinese: {
        hanzi: ['留下', '了', '很深', '的', '印象'],
        pinyin: ['liúxià', 'le', 'hěn shēn', 'de', 'yìnxiàng'],
      },
    },
    {
      id: 'sentence95',
      level: 3,
      isFinal: false,
      korean: '나에게 (아주) 깊은 인상을 남겼다.',
      chinese: {
        hanzi: ['给', '我', '留下', '了', '很深', '的', '印象'],
        pinyin: ['gěi', 'wǒ', 'liúxià', 'le', 'hěn shēn', 'de', 'yìnxiàng'],
      },
    },
    {
      id: 'sentence95',
      level: 4,
      isFinal: true,
      korean: '선생님의 태도는 나에게 (아주) 깊은 인상을 남겼다.',
      chinese: {
        hanzi: [
          '老师的',
          '态度',
          '给',
          '我',
          '留下',
          '了',
          '很',
          '深',
          '的',
          '印象',
        ],
        pinyin: [
          'lǎoshī de',
          'tàidù',
          'gěi',
          'wǒ',
          'liúxià',
          'le',
          'hěn',
          'shēn',
          'de',
          'yìnxiàng',
        ],
      },
    },

    //96번
    {
      id: 'sentence96',
      level: 1,
      isFinal: false,
      korean: '순조롭지 않다.',
      chinese: {
        hanzi: ['不', '顺利'],
        pinyin: ['bú', 'shùnlì'],
      },
    },
    {
      id: 'sentence96',
      level: 2,
      isFinal: false,
      korean: '전혀 순조롭지 않다.',
      chinese: {
        hanzi: ['并不', '顺利'],
        pinyin: ['bìngbú', 'shùnlì'],
      },
    },
    {
      id: 'sentence96',
      level: 3,
      isFinal: false,
      korean:
        '진행이 전혀 순조롭지 않다. (= 전개되는 정도가 전혀 순조롭지 않다.)',
      chinese: {
        hanzi: ['展开', '得', '并不', '顺利'],
        pinyin: ['zhǎnkāi', 'de', 'bìngbú', 'shùnlì'],
      },
    },
    {
      id: 'sentence96',
      level: 4,
      isFinal: true,
      korean:
        '업무(임무) 진행이 전혀 순조롭지 않다. (= 임무가 전개되는 정도가 전혀 순조롭지 않다.)',
      chinese: {
        hanzi: ['任务', '展开', '得', '并不', '顺利'],
        pinyin: ['rènwù', 'zhǎnkāi', 'de', 'bìngbú', 'shùnlì'],
      },
    },

    // 97번
    {
      id: 'sentence97',
      level: 1,
      isFinal: false,
      korean: '건배하다.',
      chinese: {
        hanzi: ['干杯'],
        pinyin: ['gānbēi'],
      },
    },
    {
      id: 'sentence97',
      level: 2,
      isFinal: false,
      korean: '승리를 위해 건배하다.',
      chinese: {
        hanzi: ['为', '胜利', '干杯'],
        pinyin: ['wèi', 'shènglì', 'gānbēi'],
      },
    },
    {
      id: 'sentence97',
      level: 3,
      isFinal: true,
      korean: '우리 승리를 위해 건배하도록 하자.',
      chinese: {
        hanzi: ['让', '我们', '为', '胜利', '干杯'],
        pinyin: ['ràng', 'wǒmen', 'wèi', 'shènglì', 'gānbēi'],
      },
    },
    //98번
    {
      id: 'sentence98',
      level: 1,
      isFinal: false,
      korean: '이상적인 상태가 되었다.',
      chinese: {
        hanzi: ['理想', '了'],
        pinyin: ['lǐxiǎng', 'le'],
      },
    },
    {
      id: 'sentence98',
      level: 2,
      isFinal: false,
      korean: '점점 이상적인 상태가 되었다.',
      chinese: {
        hanzi: ['越来越', '理想', '了'],
        pinyin: ['yuèláiyuè', 'lǐxiǎng', 'le'],
      },
    },
    {
      id: 'sentence98',
      level: 3,
      isFinal: false,
      korean: '점점 이상적으로 변했다. (= 점점 이상적으로 변하게 되었다.)',
      chinese: {
        hanzi: ['变得', '越来越', '理想', '了'],
        pinyin: ['biànde', 'yuèláiyuè', 'lǐxiǎng', 'le'],
      },
    },
    {
      id: 'sentence98',
      level: 4,
      isFinal: true,
      korean:
        '환경 조건이 점점 이상적으로 변했다. (= 점점 이상적으로 변하게 되었다.)',
      chinese: {
        hanzi: ['环境', '条件', '变得', '越来越', '理想', '了'],
        pinyin: [
          'huánjìng',
          'tiáojiàn',
          'biànde',
          'yuèláiyuè',
          'lǐxiǎng',
          'le',
        ],
      },
    },
    //99번
    {
      id: 'sentence99',
      level: 1,
      isFinal: false,
      korean: '장 안에 넣다.',
      chinese: {
        hanzi: ['放到', '柜子', '里'],
        pinyin: ['fàng dào', 'guìzi', 'lǐ'],
      },
    },
    {
      id: 'sentence99',
      level: 2,
      isFinal: false,
      korean: '열쇠를 장 안에 넣다.',
      chinese: {
        hanzi: ['把', '钥匙', '放到', '柜子', '里'],
        pinyin: ['bǎ', 'yàoshi', 'fàng dào', 'guìzi', 'lǐ'],
      },
    },
    {
      id: 'sentence99',
      level: 3,
      isFinal: false,
      korean: '당신은 열쇠를 장 안에 넣어요.',
      chinese: {
        hanzi: ['你', '把', '钥匙', '放到', '柜子', '里'],
        pinyin: ['nǐ', 'bǎ', 'yàoshi', 'fàng dào', 'guìzi', 'lǐ'],
      },
    },
    {
      id: 'sentence99',
      level: 4,
      isFinal: true,
      korean: '당신은 열쇠를 장 안에 넣어주세요.',
      chinese: {
        hanzi: ['请', '你', '把', '钥匙', '放', '到', '柜子', '里'],
        pinyin: ['qǐng', 'nǐ', 'bǎ', 'yàoshi', 'fàng', 'dào', 'guìzi', 'lǐ'],
      },
    },

    // 100번
    {
      id: 'sentence100',
      level: 1,
      isFinal: false,
      korean: '즐겁다, 유쾌하다',
      chinese: {
        hanzi: ['愉快'],
        pinyin: ['yúkuài'],
      },
    },
    {
      id: 'sentence100',
      level: 2,
      isFinal: false,
      korean: '내 기분을 즐겁게 한다.',
      chinese: {
        hanzi: ['使', '我心情', '愉快'],
        pinyin: ['shǐ', 'wǒ xīnqíng', 'yúkuài'],
      },
    },
    {
      id: 'sentence100',
      level: 3,
      isFinal: true,
      korean:
        '서예 연습은 내 기분을 즐겁게 한다. (= 서예를 연습하는 것은 내 기분을 즐겁게 만든다.)',
      chinese: {
        hanzi: ['练', '书法', '使', '我', '心情', '愉快'],
        pinyin: ['liàn', 'shūfǎ', 'shǐ', 'wǒ', 'xīnqíng', 'yúkuài'],
      },
    },
  ],
};

// 전역 변수로 내보내기
window.sentenceData = sentenceData;
