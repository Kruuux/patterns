export class MilesAPI {
  public getMilage(): number {
    const miles = 10;
    console.log(`${MilesAPI.name} | Distance is equal to ${miles} miles`);
    return miles;
  }
}
