export const name = 'Yoelin'
let makeName = () => {

    let result = '';
    var characters1 = 'AVFDSTYUK';
    var characters  = 'aeioudslmaeiou';
    result          = characters1.charAt(Math.floor(Math.random()));
    var charactersLength = characters.length;
    for ( var i = 0; i < 5; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
   return result;
}
export const lastName = makeName();