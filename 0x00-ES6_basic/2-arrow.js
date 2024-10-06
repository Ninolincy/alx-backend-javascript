export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  //const self = this;/*replace the separate reference to bind the function with an arrow*/
  this.addNeighborhood = (neighborhood) => {
    //replace self with this.
    this.sanFranciscoNeighborhoods.push(neighborhood);

    return this.sanFranciscoNeighborhoods;
  };

}
