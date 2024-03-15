import User from "../models/user.js";

const createUsers = async () => {
  try {
    const usersData = [
      {
        UserName: "test1",
        Email: "test1@gmail.com",
        Password: "password1",
        UserCode: 123456,
        Phone: "1234567890",
        CodeReferenced: 789,
        pointsRight: 100,
        pointsLeft: 200,
        idPaidPlan: 1,
        referralsCount: 5,
        position: "left",
        status: 1,
        rank_id: 2,
        highestRank: 3,
        aiqToken: 123,
        payAmount: 50.0,
        enrollmentVolume: 1000,
        directLeft: 2,
        directRight: 3,
        role: '1' // '1' for admin, '0' for regular user
      },
      {
        UserName: "test2",
        Email: "test2@gmail.com",
        Password: "password2",
        UserCode: 654321,
        Phone: "0987654321",
        CodeReferenced: 987,
        pointsRight: 150,
        pointsLeft: 250,
        idPaidPlan: 2,
        referralsCount: 10,
        position: "right",
        status: 0,
        rank_id: 3,
        highestRank: 4,
        aiqToken: 456,
        payAmount: 100.0,
        enrollmentVolume: 2000,
        directLeft: 3,
        directRight: 4,
        role: '0' // '1' for admin, '0' for regular user
      },
      {
        UserName: "test3",
        Email: "test3@gmail.com",
        Password: "password3",
        UserCode: 987654,
        Phone: "1357924680",
        CodeReferenced: 123,
        pointsRight: 200,
        pointsLeft: 300,
        idPaidPlan: 3,
        referralsCount: 15,
        position: "left",
        status: 1,
        rank_id: 4,
        highestRank: 5,
        aiqToken: 789,
        payAmount: 150.0,
        enrollmentVolume: 3000,
        directLeft: 4,
        directRight: 5,
        role: '0' // '1' for admin, '0' for regular user
      }
    ];

    for (const user of usersData) {
      await User.create(user);
    }

    console.log('Usuarios creados exitosamente.');
  } catch (error) {
    console.error('Error al crear los usuarios:', error);
  }
};

export default createUsers;
