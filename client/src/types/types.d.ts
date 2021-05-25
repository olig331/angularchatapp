type RoomsData =
    | {
          name: string;
          users: number;
          maxUsers: number;
          roomId: string;
          img: string;
      }[]
    | [];
