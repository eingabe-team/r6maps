'use strict';

var R6MLangTermsPortBrazil = (function(R6MLangTerms, undefined) {
  var name = 'pt',
    terms = {
      general: {
        pageTitleSelectMap: 'R6Maps.com - Selecione um mapa',
        cameraViewCaption: '{floorName} Visão da Câmera',
        shortcutTip: 'Atalho: {shortcut}',
        menu: 'Menu',
        about: 'Sobre',
        languageHeader: 'Língua',
        optionsHeader: 'Opções',
        labelLosOpacity: 'Contraste da linha de visão da Câmera',
        labelPercent: '{int}%',
        labelLosDefault: '(Default)',
        labelLos105: '(Huh?)',
        labelLos110: '(Absurdo!)',
        labelRoomLabelStyle: 'Estilo do nome da sala',
        labelNumberFloorsToDisplay: 'Número de andares para exibir',
        lockPanning: 'Mover em sincronismo',
        lockZooming: 'Zoom em sincronismo',
        fullScreen: 'Tela cheia',
        enableScreenshots: 'Habilitar captura de tela',
        contributions: 'Contribuições',
        supportSiteNote: 'Uma maneira de considerar mostrar o seu apoio é através de uma pequena doação.',
        donateImg: 'https://www.paypalobjects.com/pt_PT/i/btn/btn_donate_LG.gif',
        latestUpdate: 'Atualizações em fevereiro de 2017'
      },
      roomLabelStyles: {
        Dark: 'Escuro',
        Light: 'Claro (Padrão)',
        DarkAndLarge: 'Grande e Escuro',
        LightAndLarge: 'Grande e Claro',
        DarkAndSmall: 'Pequeno e Escuro',
        LightAndSmall: 'Pequeno e Leve',
        DisplayNone: 'Desligar'
      },
      floorDisplayOptions: {
        one: '1 - Único',
        two: '2 - Dividido',
        four: '3 - Grade'
      },
      selectMaps: {
        selectAMap: 'Selecione um mapa',
        homeLink: 'Selecione um mapa'
      },
      floorNames: {
        basement: { full: 'Porão', short: 'P' },
        firstFloor: { full: '1º Andar', short: '1' },
        secondFloor: { full: '2º Andar', short: '2' },
        thirdFloor: { full: '3º Andar', short: '3' },
        fourthFloor: { full: '4º Andar', short: '4' },
        roof: { full: 'Telhado', short: 'T' }
      },
      objectives: {
        bombShortA: 'A',
        bombShortB: 'B',
        bomb: 'Bomba',
        hostageShort: 'R',
        hostage: 'Refém',
        secureShort: 'P',
        secure: 'Proteja',
        showAll: 'Mostre Todos'
      },
      legend: {
        breakableWalls: 'Paredes destrutíveis',
        breakableFloorTraps: 'Alçapões destrutíveis',
        ceilingHatches: 'Passagem de telhado',
        lineOfSightWalls: 'Paredes com linha de visada',
        lineOfSightFloors: 'Piso com linha de visada',
        droneTunnels: 'Túnel para drone',
        objectives: 'Objetivos',
        insertionPoints: 'Pontos de inserção',
        securityCameras: 'Câmeras de segurança',
        skylights: 'Clarabóias',
        onFloorAboveOrBelow: 'No piso acima ou abaixo',
        cameraLineOfSight: 'Linha de visão da câmera',
        ladders: 'Escadas'
      },
      spawnPoints: {
        a: 'A',
        b: 'B',
        c: 'C',
        d: 'D',
        e: 'E'
      },
      mapNames: {
        bank: 'Banco',
        bartlett: 'U. Bartlett',
        border: 'Fronteira',
        chalet: 'Chalé',
        club: 'Club House',
        coastline: 'Litoral',
        consulate: 'Consulado',
        favela: 'Favela',
        hereford: 'Hereford',
        house: 'Residência',
        kanal: 'Canal',
        kafe: 'Kafe Dostoyevsky',
        oregon: 'Oregon',
        plane: 'Avião Presidencial',
        skyscraper: 'Arranha Céu',
        yacht: 'Iate'
      },
      mapRooms: {
        bank: {
          spawnBoulevard: 'Avenida',
          spawnBackAlley: 'Beco dos Fundos',
          printerRoom: 'Sala de Impressoras',
          parkingLot: 'Estacionamento',
          boulevard: 'Avenida',
          jewelryFront: 'Joalheria',
          plaza: 'Praça',
          mainEntrance: 'Entrada Principal',
          garageRamp: 'Rampa<br/>da Garagem',
          exteriorParking: 'Estacionamento Externo',
          garageRoof: 'Telhado<br/>da Garagem',
          alleyAccess: 'Acesso pelo Beco',
          backAlleyRooftop: 'Telhado<br/>do Beco dos Fundos',
          backAlley: 'Beco dos Fundos',
          highRoof: 'Telhado Superior',
          lowRoof: 'Telhado Inferior',
          vault: 'Cofre',
          goldVault: 'Cofre<br/>de Ouro',
          serverRoomStairs: 'Escada da<br/>Sala de Servidores',
          serverRoom: 'Sala de Servidores',
          CCTVRoom: 'Sala de<br/>CCTV',
          loadingDock: 'Doca de<br/>Carregamento',
          secureHallway: 'Corredor de<br/>Segurança',
          sewer: 'Esgoto',
          lockers: 'Armários',
          vaultLobby: 'Lobby dos<br/>Cofres',
          vaultEntrance: 'Entrada<br/>dos Cofres',
          mainStairway: 'Escada<br/>Principal',
          bankGarage: 'Garagem do<br/>Banco',
          elevators: 'Elevadores',
          tellersOffice: 'Escritório<br/>dos Caixas',
          archives: 'Arquivos',
          tellers: 'Caixas',
          loanOffice: 'Escritório de<br/>Empréstimos',
          officeHallway: 'Corredor do<br/>Escritório',
          skylightStairwell: 'Clarabóia da<br/>Escadaria',
          lobby: 'Lobby',
          openArea: 'Área Aberta',
          staffRoom: 'Sala dos<br/>Empregados',
          electricalRoom: 'Sala do<br/>Painel Elétrico',
          adminOffice: 'Escritório da<br/>Administração',
          ATMs: 'Caixas<br/>Automáticos',
          executiveHallway: 'Corredor dos<br/>Executivos',
          frontDesk: 'Atendimento',
          executiveLounge: 'Sala dos<br/>Executivos',
          CEOOffice: 'Escritório do<br/>CEO',
          janitorCloset: 'Armário do<br/>Zelador',
          hallway: 'Corredor',
          terrace: 'Terraço',
          stockTradingRoom: 'Corretora de<br/>Ações',
          conferenceRoom: 'Sala de<br/>Conferência'
        },
        bartlett: {
          archwayHall: 'Salão das<br/>Arcadas',
          archwaylHallway: 'Corredor das<br/>Arcadas',
          backAlley: 'Beco dos<br/>Fundos',
          bathroom: 'Banheiro',
          campusField: 'Gramado do<br/>Cammpus',
          classroom: 'Sala de<br/>Aula',
          coatRoom: 'Sala de<br/>Casacos',
          compassHallway: 'Corredor<br/>Bússola',
          courtyard: 'Pátio',
          centralHallway: 'Corredor<br/>Central',
          diningRoom: 'Sala de<br/>Jantar',
          eastBalcony: 'Sacada oeste<br/>(não mostrada)',
          eastCorridor: 'Corredor<br/>Leste',
          eastStairs: 'Escadaria<br/>Leste',
          festival: 'Festival',
          frontEntrance: 'Entrada<br/>Frontal',
          frontOffice: 'Escritório<br/>Frontal',
          frontPatio: 'Pátio<br/>Frontal',
          gardenPass: 'Passagem do<br/>Jardim',
          kitchen: 'Cozinha',
          lobby: 'Lobby',
          lounge: 'Lounge',
          lowerLibrary: 'Biblioteca<br/>Inferior',
          mainGate: 'Portão<br/>Principal',
          mainOffice: 'Escritório<br/>Principal',
          modelHall: 'Salão<br/>Modelo',
          pantry: 'Despensa',
          parking: 'Estacionamento',
          pianoRoom: 'Sala do<br/>Piano',
          readingRoom: 'Sala de<br/>Leitura',
          roof: 'Telhado',
          rowingMuseum: 'Museu do<br/>Remo',
          serviceRoom: 'Sala de<br/>Serviço',
          terrace: 'Terraço',
          trophyRoom: 'Sala de<br/>Troféus',
          upperLibrary: 'Biblioteca<br/>Superior',
          vistaHallway: 'Corredor<br/>Vista',
          westBalcony: 'Sacada Leste<br/>(não mostrada)',
          westCorridor: 'Corredor<br/>Oeste'
        },
        border: {
          armoryLockers: 'Sala de<br/>Armas',
          tellers: 'Atendendes',
          ventilationRoom: 'Sala de<br/>Venti-<br/>lação',
          exitHallway: 'Corredor de<br/>Saída',
          supplyCorridor: 'Corredor de<br/>Supri-<br/>mentos',
          detention: 'Detenção',
          customsInspection: 'Inspeção de<br/>Alfan-<br/>dega',
          customsDesk: 'Atendente de<br/>Alfan-<br/>dega',
          centralStairs: 'Escadaria<br/>Central',
          serverRoom: 'Sala de<br/>Serviço',
          supplyRoom: 'Sala de<br/>Suprimentos',
          workshop: 'Oficina',
          mainLobby: 'Lobby<br/>Principal',
          bathroom: 'WC',
          waitingRoom: 'Sala de<br/>Espera',
          eastStairs: 'Escadaria<br/>Leste',
          passportCheck: 'Conferência de<br/>Passaporte',
          archives: 'Arquivos',
          offices: 'Escritórios',
          officesHallway: 'Corredor de<br/>Escritórios',
          fountain: 'Fonte',
          mainHallway: 'Corredor<br/>Principal',
          armoryDesk: 'Atendente de<br/>Armas',
          securityRoom: 'Sala da<br/>Segurança',
          breakRoom: 'Sala de<br/>Descanso',
          spawnEastVehicleEntrance: 'Entrada de<br/>Veículos<br/>Leste',
          spawnValley: 'Vale',
          spawnWestVehicleExit: 'Saída de<br/>Veículos<br/>Oeste',
          westTower: 'Torre<br/>Oeste',
          pedestrianExit: 'Saída de<br/>Pedestres',
          valley: 'Vale',
          parkingLotEntrance: 'Entrada do<br/>Estacionamento',
          parkingLot: 'Estacionamento',
          westRoad: 'Estrada<br/>Oeste',
          vehicleCustoms: 'Veículos da<br/>Alfandêga',
          crashScene: 'Local de<br/>Acidente',
          eastRoad: 'Estrada<br/>Leste',
          pedestrianEntrance: 'Entrada de<br/>Pedestres',
          pedestrianCustoms: 'Alfandênga de<br/>Pedestres',
          watchTower: 'Torre de<br/>Observa-<br/>ção',
          eastAlley: 'Beco<br/>Leste',
          parkingLotAlley: 'Beco do<br/>Esta-<br/>cionamento',
          northBalcony: 'Sacada<br/>Norte',
          eastBalcony: 'Sacada<br/>Leste',
          westBalcony: 'Sacada<br/>Oeste',
          southBalcony: 'Sacada<br/>Sul',
          roof: 'Telhado'
        },
        chalet: {
          spawnFrontYard: 'Pátio<br/>Frontal',
          spawnCampfire: 'Fogueira',
          spawnCliffside: 'Barranco',
          spawnLakeside: 'Lago',
          libraryStairs: 'Escadaria da<br/>Biblioteca',
          snowmobileGarageCorridor: 'Corredor da<br/>Garagem de<br/>Snowmobile',
          snowmobileGarage: 'Garagem de<br/>Snowmobile',
          greatRoomStairs: 'Escadaria do<br/>Salão',
          storageRoom: 'Sala de<br/>Mantimentos',
          wineCellar: 'Adega',
          wineStock: 'Estoque de<br/>Vinhos',
          basementHallway: 'Corredor do<br/>Porão',
          backyardStairs: 'Escadaria dos<br/>Fundos',
          mainStairs: 'Escadaria<br/>Principal',
          mainGarage: 'Garagem<br/>Principal',
          garageEntrance: 'Entrada da<br/>Garagem',
          westEntrance: 'Entrada<br/>Oeste',
          gamingRoomHallway: 'Corredor da<br/>Sala de<br/>Jogos',
          gamingRoom: 'Sala de<br/>Jogos',
          bar: 'Bar',
          greatRoom: 'Salão',
          diningRoom: 'Sala de<br/>Jantar',
          mainEntrance: 'Entrada<br/>Principal',
          trophyRoom: 'Sala de<br/>Troféus',
          kitchenHallway: 'Corredor da<br/>Cozinha',
          kitchen: 'Cozinha',
          libraryHallway: 'Corredor da<br/>Biblioteca',
          libraryEntrance: 'Entrada da<br/>Biblioteca',
          library: 'Biblioteca',
          bedroomTerrace: 'Terraço dos<br/>Quartos',
          fireplaceHallway: 'Corredor da<br/>Lareira',
          bedroomHallway: 'Corredor dos<br/>Quartos',
          masterBathroom: 'Banheiro da<br/>Suíte',
          masterBedroom: 'Suíte',
          office: 'Escritório',
          woodenTrail: 'Trilha<br/>Arborizada',
          campfireWood: 'Floresta da<br/>Fogueira',
          backyard: 'Fundos',
          gazeebo: 'Gazebo',
          cliffsideStairs: 'Escadaria do<br/>Barranco',
          cliffsideWoods: 'Floresta do<br/>Barranco',
          backyardPatio: 'Patio dos<br/>Fundos',
          officeBalcony: 'Sacada do<br/>Escritório',
          helipadTrail: 'Trilha do<br/>Heliponto',
          helipad: 'Heliponto',
          frontYardPatio: 'Patio da<br/>Frente',
          frontYard: 'Frente',
          bathroomBalcony: 'Sacada do<br/>Banheiro',
          libraryBalcony: 'Sacada da<br/>Biblioteca',
          bedroomBalcony: 'Sacada do<br/>Quarto',
          snowmobiles: 'Snowmobile'
        },
        club: {
          shippingDock: 'Docas de<br/>Despacho',
          warehouse: 'Armazém',
          constructionSite: 'Canteiro de<br/>obras',
          easternSubroof: 'Terraço<br/>Leste',
          container: 'Container',
          graffitiArea: 'Área do<br/>Grafite',
          recreationArea: 'Área de<br/>Recreação',
          junkyard: 'Ferro<br/>Velho',
          vipParking: 'Estacionamento<br/>VIP',
          mainGate: 'Portão<br/>Principal',
          parking: 'Estacionamento',
          kennels: 'Canil',
          trash: 'Lixeira',
          centralSubroof: 'Terraço<br/>Central',
          easternRoof: 'Telhado<br/>Leste',
          centralRoof: 'Telhado<br/>Central',
          westernRoof: 'Telhado<br/>Oeste',
          balcony: 'Sacada',
          escapeTunnel: 'Túnel de<br/>Fuga',
          arsenalRoom: 'Sala do<br/>Arsenal',
          basementHallway: 'Corredor do<br/>Porão',
          memorialRoom: 'Sala do<br/>Memorial',
          utilityRoom: 'Sala do<br/>Painel<br/>Elétrico',
          oilPit: 'Troca de<br/>Óleo',
          centralStairs: 'Escadaria<br/>Central',
          church: 'Templo',
          frontPorch: 'Entrada Frontal',
          garage: 'Garagem',
          lobby: 'Lobby',
          stockRoom: 'Sala de<br/>Mantimentos',
          garageStorage: 'Mantimentos da<br/>Garagem',
          lounge: 'Lounge',
          bar: 'Bar',
          centralHallway: 'Corredor<br/>Central',
          kitchen: 'Cozinha',
          kitchenEntrance: 'Entrada da<br/>Cozinha',
          westernHallway: 'Corredor<br/>Oeste',
          stripClub: 'Strip Club',
          junkyardEntrance: 'Entrada do<br/>Ferro<br/>Velho',
          sideEntrance: 'Entrada<br/>Lateral',
          changingRoom: 'Vestiário',
          bedroom: 'Quarto',
          bathroom: 'Quarto',
          bedroomHallway: 'Corredor dos<br/>Quartos',
          logisticOffice: 'Escritório de<br/>Logística',
          gym: 'Academia',
          secretStash: 'Sala<br/>Secreta',
          cctvRoom: 'Sala de<br/>CCTV',
          cashRoom: 'Sala do Dinherio',
          easternStairs: 'Escadaria<br/>Leste'
        },
        coastline: {
          aquarium: 'Aquário',
          backAlley: 'Viela<br/>Traseira',
          balcony: 'Sacada (não mostrada)',
          bathroom: 'Banheiro',
          billiardsRoom: 'Salão de Jogos',
          blueBar: 'Bar Azul',
          cantina: 'Cantina',
          courtyard: 'Jardim',
          djBooth: 'Tenda do DJ (não mostrada)',
          garageRoof: 'Telhado da Garagem',
          hallOfFame: 'Hall da Fama',
          hallway: 'Corredor',
          hookahDeck: 'Terraco de<br/>Narguile<br/>(não mostrada)',
          hookahLounge: 'Salão de Narguile',
          kitchen: 'Cozinha',
          mainEntrance: 'Entrada<br/>Principal',
          mainLobby: 'Saguão<br/>Principal',
          northStairs: 'Escadaria<br/>Norte',
          office: 'Escritório',
          penthouse: 'Cobertura',
          pool: 'Piscina',
          poolEntrance: 'Entrada da Piscina',
          poolSide: 'Área da Piscina',
          rooftop: 'Telhado',
          ruins: 'Ruínas',
          securityRoom: 'Sala de<br/>Controle',
          serviceEntrance: 'Entrada de<br/>Serviços',
          southHallway: 'Corredor Sul',
          southPromenade: 'Caminho Sul',
          southStairs: 'Escadaria<br/>Sul',
          sunriseBar: 'Bar do Sol',
          sunRoom: 'Solário',
          theater: 'Home Theater',
          terrace: 'Terraço',
          toilets: 'Lavatórios',
          vipLounge: 'Lounge VIP',
          walkway: 'Trilha'
        },
        consulate: {
          spawnRiotBarricade: 'Barreira contra<br/>Tumulto',
          spawnPoliceLine: 'Cordão<br/>Policial',
          spawnGasStation: 'Posto de<br/>Gasolina',
          spawnSideEntrance: 'Entrada<br/>Lateral',
          exitStairs: 'Escada da<br/>Saída',
          garage: 'Garagem',
          basementCorridor: 'Corredor do<br/>Porão',
          securityRoom: 'Sala da<br/>Segurança',
          cafeteria: 'Cafeteria',
          mainStairs: 'Escadaria<br/>Principal',
          lockerHallway: 'Corredor do<br/>Vestiário',
          serviceStairs: 'Escada de<br/>Serviço',
          electricRoom: 'Sala do<br/>Painel Elétrico',
          storageRoom: 'Sala de<br/>Mantimentos',
          archives: 'Arquivos',
          archivesCorridor: 'Corredor dos<br/>Arquivos',
          pressRoom: 'Sala de<br/>Imprensa',
          westCorridor: 'Corredor<br/>Oeste',
          publicBathroom: 'Banheiro<br/>Público',
          antechamber: 'Antecâmara',
          lobby: 'Lobby',
          eastCorridor: 'Corredor<br/>Leste',
          tellers: 'Atendentes',
          visaOffice: 'Escritório de<br/>Vistos',
          visaEntrance: 'Entrada de<br/>Vistos',
          frontDoor: 'Porta<br/>Frontal',
          balcony: 'Sacada',
          copyRoom: 'Sala de<br/>Cópias',
          cabinet: 'Cabinet',
          administrationOffice: 'Escritório da<br/>Administração',
          breakRoom: 'Sala de<br/>Descanso',
          frontOffice: 'Atendente do<br/>Escritório',
          meetingRoom: 'Sala de<br/>Reuniões',
          hallway: 'Salão',
          consulFrontDesk: 'Atendente do<br/>Consul',
          privateBathroom: 'Banheiro<br/>Privativo',
          waitingRoom: 'Sala de<br/>Espera',
          consulateOffice: 'Escritório do<br/>Consulado',
          garageWay: 'Rampa da<br/>Garagem',
          courtyard: 'Jardins',
          backCourtyard: 'Fundos dos<br/>Jardins',
          sideEntrance: 'Entrada<br/>Lateral',
          dumpster: 'Lixeira',
          parking: 'Estacionamento',
          gardens: 'Jardins',
          fountain: 'Fonte',
          emergencyExit: 'Saída de<br/>Emergência',
          garageRoof: 'Telhado da<br/>Garagem',
          memorialGarden: 'Jardim do<br/>Memorial',
          policeLine: 'Cordão<br/>Policial',
          riotBarracade: 'Barreira contra<br/>Tumulto',
          eastFrontYard: 'Jardim da<br/>Frente<br/>Leste',
          westFrontYard: 'Jardim da<br/>Frente<br/>Oeste',
          frontAlley: 'Passagem<br/>Frontal',
          buildingRoof: 'Telhado do<br/>Prédio'
        },
        favela: {
          packagingRoom: 'Sala dos<br/>Pacotes',
          footballApartment: 'Apartamento do<br/>Futebol',
          armoryRoom: 'Sala das<br/>Armas',
          auntsApartment: 'Apartemento da<br/>Tia',
          auntsBedroom: 'Quarto da<br/>Tia',
          growRoom: 'Estufa',
          bikersApartment: 'Apartamento da<br/>Bike',
          methLab: 'Laboratório de<br/>Meta',
          footballBedroom: 'Quarto do<br/>Futebol',
          footballOffice: 'Escritório do<br/>Futebol',
          bikersBedroom: 'Quarto da<br/>Bike',
          backStairs: 'Escadaria dos<br/>Fundos',
          auntsHall: 'Corredor da<br/>Tia',
          kidsRoom: 'Sala das<br/>Crianças',
          mainStairs: 'Escadaria<br/>Principal',
          stairHall: 'Corredor da<br/>Escada',
          roof: 'Telhado',
          laundryRoom: 'Lavanderia',
          vaultRoom: 'Sala do<br/>Cofre',
          bikersGarage: 'Garagem da<br/>Bike',
          backAlley: 'Beco dos<br/>Fundos',
          schoolAlley: 'Beco da<br/>Escola',
          footballPitch: 'Campo da<br/>Pelada',
          market: 'Mercado',
          marketAlley: 'Viela do<br/>Mercado',
          schoolRooftops: 'Telhado<br/>da Escola',
          street: 'Rua',
          rooftops: 'Telhados',
          courtyard: 'Pátio',
          accessAlley: 'Beco de<br/>Acesso',
          shop: 'Loja',
          marketRooftops: 'Telhado do<br/>Mercado'
        },
        hereford: {
          shootingRange: 'Estand de<br/>Tiro',
          mainStairs: 'Escadaria<br/>Principal',
          garage: 'Garagem',
          kitchen: 'Cozinha',
          diningRoom: 'Refeitório',
          masterBedroom: 'Suíte',
          laundryRoom: 'Lavanderia',
          bathroom: 'Banheiro',
          workshop: 'Oficina',
          rooftop: 'Telhado'
        },
        house: {
          spawnConstructionSite: 'Canteiro de<br/>Obras',
          spawnRiverDocks: 'Docas',
          spawnAPCArea: 'Área do<br/>Caveirão',
          spawnSideStreet: 'Rua<br/>Lateral',
          depot: 'Depósito',
          trainingRoom: 'Sala de<br/>Treinamento',
          kitchenStairs: 'Escadaria da<br/>Cozinha',
          sideStairs: 'Escadaria<br/>Lateral',
          laundryRoom: 'Lavanderia',
          garage: 'Garagem',
          livingRoom: 'Sala de<br/>Estar',
          backEntrance: 'Entrada dos<br/>Fundos',
          lobby: 'Lobby',
          kitchen: 'Cozinha',
          office: 'Escritório',
          diningRoom: 'Sala de<br/>Jantar',
          workshop: 'Oficina',
          kidsBedroom: 'Quarto das<br/>Crianças',
          upperHallway: 'Corredor<br/>Superior',
          lobbyStairs: 'Escadaria do<br/>Lobby',
          walkIn: 'Closet',
          masterBedroom: 'Suíte',
          bathroom: 'Banheiro',
          sideStreet: 'Rua<br/>Lateral',
          garageEntrance: 'Entrada da<br/>Garagem',
          garden: 'Jardim',
          backAlley: 'Beco dos<br/>Fundos',
          patio: 'Patio',
          jacuzzi: 'Hidro',
          basementStairs: 'Escadaria do<br/>Porão',
          treehouseAlley: 'Beco da<br/>Casa da<br/>Árvore',
          frontYard: 'Patio<br/>Frontal',
          frontStreet: 'Rua<br/>Frontal',
          frontPorch: 'Varanda<br/>Frontal',
          backPorch: 'Varanda dos<br/>Fundos',
          backPorchTop: 'Telhado da<br/>Varanda<br/>dos<br/>Fundos',
          frontPorchTop: 'Telhado da<br/>Varanda<br/>da<br/>Frente',
          rooftop: 'Telhado'
        },
        kanal: {
          floatingDock: 'Doca<br/>Flutuante',
          sailboats: 'Veleiros',
          constructionSite: 'Canteiro de<br/>Obras',
          pipes: 'Canos',
          lockerRoom: 'Vestiário',
          archives: 'Arquivos',
          lounge: 'Lounge',
          modelRoom: 'Sala dos<br/>Modelos',
          securityRoom: 'Sala da<br/>Segurança',
          projectorRoom: 'Sala do<br/>Projetor',
          kitchen: 'Cozinha',
          controlRoom: 'Sala de<br/>Controle',
          controlRoomHallway: 'Corredor do<br/>Controle',
          serverRoom: 'Sala do<br/>Servidor',
          lockGate: 'Portão',
          quayContainers: 'Containers no<br/>Berço',
          lockGateTunnel: 'Túnel do<br/>Portão',
          constructionEntrance: 'Entrada da<br/>Construção',
          parkingAlley: 'Patio de<br/>Estacionamento',
          parkingEntrance: 'Entrada do<br/>Estacionamento',
          middleRoad: 'Rua<br/>Central',
          forkliftAlley: 'Beco da<br/>Empilhadeira',
          frontLawn: 'Gramado da<br/>Frente',
          coastGuardRoof: 'Telhado da<br/>Garda<br/>Costeira',
          balcony: 'Sacada',
          parking: 'Estacionamento'
        },
        kafe: {
          riverDocks: 'Docas',
          christmasMarket: 'Mercado de<br/>Natal',
          park: 'Parque',
          laundryRoom: 'Lavanderia',
          bakery: 'Padaria',
          diningRoom: 'Sala de<br/>Jantar',
          museumEntrance: 'Entrada do<br/>Museu',
          miningRoom: 'Sala de<br/>Mineração',
          trainMuseum: 'Museu do<br/>Trem',
          mainCorridor: 'Corredor<br/>Principal',
          readingRoomCorridor: 'Corredor da<br/>Sala de<br/>Leitura',
          readingRoom: 'Sala de<br/>Leitura',
          fireplaceHall: 'Lareira',
          cigarShop: 'Tabacaria',
          cigarLounge: 'Lounge da<br/>Tabacaria',
          bar: 'Bar',
          barBackstore: 'Depósito do<br/>Bar',
          washrooms: 'Banheiro',
          cocktailLounge: 'Lounge de<br/>Cocktail',
          cocktailLoungeEntrance: 'Entrada do<br/>Cocktail',
          westMainStreet: 'Rua<br/>Principal<br/>Oeste',
          mainStreet: 'Rua<br/>Principal',
          eastMainStreet: 'Rua<br/>Principal<br/>Leste',
          bakeryParking: 'Estacionamento da<br/>Padaria',
          bakeryRoof: 'Telhado da<br/>Padaria',
          cafeRoofTop: 'Telhado do<br/>Cafe',
          terrace: 'Terraço',
          backAlley: 'Beco dos<br/>Fundos',
          garage: 'Garagem'
        },
        oregon: {
          junkyard: 'Ferro<br/>Velho',
          street: 'Rua',
          constructionSite: 'Canteiro de<br/>Obras',
          towerStairs: 'Escadaria da<br/>Torre',
          boilerRoom: 'Aquecedores',
          electricRoom: 'Elétrica',
          bunker: 'Bunker',
          basementCorridor: 'Corredor do<br/>Porão',
          supplyRoom: 'Suprimentos',
          laundryRoom: 'Lavanderia',
          laundryStorage: 'Depósito da<br/>Lavanderia',
          laundryStairs: 'Escadaria da<br/>Lavanderia',
          diningHall: 'Refeitório',
          showers: 'Chuveiros',
          kitchen: 'Cozinha',
          classroom: 'Sala de<br/>Aula',
          lobby: 'Lobby',
          mainStairs: 'Escadaria<br/>Principal',
          meetingHall: 'Sala de<br/>Reuniões',
          rearStage: 'Sala dos<br/>Fundos',
          garage: 'Garagem',
          dormMainHall: 'Corredor do<br/>Dormitório',
          armoryCorridor: 'Corredor do<br/>Arsenal',
          masterBedroom: 'Suíte',
          armory: 'Arsenal',
          walkIn: 'Closet',
          attic: 'Sótão',
          busYard: 'Pátio do<br/>ônibus',
          farmlands: 'Horta',
          shootingRange: 'Estande de<br/>Tiro',
          parking: 'Estacionamento',
          mainEntrance: 'Entrada<br/>Principal',
          balcony: 'Sacada',
          diningHallRoof: 'Telhado da<br/>sala de<br/>jantar',
          garageRoof: 'Telhado da<br/>Garagem',
          dormsRoof: 'Telhado do<br/>Dormitório',
          meetingHallRoof: 'Telhado da<br/>Sala de<br/>Reuniões',
          supplyCloset: 'Armário de<br/>Fornecimento'
        },
        plane: {
          spawnOfficialEntrance: 'Entrada<br/>Oficial',
          spawnReporterEntrance: 'Entrada da<br/>Imprensa',
          spawnServiceEntrance: 'Entrada de<br/>Serviço',
          pressBathroom: 'Presidente<br/>WC',
          meetingRoom: 'Sala de<br/>Reunião',
          frontHallway: 'Corredor<br/>Frontal',
          executiveOffice: 'Escritório<br/>Executivo',
          mainEntrance: 'Entrada<br/>Principal',
          frontStairs: 'Escadaria<br/>Frontal',
          pantry: 'Dispensa',
          kitchen: 'Cozinha',
          executiveHallway: 'Corredor<br/>Executivo',
          executiveBedroom: 'Banheiro<br/>Executivo',
          changeRoom: 'Vestiário',
          laund: 'Lavand.',
          frontServiceEntrance: 'Entrada de<br/>Serviço<br/>Frontal',
          rightWing: 'Asa<br/>Direita',
          backServiceEntrance: 'Entrada de<br/>Serviço<br/>Transeira',
          reporterEntrance: 'Entrada de<br/>Repórteres',
          leftWing: 'Asa<br/>Esquerda',
          staffSection: 'Setor do<br/>Staff',
          securityRoom: 'Sala da<br/>Segurança',
          pressSectionA: 'Setor de<br/>Imprensa A',
          pressSectionB: 'Setor de<br/>Imprensa B',
          backStairs: 'Escadaria<br/>Traseira',
          cargoHold: 'Compartimento de<br/>Carga',
          serviceCorridor: 'Corredor de<br/>Serviço',
          storage: 'Armazenagem',
          luggageHold: 'Compartimento de<br/>Bagagem',
          firstAidStation: 'Enfermagem',
          cargoFrontEntrance: 'Entrada<br/>Dianteira de<br/>Carga',
          cockpitStairs: 'Escadaria<br/>Cockpit',
          cabinStaff: 'Equipe de<br/>Cabine',
          radioCabin: 'Rádio da<br/>Cabine',
          cabin: 'Cockpit',
          caterer: 'Serviço<br/>Caterer',
          serverRoomA: 'Sala do<br/>Servidor A',
          serverRoomB: 'Sala do<br/>Servidor B',
          technicalSeating: 'Área<br/>Técnica',
          ladderRoom: 'Sala das<br/>Escadas'
        },
        skyscraper: {
          helipad: 'Heliponto',
          tower: 'Torre',
          ventilationUnits: 'Ventilação',
          kitchen: 'Cozinha',
          pantry: 'Dispensa',
          deliveryRoom: 'Sala de<br/>Entrega',
          houseLobby: 'Lobby da<br/>Casa',
          houseEntrance: 'Entrada da<br/>Casa',
          mainEntrance: 'Entrada<br/>Principal',
          reception: 'Recepção',
          bedroom: 'Quarto',
          closet: 'Closet',
          bathroom: 'Banheiro',
          houseStairs: 'Escadaria',
          restaurant: 'Restaurante',
          toilet: 'Banheiro',
          bbq: 'Churrasco',
          backHallway: 'Corredor<br/>Fundos',
          mainStairs: 'Escadaria<br/>Principal',
          geishaRoom: 'Sala das<br/>Geishas',
          hallway: 'Corredor',
          karaoke: 'Karaoke',
          teaRoom: 'Sala de<br/>Chá',
          taiko: 'Taiko',
          terrace: 'Terraço',
          backStairs: 'Escadaria<br/>Fundos',
          houseBalcony: 'Sacada da<br/>Casa',
          exhibition: 'Exibição',
          lounge: 'Lounge',
          workOffice: 'Escritório',
          clearance: 'Acesso',
          peacefullTree: 'Árvore da<br/>Paz',
          contemplationGarden: 'Jardim da<br/>Contemplação',
          westGarden: 'Jardim<br/>Oeste',
          bridge: 'Ponte',
          gazeebo: 'Gazebo',
          restBalcony: 'Sacada do<br/>Restaurante',
          northGarden: 'Jardim<br/>Norte',
          eastGarden: 'Jardim<br/>Leste',
          sandGarden: 'Jardim de<br/>Areia',
          sidePath: 'Caminho<br/>Lateral',
          sideStairs: 'Escadaria<br/>Lateral',
          dragonStatue: 'Estátua do<br/>Dragão',
          coveredWalkway: 'Caminho<br/>Coberto'
        },
        yacht: {
          spawnSubmarine: 'Submarino',
          spawnZodiak: 'Bote',
          spawnSnowMobile: 'Snow Mobile',
          mapsRoom: 'Sala dos<br/>Mapas',
          cockpit: 'Cockpit',
          cockpitHallway: 'Corredor do<br/>Cockpit',
          captainsOffice: 'Escritório do<br/>Capitão',
          cockpitBalcony: 'Sacada do<br/>Cockpit',
          topDeckStairs: 'Escadaria do<br/>Deck<br/>Superior',
          helipadEntrance: 'Entrada do<br/>Heliponto',
          helipad: 'Heliponto',
          spaDeck: 'Deck do<br/>spa',
          eastDeck: 'Deck<br/>Leste',
          westDeck: 'Deck<br/>Oeste',
          frontDeck: 'Deck<br/>Frontal',
          masterBedroom: 'Suíte',
          casino: 'Cassino',
          pokerRoom: 'Sala de<br/>Poker',
          bathroom: 'Ba-<br/>nheiro',
          bedroomHallway: 'Corredor do<br/>Quarto',
          casinoHallway: 'Corredor do<br/>Cassino',
          globeHallway: 'Corredor do<br/>Globo',
          lounge: 'Lounge',
          cafeteria: 'Cafeteria',
          engine: 'Motor',
          backEntrance: 'Entrada dos<br/>Fundos',
          rearDeck: 'Deck dos<br/>Fundos',
          serverRoom: 'Sala do<br/>Servidor',
          engineStorage: 'Depósito do<br/>Motor',
          engineControl: 'Controle do<br/>Motor',
          backStairs: 'Escadaria dos<br/>Fundos',
          emergencyExit: 'Saída de<br/>Emergência',
          engineHallway: 'Corredor do<br/>Motor',
          frontStairs: 'Escadaria da<br/>Frente',
          kitchen: 'Cozinha',
          staffDormitory: 'Dormitório do<br/>Staff',
          westBalcony: 'Sacada<br/>Oeste',
          eastBalcony: 'Sacada<br/>Leste',
          kitchenHallway: 'Corredor da<br/>Cozinha',
          kitchenStairs: 'Escadaria da<br/>Cozinha',
          kitchenPantry: 'Dispensa',
          infirmary: 'Enfermaria',
          borealSubRoom: 'Sala<br/>Boreal',
          cafeteriaHallway: 'Corredor da<br/>Cafeteria',
          engineUtility: 'Painel do<br/>Motor',
          submarine: 'Submarino',
          westGlacier: 'Geleria<br/>Oeste',
          eastHullBreach: 'Buraco no Casco<br/>Leste',
          eastGlacier: 'Geleria<br/>Leste',
          frozenRiver: 'Rio<br/>Congelado',
          zodiac: 'Bote',
          westHullBreach: 'Buraco no Casco<br/>Oeste',
          kingOfTheWorld: 'O Rei<br/>do Mundo',
          roof: 'Telhado',
          anchorName: 'Âncora',
          aklarkSubEntrance: 'Entrada do<br/>Aklark'
        }
      }
    };

  R6MLangTerms.registerLanguage(name, terms);

  return  {
    name: name,
    terms: terms
  };
})(R6MLangTerms);
