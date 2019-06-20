const enhancer = require('./enhancer.js');
// test away!

describe('the enhancer', () => {
    
    describe('the repair function', () => {
        it('should restore the durability', () => {
            //arrange
            const masterSword = {
                name: 'Master Sword',
                durability: 20,
                enhancementLVL: 5
            }

            //act
            const repairResult = enhancer.repair(masterSword.durability)

            //assertions
            expect(repairResult).toBe(100)
            expect(enhancer.repair()).toBe(100)
            expect(enhancer.repair('string')).toBe(100)
        })
    })

    describe('the succesful item enhancement function', () => {
        it('should increment the enhancement lvl', () => {
            
            const masterSword = {
                name: 'Master Sword',
                durability: 20,
                enhancementLVL: 5
            }

            const enhanceSuccess = enhancer.succeed(masterSword.enhancementLVL)
            
            // expect(enhancer.succeed(5)).toBe(6)
            expect(enhancer.succeed(0)).toBe(1)
            expect(enhancer.succeed(20)).toBe(20)

        })
    })




})
