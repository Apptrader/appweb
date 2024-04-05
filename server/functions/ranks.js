import Rank from "../models/rank.model.js";

const createRanks = async () => {
  try {
    const ranksData = [
      {
        name: 'BUILDER',
        commission: 0,
        points: 100,
        left: 1,
        right: 1,
        topPayMonth: 100,
        topPayWeek: 50
      },
      {
        name: 'EXECUTIVE',
        commission: 10,
        points: 250,
        left: 1,
        right: 1,
        topPayMonth: 300,
        topPayWeek: 75
      },
      {
        name: 'PREMIERE EXECUTIVE',
        commission: 10,
        points: 500,
        left: 1,
        right: 1,
        topPayMonth: 600,
        topPayWeek: 150
      },
      {
        name: 'INTERNATIONAL EXECUTIVE',
        commission: 12.5,
        points: 1000,
        left: 2,
        right: 2,
        topPayMonth: 1000,
        topPayWeek: 250
      },
      {
        name: 'DIAMOND EXECUTIVE',
        commission: 12.5,
        points: 2500,
        left: 2,
        right: 2,
        topPayMonth: 2500,
        topPayWeek: 625
      },
      {
        name: 'AMBASSADOR',
        commission: 15,
        points: 5000,
        left: 2,
        right: 2,
        topPayMonth: 5000,
        topPayWeek: 1250
      },
      {
        name: 'PREMIERE AMBASSADOR',
        commission: 15,
        points: 10000,
        left: 2,
        right: 2,
        topPayMonth: 10000,
        topPayWeek: 2500
      },
      {
        name: 'INTERNATIONAL AMBASSADOR',
        commission: 15,
        points: 25000,
        left: 2,
        right: 2,
        topPayMonth: 25000,
        topPayWeek: 6250
      },
      {
        name: 'DIAMOND AMBASSADOR',
        commission: 15,
        points: 50000,
        left: 2,
        right: 2,
        topPayMonth: 50000,
        topPayWeek: 12500
      },
      {
        name: 'COMMANDER',
        commission: 17.5,
        points: 100000,
        left: 2,
        right: 2,
        topPayMonth: 100000,
        topPayWeek: 25000
      },
      {
        name: 'PRESIDENT',
        commission: 20,
        points: 250000,
        left: 2,
        right: 2,
        topPayMonth: 250000,
        topPayWeek: 62500
      },
      {
        name: 'LEGEND',
        commission: 20,
        points: 500000,
        left: 2,
        right: 2,
        topPayMonth: 500000,
        topPayWeek: 125000
      },
      {
        name: 'ROYAL',
        commission: 20,
        points: 1000000,
        left: 2,
        right: 2,
        topPayMonth: 750000,
        topPayWeek: 187500
      },
      {
        name: 'CROWN',
        commission: 20,
        points: 2000000,
        left: 2,
        right: 2,
        topPayMonth: 1000000,
        topPayWeek: 250000
      }
    ];

    for (const rank of ranksData) {
      // Busca si ya existe un rango con el mismo nombre
      const existingRank = await Rank.findOne({ where: { name: rank.name } });

      // Si no existe, lo crea
      if (!existingRank) {
        await Rank.create(rank);
        console.log(`Rango "${rank.name}" creado exitosamente.`);
      } else {
        console.log(`El rango "${rank.name}" ya existe.`);
      }
    }

    console.log('Proceso de creación de rangos finalizado.');
  } catch (error) {
    console.error('Error al crear los rangos:', error);
  }
};

export default createRanks;
