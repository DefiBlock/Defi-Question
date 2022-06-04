    var arrLang = {
      'en': {
        'SiteTitle': 'MyQuestion',
        'Ethereum': 'Ethereum',
        'Binance': 'Binance',
        'Huobi': 'Huobi',
        'Disclaimer Detail': 'The MyQuestion website (“Site”) is for informational and educational purposes only. The Site displays existing markets deployed on the Polygon and Binance blockchain and is a graphical user interface for both visualizing data from on-chain activity and interacting with smart contracts directly from your own wallet. we takes no custody of users crypto assets and does not host any markets. None of the material on the Site is intended to be, nor does it constitute, a solicitation, recommendation or offer to buy or sell any security, commodity interest, derivative, financial product or instrument. Users are responsible for complying with all applicable laws and should conduct their own analysis and consult with professional advisors prior to entering into any smart contracts. Trading is not available to Restricted Persons, including US Persons.',

      },
      'zh': {
        'SiteTitle': 'MyQuestion',
        'Ethereum': '以太坊链',
        'End Vote Time': '截止时间',
        'Total Volume': '总交易量',
        'Chart': '图表',
        'Trading': '交易',
        'Question detail': '详细说明',
        'Resolver URL': '问题解答网址',
        'Create new question': '创建新的问题',
        'Help': '帮助',
        'Disclaimer': '免责声明',
        'Disclaimer Detail': 'MyQuestion网站（“网站”）仅用于信息和教育目的。 该站点显示部署在 Polygon 和 Binance 区块链上的现有市场，是一个图形用户界面，用于可视化来自链上活动的数据以及直接从您自己的钱包与智能合约交互。  不托管用户的加密资产，也不托管任何市场。 本网站上的任何材料均无意，也不构成买卖任何证券、商品权益、衍生品、金融产品或工具的招揽、推荐或要约。 用户有责任遵守所有适用法律，并应在签订任何智能合约之前进行自己的分析并咨询专业顾问。 受限人士（包括美国人士）无法进行交易。',
        'Days': '天',
        'Hours': '时',
        'Minutes': '分',
        'Seconds': '秒',


      },

      'ru': {
        'SiteTitle': 'MyQuestion',
        'Ethereum': 'Ethereum',
        'End Vote Time': 'Время окончания голосования',
        'Total Volume': 'Общий объем',
        'Chart': 'Диаграмма',
        'Trading': 'Трейдинг',
        'Question detail': 'Подробности вопроса',
        'Resolver URL': 'URL-адрес преобразователя',
        'Create new question': 'Создать новый вопрос',
        'Help': 'Помощь',
        'Disclaimer': 'Отказ от ответственности',
        'Disclaimer Detail': 'Веб-сайт MyQuestion («Сайт») предназначен только для информационных и образовательных целей. Сайт отображает существующие рынки, развернутые на блокчейне Polygon и Binance, и представляет собой графический пользовательский интерфейс как для визуализации данных из активности в сети, так и для взаимодействия со смарт-контрактами непосредственно из вашего собственного кошелька. мы не храним криптоактивы пользователей и не размещаем какие-либо рынки. Ни один из материалов на Сайте не предназначен и не является призывом, рекомендацией или предложением купить или продать какую-либо ценную бумагу, товарный процент, производный финансовый продукт или инструмент. Пользователи несут ответственность за соблюдение всех применимых законов и должны проводить собственный анализ и консультироваться с профессиональными консультантами перед заключением любых смарт-контрактов. Торговля недоступна для лиц с ограниченным доступом, в том числе для жителей США.',
        'Days': 'Дни',
        'Hours': 'Часы',
        'Minutes': 'Минуты',
        'Seconds': 'Секунды',
      },


      'kr': {
        'SiteTitle': 'MyQuestion',
        'Ethereum': 'Ethereum',
        'End Vote Time': '투표 종료 시간',
        'Total Volume': '총 볼륨',
        'Chart': '차트',
        'Trading': '거래',
        'Question detail': '질문 세부정보',
        'Resolver URL': '리졸버 URL',
        'Create new question': '새 질문 만들기',
        'Help': '돕다',
        'Disclaimer': '부인 성명',
        'Disclaimer Detail': 'MyQuestion 웹사이트("사이트")는 정보 제공 및 교육 목적으로만 사용됩니다. 이 사이트는 Polygon 및 Binance 블록체인에 배포된 기존 시장을 표시하며 온체인 활동의 데이터를 시각화하고 자신의 지갑에서 직접 스마트 계약과 상호 작용하기 위한 그래픽 사용자 인터페이스입니다. 우리는 사용자의 암호화 자산을 관리하지 않으며 어떤 시장도 호스팅하지 않습니다. 사이트의 어떠한 자료도 증권, 상품 이자, 파생 상품, 금융 상품 또는 상품의 구매 또는 판매를 권유, 추천 또는 제안할 의도가 없으며 구성하지도 않습니다. 사용자는 모든 관련 법률을 준수할 책임이 있으며 스마트 계약을 체결하기 전에 자체 분석을 수행하고 전문 고문과 상의해야 합니다. 미국 사람을 포함한 제한된 사람은 거래를 사용할 수 없습니다.',
        
      },
      'fa': {
 
      },

      'jp': {
 
      },

      'th': {
 
      }

    };

    // Process translation
    $(function() {
      $('.translate').click(function() {
        var lang = $(this).attr('id');
        console.log("change language..",lang);
        $('.lang').each(function(index, item) {
          $(this).text(arrLang[lang][$(this).attr('key')]);
        });
      });
    });