export class AllRoomsDataService {
    getData = async (): Promise<any> => {
        const response = await fetch("http://localhost:3002/");
        const data = await response.json();
        if (data.status === 200) {
            return data.data;
        }
        return [];
    };
}
