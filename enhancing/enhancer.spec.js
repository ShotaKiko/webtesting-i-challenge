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
            expect(enhancer.repair(masterSword.durability)).toBe(100)
        })
    })

    describe('the succesful item enhancement function', () => {
        it('should increment the enhancement lvl unless lvl is 20', () => {
            
            const masterSword = {
                name: 'Master Sword',
                durability: 20,
                enhancementLVL: 5
            }

            const enhLvl = masterSword.enhancementLVL
            
            expect(enhancer.succeed(5)).toBe(6)
            expect(enhancer.succeed(0)).toBe(1)
            expect(enhancer.succeed(20)).toBe(20)
            expect(enhancer.succeed(enhLvl)).toBe(enhLvl + 1)

        })
    })

    describe('the fail state enhancement function', () => {
        it('should lower durability by 5 if enhLvl is less than 15', () => {
            const masterSword = {
                name: 'Master Sword',
                durability: 20,
                enhancementLVL: 14
            }
            const condition = masterSword.durability

            expect(enhancer.fail(14, condition)).toBe(condition - 5)
            expect(enhancer.fail(14, 0)).toBe(0)
        })

        it('should lower the durability by 10 if the enhlvl is >= 15', () => {
            const masterSword = {
                name: 'Master Sword',
                durability: 20,
                enhancementLVL: 14
            }
            const condition = masterSword.durability
    
            expect(enhancer.fail(15, condition)).toBe(condition - 10)
            expect(enhancer.fail(16, 10)).toBe(0)
            expect(enhancer.fail(16, 7)).toBe(0)
        })
        
        it('should lower decrement enh lvl by 1 if enh lvl is >16', () => {
            const masterSword = {
                name: 'Master Sword',
                durability: 20,
                enhancementLVL: 18
            }
            const enh = masterSword.enhancementLVL
            const condition = masterSword.durability

            expect(enhancer.fail(enh, condition)).toBe(enh -1, condition - 10)
            expect(enhancer.fail(18, 9)).toBe(17, 0)
        })
    })

    describe('the get item function', () =>  {
        it('should just return the original name of the item', () => {
            const masterSword = {
                name: 'Master Sword',
                durability: 20,
                enhancementLVL: 0
            }
            expect(enhancer.get(masterSword)).toBe(masterSword.name)
        })
        
        it('should return name [+enhlvl] if enh > 0', () => {
            const masterSword = {
                name: 'Master Sword',
                durability: 20,
                enhancementLVL: 2
            }
            expect(enhancer.get(masterSword))
            .toBe(`${masterSword.name} [+${masterSword.enhancementLVL}]`)
        })
    })
})
