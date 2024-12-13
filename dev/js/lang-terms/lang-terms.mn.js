'use strict';

var R6MLangTermsMongolian = (function(R6MLangTerms, undefined) {
  var name = 'mn',
    terms = {
      general: {
        pageTitleSelectMap: 'R6Maps.com - Газар сонго',
        cameraViewCaption: '{floorName} камерын дүрс',
        shortcutTip: 'Товчилбор: {shortcut}',
        menu: 'Цэс',
        about: 'Танилцуулга',
        languageHeader: 'Хэл',
        optionsHeader: 'Тохируулга',
        labelLosOpacity: 'Камерын өнцгийн тэмдэглэгээний нягтаршил',
        labelLosDefault: '(Анхны утга)',
        labelLos105: '(Айн?)',
        labelLos110: '(Дэндүү!)',
        labelRoomLabelStyle: 'Өрөөний нэрийн загвар',
        labelNumberFloorsToDisplay: 'Харуулах давхарын тоо',
        lockPanning: 'Гүйлтийг цоожлох',
        lockZooming: 'Томролтыг цоожлох',
        fullScreen: 'Дэлгэц дүүрэн',
        enableScreenshots: 'Зураг авах боломж',
        contributions: 'Хандив',
        supportSiteNote: 'Бага зэргийн хандив өргөн намайг дэмжихийг хүсье. :)',
        latestUpdate: '2017 оны 2 сарын шинэчлэл'
      },
      sessions: {
        button: 'Sessions (BETA)'
      },
      roomLabelStyles: {
        Dark: 'Бараан',
        Light: 'Цайвар (анхны утга)',
        DarkAndLarge: 'Том, бараан',
        LightAndLarge: 'Том, цайвар',
        DarkAndSmall: 'Жижиг, бараан',
        LightAndSmall: 'Жижиг, цайвар',
        DisplayNone: 'Унтраах'
      },
      floorDisplayOptions: {
        one: '1 - Дан',
        two: '2 - Зэрэгцээ',
        four: '4 - Дөрвөлжин'
      },
      selectMaps: {
        selectAMap: 'Газар сонго',
        homeLink: 'Газар сонго'
      },
      compass: {
        letterN: 'Х',
        letterE: 'З',
        letterS: 'Ө',
        letterW: 'Б'
      },
      floorNames: {
        basement: { full: 'Суурь', short: 'С' },
        firstFloor: { full: '1-р давхар', short: '1' },
        secondFloor: { full: '2-р давхар', short: '2' },
        thirdFloor: { full: '3-р давхар', short: '3' },
        fourthFloor: { full: '4-р давхар', short: '4' },
        roof: { full: 'Дээвэр', short: 'Д' }
      },
      objectives: {
        bombShortA: 'A',
        bombShortB: 'B',
        bomb: 'Бөмбөг',
        hostageShort: 'H',
        hostage: 'Барьцаа',
        secureShort: 'S',
        secure: 'Эзлэх',
        showAll: 'Бүгдийг харуул'
      },
      legend: {
        breakableWalls: 'Эвдэрдэг хана',
        breakableFloorTraps: 'Эвдэрдэг шалны хаалга',
        ceilingHatches: 'Таазны хаалга',
        lineOfSightWalls: 'Нэвт буудаж болох хана',
        lineOfSightFloors: 'Нэвт буудаж болох шал',
        droneTunnels: 'Дроны хонгил',
        objectives: 'Бай',
        insertionPoints: 'Эхлэлийн цэг',
        securityCameras: 'Аюулгүй байдлын камер',
        skylights: 'Таазны цонх',
        onFloorAboveOrBelow: 'Дээд эсвэл доод давхарт',
        cameraLineOfSight: 'Камерын харах өнцөг',
        ladders: 'Авирдаг шат'
      },
      spawnPoints: {
        a: 'A',
        b: 'B',
        c: 'C',
        d: 'D',
        e: 'E'
      },
      mapNames: {
        bank: 'Банк',
        bartlett: 'Бартлетт И.С.',
        border: 'Хил',
        chalet: 'Дүнзэн байшин',
        club: 'Клубын байр',
        consulate: 'Консулын газар',
        coastline: 'Далайн эрэг',
        favela: 'Фавела',
        hereford: 'Херфорд',
        house: 'Байшин',
        kanal: 'Суваг',
        kafe: 'Достоевский кафе',
        oregon: 'Орегон',
        plane: 'Онгоц',
        skyscraper: 'Өндөр байшин',
        yacht: 'Дарвуулт хөлөг'
      },
      mapRooms: {
        bank: {
          spawnBoulevard: 'Өргөн чөлөө',
          spawnBackAlley: 'Арын гудам',
          printerRoom: 'Хэвлэгчтэй өрөө',
          parkingLot: 'Зогсоол',
          boulevard: 'Өргөн чөлөө',
          jewelryFront: 'Үнэт эдлэлийн үүд',
          plaza: 'Плаза',
          mainEntrance: 'Гол хаалга',
          garageRamp: 'Гаражийн<br/>налуу зам',
          exteriorParking: 'Задгай зогсоол',
          garageRoof: 'Гаражийн<br/>дээвэр',
          alleyAccess: 'Гудмын орц',
          backAlleyRooftop: 'Арын гудмын<br/>дээвэр',
          backAlley: 'Арын гудам',
          highRoof: 'Өндөр дээвэр',
          lowRoof: 'Нам дээвэр',
          vault: 'Сейф',
          goldVault: 'Алтны<br/>сейф',
          serverRoomStairs: 'Серверийн өрөөний шат',
          serverRoom: 'Серверийн өрөө',
          CCTVRoom: 'CCTV-н<br/>өрөө',
          loadingDock: 'Ачааны хэсэг',
          secureHallway: 'Аюулгүй<br/>коридор',
          sewer: 'Ус зайлуулах суваг',
          lockers: 'Шүүгээ',
          vaultLobby: 'Сейфний үүд',
          vaultEntrance: 'Сейфний<br/>хаалга',
          mainStairway: 'Гол<br/>шат',
          bankGarage: 'Банкны гараж',
          elevators: 'Цахилгаан<br/>шат',
          tellersOffice: 'Кассын<br/>оффис',
          archives: 'Архив',
          tellers: 'Касс',
          loanOffice: 'Зээлийн оффис',
          officeHallway: 'Оффисын коридор',
          skylightStairwell: 'Таазны цонхтой<br/>шат',
          lobby: 'Үүдний танхим',
          openArea: 'Задгай өрөө',
          staffRoom: 'Албаны өрөө',
          electricalRoom: 'Цахилгааны<br/>өрөө',
          adminOffice: 'Захиргааны оффис',
          ATMs: 'ATM',
          executiveHallway: 'Удирдахын<br/>коридор',
          frontDesk: 'Урд<br/>хүлээн авах',
          executiveLounge: 'Удирдахын<br/>лаунж',
          CEOOffice: 'CEO<br/>оффис',
          janitorCloset: 'Цэвэрлэгчийн шүүгээ',
          hallway: 'Коридор',
          terrace: 'Дэвсэг',
          stockTradingRoom: 'Хувьцаа<br/>арилжааны<br/>өрөө',
          conferenceRoom: 'Хурлын<br/>өрөө'
        },
        bartlett: {
          archwayHall: 'Нуман хаалгатай өрөө',
          backAlley: 'Арын гудам',
          bathroom: 'Бие засах<br/>өрөө',
          campusField: 'Кампусын<br/>талбай',
          classroom: 'Анги',
          coatRoom: 'Хувцасны<br/>өрөө',
          compassHallway: 'Луужинтай коридор',
          courtyard: 'Арын талбай',
          centralHallway: 'Төв<br/>коридор',
          diningRoom: 'Хоолны өрөө',
          eastBalcony: 'Зүүн тагт<br/>(харагдахгүй)',
          eastCorridor: 'Зүүн<br/>коридор',
          eastStairs: 'Зүүн<br/>шат',
          festival: 'Яармаг',
          frontEntrance: 'Урд хаалга',
          frontOffice: 'Урд<br/>оффис',
          frontPatio: 'Урд патио',
          gardenPass: 'Цэцэрлэгт<br/>зам',
          kitchen: 'Гал зуух',
          lobby: 'Үүдний өрөө',
          lounge: 'Амрах өрөө',
          lowerLibrary: 'Доод<br/>номын сан',
          mainGate: 'Гол<br/>хаалга',
          mainOffice: 'Гол оффис',
          modelHall: 'Загварын өрөө',
          pantry: 'Зоорь',
          parking: 'Зогсоол',
          pianoRoom: 'Төгөлдөр хуурын өрөө',
          readingRoom: 'Уншлагын өрөө',
          roof: 'Дээвэр',
          rowingMuseum: 'Сэлүүрийн<br/>музей',
          serviceRoom: 'Үйлчилгээний<br/>өрөө',
          terrace: 'Дэвсэг',
          trophyRoom: 'Шагналын<br/>өрөө',
          upperLibrary: 'Дээд<br/>номын сан',
          vistaHallway: 'Харууцтай<br/>коридор',
          westBalcony: 'Баруун тагт<br/>(харагдахгүй)',
          westCorridor: 'Баруун<br/>коридор'
        },
        border: {
          armoryLockers: 'Зэвсгийн<br/>шүүгээ',
          tellers: 'Касс',
          ventilationRoom: 'Агаар-<br/>жуулалтын<br/>өрөө',
          exitHallway: 'Гарах<br/>коридор',
          supplyCorridor: 'Хангамжийн<br/>коридор',
          detention: 'Хорио',
          customsInspection: 'Гаалийн шалган',
          customsDesk: 'Гаалийн<br/>оффис',
          centralStairs: 'Төв шат',
          serverRoom: 'Серверийн өрөө',
          supplyRoom: 'Хангамжийн<br/>өрөө',
          workshop: 'Ажлын<br/>хэсэг',
          mainLobby: 'Гол<br/>үүд',
          bathroom: 'Бие засах<br/>өрөө',
          waitingRoom: 'Хүлээлгийн<br/>өрөө',
          eastStairs: 'Зүүн<br/>шат',
          passportCheck: 'Пасспорт<br/>шалган',
          archives: 'Архив',
          offices: 'Оффис',
          officesHallway: 'Оффисын коридор',
          fountain: 'Усан оргилуур',
          mainHallway: 'Гол<br/>коридор',
          armoryDesk: 'Зэвсгийн<br/>агуулахын<br/>оффис',
          securityRoom: 'Аюулгүй<br/>байдлын<br/>өрөө',
          breakRoom: 'Амралтын өрөө',
          spawnEastVehicleEntrance: 'Зүүн орц',
          spawnValley: 'Хөндий',
          spawnWestVehicleExit: 'Баруун гарц',
          westTower: 'Баруун<br/>цамхаг',
          pedestrianExit: 'Явган гарц',
          valley: 'Хөндий',
          parkingLotEntrance: 'Зогсоолын<br/>үүд',
          parkingLot: 'Зогсоол',
          westRoad: 'Баруун зам',
          vehicleCustoms: 'Машины шалган',
          crashScene: 'Ослын талбай',
          eastRoad: 'Зүүн зам',
          pedestrianEntrance: 'Явган хүний<br/>орц',
          pedestrianCustoms: 'Явган хүний<br/>шалган',
          watchTower: 'Харуулын<br/>цамхаг',
          eastAlley: 'Зүүн гудам',
          parkingLotAlley: 'Зогсоолын<br/>гудам',
          northBalcony: 'Хойд тагт',
          eastBalcony: 'Зүүн<br/>тагт',
          westBalcony: 'Баруун<br/>тагт',
          southBalcony: 'Урд тагт',
          roof: 'Дээвэр'
        },
        chalet: {
          spawnFrontYard: 'Урд талбай',
          spawnCampfire: 'Түүдэг',
          spawnCliffside: 'Хадан цохио',
          spawnLakeside: 'Нуурын эрэг',
          libraryStairs: 'Номын сангийн<br/>шат',
          snowmobileGarageCorridor: 'Цаснаа явагчийн гаражийн коридор',
          snowmobileGarage: 'Цаснаа явагчийн<br/>гараж',
          greatRoomStairs: 'Том<br/>өрөөний<br/>шат',
          storageRoom: 'Бараа агуулах',
          wineCellar: 'Дарсны<br/>зоорь',
          wineStock: 'Дарсны<br/>нөөц',
          basementHallway: 'Суурийн<br/>хонгил',
          backyardStairs: 'Арын<br/>шат',
          mainStairs: 'Гол<br/>шат',
          mainGarage: 'Том гараж',
          garageEntrance: 'Гаражийн<br/>орц',
          westEntrance: 'Баруун<br/>орц',
          gamingRoomHallway: 'Тоглоомын<br/>өрөөний<br/>коридор',
          gamingRoom: 'Тоглоомын<br/>өрөө',
          bar: 'Баар',
          greatRoom: 'Том өрөө',
          diningRoom: 'Хоолны өрөө',
          mainEntrance: 'Гол<br/>үүд',
          trophyRoom: 'Шагналын өрөө',
          kitchenHallway: 'Гал зуухны<br/>коридор',
          kitchen: 'Гал зуух',
          libraryHallway: 'Номын сангийн коридор',
          libraryEntrance: 'Номын сангийн<br/>үүд',
          library: 'Номын сан',
          bedroomTerrace: 'Унтлагын өрөөний<br/>дэвсэг',
          fireplaceHallway: 'Задгай зуухны<br/>коридор',
          bedroomHallway: 'Унтлагын<br/>өрөөний<br/>коридор',
          masterBathroom: 'Том<br/>бие засах<br/>өрөө',
          masterBedroom: 'Унтлагын<br/>том өрөө',
          office: 'Оффис',
          woodenTrail: 'Модтой<br/>жим',
          campfireWood: 'Түүдгийн мод',
          backyard: 'Арын талбай',
          gazeebo: 'Бэсээтэг',
          cliffsideStairs: 'Хадан цохионы<br/>шат',
          cliffsideWoods: 'Хадан цохионы мод',
          backyardPatio: 'Арын талбай патио',
          officeBalcony: 'Оффисын<br/>тагт',
          helipadTrail: 'Нисдэг тэрэгний<br/>талбайн зам',
          helipad: 'Нисдэг<br/>тэрэгний<br/>талбай',
          frontYardPatio: 'Урд талбайн<br/>патио',
          frontYard: 'Урд талбай',
          bathroomBalcony: 'Бие засах<br/>өрөөний тагт',
          libraryBalcony: 'Номын сангийн<br/>тагт',
          bedroomBalcony: 'Унтлагын<br/>өрөөний<br/>тагт',
          snowmobiles: 'Цаснаа явагчид'
        },
        club: {
          shippingDock: 'Бараа ачилт',
          warehouse: 'Агуулах',
          constructionSite: 'Барилгын талбай',
          easternSubroof: 'Зүүн-хажуу<br/>дээвэр',
          container: 'Чингэлэг',
          graffitiArea: 'Графитын хэсэг',
          recreationArea: 'Тоглоомын<br/>талбай',
          junkyard: 'Хогийн цэг',
          vipParking: 'VIP зогсоол',
          mainGate: 'Үндсэн хаалга',
          parking: 'Зогсоол',
          kennels: 'Нохойн үүр',
          trash: 'Хог',
          centralSubroof: 'Төв-хажуу<br/>дээвэр',
          easternRoof: 'Зүүн дээвэр',
          centralRoof: 'Төв<br/>дээвэр',
          westernRoof: 'Баруун дээвэр',
          balcony: 'Тагт',
          escapeTunnel: 'Оргох<br/>хонгил',
          arsenalRoom: 'Зэвсгийн<br/>өрөө',
          basementHallway: 'Суурийн гудам',
          memorialRoom: 'Дурсгалын өрөө',
          utilityRoom: 'Үйлчилгээний<br/>өрөө',
          oilPit: 'Тосон цооног',
          centralStairs: 'Төв<br/>шат',
          church: 'Сүм',
          frontPorch: 'Урд довжоо',
          garage: 'Гараж',
          lobby: 'Үүдний<br/>өрөө',
          stockRoom: 'Барааны өрөө',
          garageStorage: 'Гаражийн<br/>агуулах',
          lounge: 'Амралтын өрөө',
          bar: 'Баар',
          centralHallway: 'Төв гудам',
          kitchen: 'Гал зуух',
          kitchenEntrance: 'Гал зуухны<br/>орц',
          westernHallway: 'Баруун<br/>гудам',
          stripClub: 'Тайчих клуб',
          junkyardEntrance: 'Хогийн<br/>цэгийн<br/>орц<br/>',
          sideEntrance: 'Хажуу орц',
          changingRoom: 'Хувцас солих<br/>өрөө',
          bedroom: 'Унтлагын<br/>өрөө',
          bathroom: 'Бие засах<br/>өрөө',
          bedroomHallway: 'Унтлагын өрөөний гудам',
          logisticOffice: 'Логистикын<br/>оффис',
          gym: 'Дасгалын<br/>өрөө',
          secretStash: 'Нууц<br/>өрөө',
          cctvRoom: 'CCTV-н өрөө',
          cashRoom: 'Мөнгөний<br/>өрөө',
          easternStairs: 'Зүүн<br/>шат'
        },
        consulate: {
          spawnRiotBarricade: 'Бослогын хаалт',
          spawnPoliceLine: 'Цагдаагийн шугам',
          spawnGasStation: 'Шатахуун түгээгүүр',
          spawnSideEntrance: 'Хажуу орц',
          exitStairs: 'Гарах<br/>шат',
          garage: 'Гараж',
          basementCorridor: 'Суурийн коридор',
          securityRoom: 'Аюулгүй байдлын<br/>өрөө',
          cafeteria: 'Цайны газар',
          mainStairs: 'Гол шат',
          lockerHallway: 'Шүүгээтэй<br/>коридор',
          serviceStairs: 'Үйлчилгээний<br/>шат',
          electricRoom: 'Цахилгааны<br/>өрөө',
          storageRoom: 'Агуулах',
          archives: 'Архив',
          archivesCorridor: 'Архивын<br/>коридор',
          pressRoom: 'Хэвлэлийн өрөө',
          westCorridor: 'Баруун коридор',
          publicBathroom: 'Нийтийн<br/>бие засах<br/>өрөө',
          antechamber: 'Хажуу өрөө',
          lobby: 'Үүдний танхим',
          eastCorridor: 'Зүүн<br/>коридор',
          tellers: 'Касс',
          visaOffice: 'Визийн<br/>оффис',
          visaEntrance: 'Визийн<br/>хаалга',
          frontDoor: 'Урд<br/>хаалга',
          balcony: 'Тагт',
          copyRoom: 'Хуулбарын өрөө',
          cabinet: 'Шүүгээ',
          administrationOffice: 'Захиргааны<br/>оффис',
          breakRoom: 'Амралтын<br/>өрөө',
          frontOffice: 'Урд оффис',
          meetingRoom: 'Уулзалтын<br/>өрөө',
          hallway: 'Коридор',
          consulFrontDesk: 'Консулын<br/>хүлээн<br/>авах',
          privateBathroom: 'Хувийн<br/>бие засах өрөө',
          waitingRoom: 'Хүлээлгийн<br/>өрөө',
          consulateOffice: 'Консулын<br/>оффис',
          garageWay: 'Гаражийн зам',
          courtyard: 'Хойд талбай',
          backCourtyard: 'Хойд талбайн ар',
          sideEntrance: 'Хажуу орц',
          dumpster: 'Хогийн сав',
          parking: 'Зогсоол',
          gardens: 'Цэцэрлэг',
          fountain: 'Оргилуур',
          emergencyExit: 'Ослын<br/>гарц',
          garageRoof: 'Гаражийн<br/>дээвэр',
          memorialGarden: 'Дурсгалын цэцэрлэг',
          policeLine: 'Цагдаагийн шугам',
          riotBarracade: 'Бослогын хаалт',
          eastFrontYard: 'Зүүн урд талбай',
          westFrontYard: 'Баруун урд талбай',
          frontAlley: 'Урд гудам',
          buildingRoof: 'Дээвэр'
        },
        coastline: {
          aquarium: 'Аквариум',
          backAlley: 'Арын<br/>гудам',
          balcony: 'Тагт (харагдахгүй)',
          bathroom: 'Бие засах өрөө',
          billiardsRoom: 'Билярдын өрөө',
          blueBar: 'Цэнхэр баар',
          cantina: 'Кантина',
          courtyard: 'Арын талбай',
          djBooth: 'DJ бүхээг (харагдахгүй)',
          garageRoof: 'Гаражийн дээвэр',
          hallOfFame: 'Алдарын танхим',
          hallway: 'Коридор',
          hookahDeck: 'Хүүка<br/>тавцан<br/>(харагдахгүй)',
          hookahLounge: 'Хүүка лаунж',
          kitchen: 'Гал зуух',
          mainEntrance: 'Гол<br/>хаалга',
          mainLobby: 'Үүдний<br/>өрөө',
          northStairs: 'Хойд<br/>шат',
          office: 'Оффис',
          penthouse: 'Пэнтхаус',
          pool: 'Усан сан',
          poolEntrance: 'Усан сангийн орц',
          poolSide: 'Усан сангийн хажуу',
          rooftop: 'Дээвэр',
          ruins: 'Балгас',
          securityRoom: 'Аюулгүй байдлын<br/>өрөө',
          serviceEntrance: 'Үйлчилгээний<br/>хаалга',
          southHallway: 'Өмнөд коридор',
          southPromenade: 'Өмнөд эрэг',
          southStairs: 'Өмнөд<br/>шат',
          sunriseBar: 'Нармандах баар',
          sunRoom: 'Нарны өрөө',
          theater: 'Театр',
          terrace: 'Дэвсэг',
          toilets: 'Жорлон',
          vipLounge: 'VIP лаунж',
          walkway: 'Алхдаг жим'
        },
        favela: {
          packagingRoom: 'Савлагааны<br/>өрөө',
          footballApartment: 'Хөлбөмбөгийн<br/>байр',
          armoryRoom: 'Зэвсгийн<br/>өрөө',
          auntsApartment: 'Нагацын<br/>байр',
          auntsBedroom: 'Нагацын<br/>унтлагын өрөө',
          growRoom: 'Цэцгийн<br/>өрөө',
          bikersApartment: 'Байкерын<br/>байр',
          methLab: 'Мет лаб',
          footballBedroom: 'Хөлбөмбөгийн<br/>унтлагын өрөө',
          footballOffice: 'Хөлбөмбөгийн<br/>оффис',
          bikersBedroom: 'Байкерын<br/>унтлагын<br/>өрөө',
          backStairs: 'Арын<br/>шат',
          auntsHall: 'Нагацын коридор',
          kidsRoom: 'Хүүхдийн өрөө',
          mainStairs: 'Гол<br/>шат',
          stairHall: 'Шатны<br/>коридор',
          roof: 'Дээвэр',
          laundryRoom: 'Угаалгын<br/>өрөө',
          vaultRoom: 'Шүүгээ',
          bikersGarage: 'Байкерын<br/>гараж',
          backAlley: 'Арын гудам',
          schoolAlley: 'Сургуулийн гудам',
          footballPitch: 'Хөлбөмбөгийн талбай',
          market: 'Зах',
          marketAlley: 'Захын<br/>гудам',
          schoolRooftops: 'Сургуулийн<br/>дээвэр',
          street: 'Гудамж',
          rooftops: 'Дээвэр',
          courtyard: 'Урд талбай',
          accessAlley: 'Хажуу гудам',
          shop: 'Дэлгүүр<br/>(харагдахгүй)',
          marketRooftops: 'Захын дээвэр'
        },
        hereford: {
          shootingRange: 'Буудлагын талбай',
          mainStairs: 'Үндсэн<br/>шат',
          garage: 'Гараж',
          kitchen: 'Гал зуух',
          diningRoom: 'Хоолны<br/>өрөө',
          masterBedroom: 'Унтлагын<br/>том<br/>өрөө',
          laundryRoom: 'Угаалгын<br/>өрөө',
          bathroom: 'Бие засах<br/>өрөө',
          workshop: 'Ажлын хэсэг',
          rooftop: 'Дээвэр'
        },
        house: {
          spawnConstructionSite: 'Барилгын талбай',
          spawnRiverDocks: 'Голын эрэг',
          spawnAPCArea: 'Хуягтын хэсэг',
          spawnSideStreet: 'Хажуу гудамж',
          depot: 'Амбаар',
          trainingRoom: 'Дасгалын өрөө',
          kitchenStairs: 'Гал зуухны<br/>шат',
          sideStairs: 'Хажуу<br/>шат',
          laundryRoom: 'Угаалгын<br/>өрөө',
          garage: 'Гараж',
          livingRoom: 'Том<br/>өрөө',
          backEntrance: 'Хойд орц',
          lobby: 'Үүдний өрөө',
          kitchen: 'Гал зуух',
          office: 'Оффис',
          diningRoom: 'Хоолны<br/>өрөө',
          workshop: 'Ажлын хэсэг',
          kidsBedroom: 'Хүүхдийн<br/>унтлагын өрөө',
          upperHallway: 'Дээд<br/>гудам',
          lobbyStairs: 'Үүдний<br/>шат',
          walkIn: 'Харанхуй<br/>өрөө',
          masterBedroom: 'Унтлагын том өрөө',
          bathroom: 'Бие засах<br/>өрөө',
          sideStreet: 'Хажуу<br/>гудамж',
          garageEntrance: 'Гаражийн<br/>орц',
          garden: 'Цэцэрлэг',
          backAlley: 'Арын гудам',
          patio: 'Арын талбай',
          jacuzzi: 'Жакузи',
          basementStairs: 'Суурийн<br/>шат',
          treehouseAlley: 'Модны<br/>байшинтай<br/>гудам',
          frontYard: 'Урд талбай',
          frontStreet: 'Урд гудамж',
          frontPorch: 'Урд довжоо',
          backPorch: 'Хойд довжоо',
          backPorchTop: 'Хойд саравч',
          frontPorchTop: 'Урд саравч',
          rooftop: 'Дээвэр'
        },
        kanal: {
          floatingDock: 'Хөвдөг зогсоол',
          sailboats: 'Далбаат завьнууд',
          constructionSite: 'Барилгын талбай',
          pipes: 'Турба',
          lockerRoom: 'Шүүгээтэй<br/>өрөө',
          archives: 'Архив',
          lounge: 'Амралтын<br/>өрөө',
          modelRoom: 'Загварын өрөө',
          securityRoom: 'Аюулгүй<br/>байдлын<br/>өрөө',
          projectorRoom: 'Проекторын<br/>өрөө',
          kitchen: 'Гал зуух',
          controlRoom: 'Хяналтын<br/>өрөө',
          controlRoomHallway: 'Хяналтын өрөөний коридор',
          serverRoom: 'Серверийн<br/>өрөө',
          lockGate: 'Цоожтой хаалга',
          quayContainers: 'Боомтын чингэлэг',
          lockGateTunnel: 'Цоожтой хаалганы<br/>хонгил',
          constructionEntrance: 'Барилгын<br/>орц',
          parkingAlley: 'Зогсоолын гудам',
          parkingEntrance: 'Зогсоолын<br/>орц',
          middleRoad: 'Дунд<br/>зам',
          forkliftAlley: 'Ачигчтай<br/>гудам',
          frontLawn: 'Урд зүлэг',
          coastGuardRoof: 'Эргийн<br/>харуулын<br/>дээвэр',
          balcony: 'Тагт',
          parking: 'Зогсоол'
        },
        kafe: {
          riverDocks: 'Голын эрэг',
          christmasMarket: 'Баярын яармаг',
          park: 'Цэцэрлэг',
          laundryRoom: 'Угаалгын<br/>өрөө',
          bakery: 'Талхны газар',
          diningRoom: 'Хоолны өрөө',
          museumEntrance: 'Музейн<br/>орц',
          miningRoom: 'Уурхайн өрөө',
          trainMuseum: 'Галт тэрэгний музей',
          mainCorridor: 'Гол<br/>коридор',
          readingRoomCorridor: 'Уншлагын өрөөний коридор',
          readingRoom: 'Уншлагын өрөө',
          fireplaceHall: 'Задгай зуухтай<br/>өрөө',
          cigarShop: 'Тамхины дэлгүүр',
          cigarLounge: 'Тамхилах өрөө',
          bar: 'Баар',
          barBackstore: 'Баарын<br/>агуулах',
          washrooms: 'Бие засах<br/>өрөө',
          cocktailLounge: 'Коктейлын<br/>өрөө',
          cocktailLoungeEntrance: 'Коктейлын<br/>өрөөний<br/>хаалга',
          westMainStreet: 'Гол гудамжны баруун',
          mainStreet: 'Гол гудамж',
          eastMainStreet: 'Гол гудамжны зүүн',
          bakeryParking: 'Талхны газрын<br/>зогсоол',
          bakeryRoof: 'Талхны газрын дээвэр',
          cafeRoofTop: 'Дээвэр',
          terrace: 'Дэвсэг',
          backAlley: 'Арын гудам',
          garage: 'Гараж'
        },
        oregon: {
          junkyard: 'Хогийн цэг',
          street: 'Гудамж',
          constructionSite: 'Барилгын талбай',
          towerStairs: 'Цамхагийн шат',
          boilerRoom: 'Халаагуурын<br/>өрөө',
          electricRoom: 'Цахилгааны<br/>өрөө',
          bunker: 'Бункер',
          basementCorridor: 'Суурийн<br/>Хонгил',
          supplyRoom: 'Хангамжийн<br/>өрөө',
          laundryRoom: 'Угаалгын өрөө',
          laundryStorage: 'Угаалгын<br/>агуулах',
          laundryStairs: 'Угаалгын<br/>шат',
          diningHall: 'Зоогийн<br/>өрөө',
          showers: 'Шүршүүр',
          kitchen: 'Галын өрөө',
          classroom: 'Анги',
          lobby: 'Үүдний өрөө',
          mainStairs: 'Үндсэн шат',
          meetingHall: 'Уулзалтын танхим',
          rearStage: 'Хойд шат',
          garage: 'Гараж',
          dormMainHall: 'Дотуур байрны<br/>үндсэн танхим',
          armoryCorridor: 'Зэвсгийн агуулахын<br/>хонгил',
          masterBedroom: 'Унтлагын<br/>том өрөө',
          armory: 'Зэвсгийн агуулах',
          walkIn: 'Харанхуй өрөө',
          attic: 'Дээврийн хөндий',
          busYard: 'Автобусны талбай',
          farmlands: 'Ногооны талбай',
          shootingRange: 'Буудлагын<br/>талбай',
          parking: 'Зогсоол',
          mainEntrance: 'Үндсэн орц',
          balcony: 'Тагт',
          diningHallRoof: 'Зоогийн өрөөний<br/>дээвэр',
          garageRoof: 'Гаражийн дээвэр',
          dormsRoof: 'Дотуур байрны<br/>дээвэр',
          meetingHallRoof: 'Уулзалтын<br/>танхимын<br/>дээвэр',
          supplyCloset: 'Хангамжийн<br/>шүүгээ'
        },
        plane: {
          spawnOfficialEntrance: 'Албаны орц',
          spawnReporterEntrance: 'Хэвлэлийн орц',
          spawnServiceEntrance: 'Үйлчилгээний орц',
          pressBathroom: 'Хэв.БЗ',
          meetingRoom: 'Уулзалтын өрөө',
          frontHallway: 'Урд<br/>коридор',
          executiveOffice: 'Удирдах<br/>оффис',
          mainEntrance: 'Гол орц',
          frontStairs: 'Урд шат',
          pantry: 'Зоорь',
          kitchen: 'Гал зуух',
          executiveHallway: 'Удирдахын коридор',
          executiveBedroom: 'Удирдахын<br/>унтлагын<br/>өрөө',
          changeRoom: 'Хувцас<br/>солих<br/>өрөө',
          laund: 'Угаалга',
          frontServiceEntrance: 'Үйлчилгээний<br/>урд хаалга',
          rightWing: 'Баруун жигүүр',
          backServiceEntrance: 'Үйлчилгээний<br/>арын хаалга',
          reporterEntrance: 'Хэвлэлийн орц',
          leftWing: 'Зүүн жигүүр',
          staffSection: 'Арын алба',
          securityRoom: 'Аюулгүй<br/>байдлын<br/>өрөө',
          pressSectionA: 'Хэвлэлийн<br/>хэсэг A',
          pressSectionB: 'Хэвлэлийн<br/>хэсэг B',
          backStairs: 'Арын шат',
          cargoHold: 'Ачааны хэсэг',
          serviceCorridor: 'Үйлчилгээний коридор',
          storage: 'Агуулах',
          luggageHold: 'Гар тээшийн<br/>хэсэг',
          firstAidStation: 'Анхны тусламжийн<br/>хэсэг',
          cargoFrontEntrance: 'Ачааны<br/>урд хаалга',
          cockpitStairs: 'Бүхээгийн шат',
          cabinStaff: 'Бүхээгийн<br/>баг',
          radioCabin: 'Радио',
          cabin: 'Бүхээг',
          caterer: 'Хүнс',
          serverRoomA: 'Серверийн өрөө A',
          serverRoomB: 'Серверийн өрөө B',
          technicalSeating: 'Техникийн суудал',
          ladderRoom: 'Шаттай<br/>өрөө'
        },
        skyscraper: {
          helipad: 'Нисдэг тэрэгний<br/>талбай',
          tower: 'Цамхаг',
          ventilationUnits: 'Агааржуулагч',
          kitchen: 'Гал зуух',
          pantry: 'Зоорь',
          deliveryRoom: 'Хүргэлтийн<br/>өрөө',
          houseLobby: 'Гэрийн үүдний өрөө',
          houseEntrance: 'Гэрийн<br/>орц',
          mainEntrance: 'Гол<br/>хаалга',
          reception: 'Хүлээн авах',
          bedroom: 'Унтлагын өрөө',
          closet: 'Шүүгээ',
          bathroom: 'Бие засах<br/>өрөө',
          houseStairs: 'Гэрийн<br/>шат',
          restaurant: 'Зоогийн газар',
          toilet: 'Жорлон',
          bbq: 'BBQ',
          backHallway: 'Арын коридор',
          mainStairs: 'Гол<br/>шат',
          geishaRoom: 'Гейшагийн<br/>өрөө',
          hallway: 'Коридор',
          karaoke: 'Караокэ',
          teaRoom: 'Цайны өрөө',
          taiko: 'Бөмбөр',
          terrace: 'Дэвсэг',
          backStairs: 'Арын<br/>шат',
          houseBalcony: 'Гэрийн<br/>тагт',
          exhibition: 'Үзэсгэлэн',
          lounge: 'Амрах өрөө',
          workOffice: 'Ажлын<br/>өрөө',
          clearance: 'Шалган',
          peacefullTree: 'Амгалан<br/>мод',
          contemplationGarden: 'Бясалгалын<br/>цэцэрлэг',
          westGarden: 'Баруун<br/>цэцэрлэг',
          bridge: 'Гүүр',
          gazeebo: 'Бэсээтэг',
          restBalcony: 'ЗГ-н<br/>тагт',
          northGarden: 'Хойд<br/>цэцэрлэг',
          eastGarden: 'Зүүн<br/>цэцэрлэг',
          sandGarden: 'Элсэн<br/>цэцэрлэг',
          sidePath: 'Хажуу<br/>зам',
          sideStairs: 'Хажуу<br/>шат',
          dragonStatue: 'Луун<br/>хөшөө',
          coveredWalkway: 'Хучмал<br/>зам'
        },
        yacht: {
          spawnSubmarine: 'Шумбагч',
          spawnZodiak: 'Зодиак',
          spawnSnowMobile: 'Цаснаа явагч',
          mapsRoom: 'Газрын зургийн өрөө',
          cockpit: 'Бүхээг',
          cockpitHallway: 'Бүхээгийн коридор',
          captainsOffice: 'Ахмадын<br/>оффис',
          cockpitBalcony: 'Бүхээгийн<br/>тагт',
          topDeckStairs: 'Дээд<br/>тавцны<br/>шат',
          helipadEntrance: 'Нисдэг тэрэгний<br/>талбайн орц',
          helipad: 'Нисдэг тэрэгний<br/>талбай',
          spaDeck: 'Рашааны<br/>тавцан',
          eastDeck: 'Зүүн тавцан',
          westDeck: 'Баруун тавцан',
          frontDeck: 'Урд<br/>тавцан',
          masterBedroom: 'Унтлагын<br/>том өрөө',
          casino: 'Казино',
          pokerRoom: 'Покерын<br/>өрөө',
          bathroom: 'Бие засах<br/>өрөө',
          bedroomHallway: 'Унтлагын өрөөний коридор',
          casinoHallway: 'Казиногийн коридор',
          globeHallway: 'Бөмбөрцөгтэй<br/>коридор',
          lounge: 'Амрах өрөө',
          cafeteria: 'Цайны газар',
          engine: 'Хөдөлгүүр',
          backEntrance: 'Арын<br/>хаалга',
          rearDeck: 'Хойд<br/>тавцан',
          serverRoom: 'Серверийн<br/>өрөө',
          engineStorage: 'Хөдөлгүүрийн<br/>агуулах',
          engineControl: 'Хөдөлгүүрийн<br/>хяналт',
          backStairs: 'Арын<br/>шат',
          emergencyExit: 'Ослын гарц',
          engineHallway: 'Хөдөлгүүрийн<br/>коридор',
          frontStairs: 'Урд<br/>шат',
          kitchen: 'Гал зуух',
          staffDormitory: 'Арын албаны<br/>байр',
          westBalcony: 'Баруун тагт',
          eastBalcony: 'Зүүн тагт',
          kitchenHallway: 'Гал зуухны коридор',
          kitchenStairs: 'Гал зуухны шат',
          kitchenPantry: 'Гал зуухны<br/>зоорь',
          infirmary: 'Эмнэлэг',
          borealSubRoom: 'Хойд туйлын<br/>өрөө',
          cafeteriaHallway: 'Цайны газрын коридор',
          engineUtility: 'Хөдөлгүүрийн<br/>хэрэгсэл',
          submarine: 'Шумбагч',
          westGlacier: 'Баруун мөсөн гол',
          eastHullBreach: 'Зүүн бүрхүүлийн<br/>цоорхой',
          eastGlacier: 'Зүүн мөсөн гол',
          frozenRiver: 'Хөлдүү гол',
          zodiac: 'Зодиак',
          westHullBreach: 'Баруун бүрхүүлийн цоорхой',
          kingOfTheWorld: 'Дэлхийн<br/>хаан',
          roof: 'Дээвэр',
          anchorName: 'Зангуу',
          aklarkSubEntrance: 'Хойд туйлын<br/>хаалга'
        }
      }
    };

  R6MLangTerms.registerLanguage(name, terms);

  return  {
    name: name,
    terms: terms
  };
})(R6MLangTerms);
