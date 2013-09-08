module.exports = function()
{
    var animal = 'kitties';

    function getAnimal()
    {
        return animal;
    }

    return {
        getAnimal: getAnimal
    };
}();