//This isnt a true model because there is functionality going on within it
//but im not going to create a con

class CocktailModel {
  constructor() {
    this.ingredientsArr = [];
    this.measurementsArr = [];
    this.model = ({strDrink, strInstructions}, ingredientsArr, measurementsArr) => ({
      drinkName: strDrink,
      instructions: strInstructions,
      ingredients: ingredientsArr,
      measurements: measurementsArr
    });
  }
  createDataModel(data, arrayCreator) {
    this.ingredientsArr = [];
    this.measurementsArr = [];
    arrayCreator(data, this.ingredientsArr, "strIngredient", 15);
    arrayCreator(data, this.measurementsArr, "strMeasure", 15);

    return this.model(data, this.ingredientsArr, this.measurementsArr);
  }
}

export default CocktailModel;