const enhancer = require('./enhancer.js');
// test away!

describe('the enhancer', () => {
    
    describe('the repair function', () => {
        it('should restore the durability', () => {
            //arrange
            const masterSword = {
                name: 'Master Sword',
                durability: 20,
                enhancement: 5
            }

            //act
            const repairResult = enhancer.repair(masterSword.durability)

            //assertions
            expect(repairResult).toBe(100)
            expect(enhancer.repair()).toBe(100)
            expect(enhancer.repair('string')).toBe(100)
        })
    })




})
