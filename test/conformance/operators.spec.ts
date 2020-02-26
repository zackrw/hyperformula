import { HyperFormula, DetailedCellError } from '../../src'
import '../testConfig'
import { adr } from '../testUtils'
import { CellError, ErrorType } from '../../src/Cell'
import { EmptyValue } from '../../src/Cell'

// Data and test scenarios were part of the working draft for GNOME
// https://gxitlab.gnome.org/GNOME/gnumeric/blob/master/samples/excel/operator.xls


const data =
    ['=A1=B1', '=A1>B1', '=A1<B1', '=A1>=B1', '=A1<=B1', '=A1<>B1', '=A1+B1', '=A1-B1', '=A1*B1', '=A1/B1', '=A1^B1', '=A1&B1', '=+A1', '=-A1', '=A1%']

function createEngine(data: any[][]) {
  const engine = HyperFormula.buildFromArray(data)

  return {
    getCellValue(cellAddress: string) {
      return engine.getCellValue(adr(cellAddress))
    }
  }
}

describe('Quality assurance of operators', () => {
  it('BLANK should be supported by all comparison operators', () => { 
    const engine = createEngine([
      [null, null, ...data]
    ])

    expect(engine.getCellValue('C1')).toEqual(true)  // EQUAL
    expect(engine.getCellValue('D1')).toEqual(false) // GT
    expect(engine.getCellValue('E1')).toEqual(false) // LT
    expect(engine.getCellValue('F1')).toEqual(true) // GTE
    expect(engine.getCellValue('G1')).toEqual(true) // LTE
    expect(engine.getCellValue('H1')).toEqual(false) // NOT EQUAL
    expect(engine.getCellValue('I1')).toEqual(0) // ADD
    expect(engine.getCellValue('J1')).toEqual(0) // SUB
    expect(engine.getCellValue('K1')).toEqual(0) // MULT
    expect(engine.getCellValue('L1')).toEqual(new DetailedCellError(new CellError(ErrorType.DIV_BY_ZERO), '#DIV/0!'))
    expect(engine.getCellValue('M1')).toEqual(1) //EXP 
    expect(engine.getCellValue('N1')).toEqual('') // CONCAT
    expect(engine.getCellValue('O1')).toEqual(0) // UNARY PLUS
    expect(engine.getCellValue('P1')).toEqual(0) // UNARY MINUS 
    expect(engine.getCellValue('Q1')).toEqual(0) // PERCENTAGE
  })

  it('TRUE and BLANK should be supported by all comparison operators', () => {
    const engine = createEngine([
      [true, null, ...data]
    ])

    expect(engine.getCellValue('C1')).toEqual(false)  // EQUAL
    expect(engine.getCellValue('D1')).toEqual(true) // GT    
    expect(engine.getCellValue('E1')).toEqual(false) // LT   
    expect(engine.getCellValue('F1')).toEqual(true) // GTE   //true
    expect(engine.getCellValue('G1')).toEqual(false) // LTE  
    expect(engine.getCellValue('H1')).toEqual(true) // NOT EQUAL
    expect(engine.getCellValue('I1')).toEqual(1) // ADD  
    expect(engine.getCellValue('J1')).toEqual(1) // SUB  
    expect(engine.getCellValue('K1')).toEqual(0) // MULT 
    expect(engine.getCellValue('L1')).toEqual(new DetailedCellError(new CellError(ErrorType.DIV_BY_ZERO), '#DIV/0!')) // DIV 
    expect(engine.getCellValue('M1')).toEqual(1) // EXP  
    expect(engine.getCellValue('N1')).toEqual('true') // CONCAT    
    expect(engine.getCellValue('O1')).toEqual(true) // UNARY PLUS   
    expect(engine.getCellValue('P1')).toEqual(-1) // UNARY MINUS 
    expect(engine.getCellValue('Q1')).toEqual(0.01) // PERCENTAGE 
  })

  it('BLANK and TRUE should be supported by all comparison operators', () => {
    const engine = createEngine([
      [null, true, ...data]
    ])

    expect(engine.getCellValue('D1')).toEqual(false) // GT    
    expect(engine.getCellValue('E1')).toEqual(true) // LT   
    expect(engine.getCellValue('F1')).toEqual(false) // GTE   
    expect(engine.getCellValue('G1')).toEqual(true) // LTE  
    expect(engine.getCellValue('J1')).toEqual(-1) // SUB
    expect(engine.getCellValue('L1')).toEqual(0) // DIV
    expect(engine.getCellValue('M1')).toEqual(0) // EXP
  })

  it('BLANK and FALSE should be supported by all comparison operators', () => { //pending for #194
    const engine = createEngine([
      [EmptyValue, false, ...data]
    ])

    expect(engine.getCellValue('D1')).toEqual(false) // GT    
    //expect(engine.getCellValue('E1')).toEqual(false) // LT return true
    //expect(engine.getCellValue('F1')).toEqual(true) // GTE return true
    expect(engine.getCellValue('G1')).toEqual(true) // LTE  
    expect(engine.getCellValue('J1')).toEqual(0) // SUB  value
    expect(engine.getCellValue('M1')).toEqual(1) // EXP  value
  })

  it('null and FALSE should be supported by all comparison operators', () => { //pending for #194
    const engine = createEngine([
      [null, false, ...data]
    ])

    expect(engine.getCellValue('D1')).toEqual(false) // GT    
    //expect(engine.getCellValue('E1')).toEqual(false) // LT  return true
    //expect(engine.getCellValue('F1')).toEqual(true) // GTE  return false 
    expect(engine.getCellValue('G1')).toEqual(true) // LTE  
    expect(engine.getCellValue('J1')).toEqual(0) // SUB  value
    expect(engine.getCellValue('M1')).toEqual(1) // EXP  value
  })

  it('TRUE and TRUE should be supported by all comparison operators', () => {
    const engine = createEngine([
      [true, true, ...data]
    ])

    expect(engine.getCellValue('C1')).toEqual(true)  // EQUAL
    expect(engine.getCellValue('D1')).toEqual(false) // GT
    expect(engine.getCellValue('E1')).toEqual(false) // LT
    expect(engine.getCellValue('F1')).toEqual(true) // GTE
    expect(engine.getCellValue('G1')).toEqual(true) // LTE
    expect(engine.getCellValue('H1')).toEqual(false) // NOT EQUAL
    expect(engine.getCellValue('I1')).toEqual(2) // ADD 
    expect(engine.getCellValue('J1')).toEqual(0) // SUB 
    expect(engine.getCellValue('K1')).toEqual(1) // MULT 
    expect(engine.getCellValue('L1')).toEqual(1) // DIV 
    expect(engine.getCellValue('M1')).toEqual(1) // EXP 
    expect(engine.getCellValue('N1')).toEqual('truetrue') // CONCAT

  })

  it('TRUE and FALSE should be supported by all comparison operators', () => {
    const engine = createEngine([
      [true, false, ...data]
    ])

    expect(engine.getCellValue('C1')).toEqual(false)  // EQUAL
    expect(engine.getCellValue('D1')).toEqual(true) // GT
    expect(engine.getCellValue('E1')).toEqual(false) // LT
    expect(engine.getCellValue('F1')).toEqual(true) // GTE
    expect(engine.getCellValue('G1')).toEqual(false) // LTE
    expect(engine.getCellValue('H1')).toEqual(true) // NOT EQUAL
    expect(engine.getCellValue('I1')).toEqual(1) // ADD
    expect(engine.getCellValue('J1')).toEqual(1) // SUB
    expect(engine.getCellValue('K1')).toEqual(0) // MULT
    expect(engine.getCellValue('L1')).toEqual(new DetailedCellError(new CellError(ErrorType.DIV_BY_ZERO), '#DIV/0!'))
    expect(engine.getCellValue('M1')).toEqual(1) // EXP
    expect(engine.getCellValue('N1')).toEqual('truefalse') // CONCAT
  })

  it('FALSE and FALSE should be supported by all comparison operators', () => {
    const engine = createEngine([
      [false, false, ...data]
    ])

    expect(engine.getCellValue('C1')).toEqual(true)  // EQUAL
    expect(engine.getCellValue('D1')).toEqual(false) // GT
    expect(engine.getCellValue('E1')).toEqual(false) // LT
    expect(engine.getCellValue('F1')).toEqual(true) // GTE
    expect(engine.getCellValue('G1')).toEqual(true) // LTE 
    expect(engine.getCellValue('H1')).toEqual(false) // NOT EQUAL
    expect(engine.getCellValue('I1')).toEqual(0) // ADD
    expect(engine.getCellValue('J1')).toEqual(0) // SUB
    expect(engine.getCellValue('K1')).toEqual(0) // MULT
    expect(engine.getCellValue('L1')).toEqual(new DetailedCellError(new CellError(ErrorType.DIV_BY_ZERO), '#DIV/0!')) // DIV
    expect(engine.getCellValue('M1')).toEqual(1) // EXP 
    expect(engine.getCellValue('N1')).toEqual('falsefalse') // CONCAT
    expect(engine.getCellValue('O1')).toEqual(false) // UNARY PLUS 
    expect(engine.getCellValue('P1')).toEqual(0) // UNARY MINUS  
    expect(engine.getCellValue('Q1')).toEqual(0) // PERCENTAGE value
  })

  it('FALSE and TRUE should be supported by all comparison operators', () => {
    const engine = createEngine([
      [false, true, ...data]
    ])

    expect(engine.getCellValue('D1')).toEqual(false) // GT    
    expect(engine.getCellValue('E1')).toEqual(true) // LT   
    expect(engine.getCellValue('F1')).toEqual(false) // GTE   
    expect(engine.getCellValue('G1')).toEqual(true) // LTE  
    expect(engine.getCellValue('J1')).toEqual(-1) // SUB 
    expect(engine.getCellValue('L1')).toEqual(0) // DIV
    expect(engine.getCellValue('M1')).toEqual(0) // EXP 
  })

  it('error #DIV/0! with every combination should be supported by all comparison operators', () => {
    const engine = createEngine([
      ['#DIV/0!', '#DIV/0!', ...data]
    ])

    expect(engine.getCellValue('C1')).toEqual(new DetailedCellError(new CellError(ErrorType.DIV_BY_ZERO), '#DIV/0!'))  // EQUAL
    expect(engine.getCellValue('D1')).toEqual(new DetailedCellError(new CellError(ErrorType.DIV_BY_ZERO), '#DIV/0!')) // GT
    expect(engine.getCellValue('E1')).toEqual(new DetailedCellError(new CellError(ErrorType.DIV_BY_ZERO), '#DIV/0!')) // LT
    expect(engine.getCellValue('F1')).toEqual(new DetailedCellError(new CellError(ErrorType.DIV_BY_ZERO), '#DIV/0!')) // GTE
    expect(engine.getCellValue('G1')).toEqual(new DetailedCellError(new CellError(ErrorType.DIV_BY_ZERO), '#DIV/0!')) // LTE 
    expect(engine.getCellValue('H1')).toEqual(new DetailedCellError(new CellError(ErrorType.DIV_BY_ZERO), '#DIV/0!')) // NOT EQUAL
    expect(engine.getCellValue('I1')).toEqual(new DetailedCellError(new CellError(ErrorType.DIV_BY_ZERO), '#DIV/0!')) //ADD
    expect(engine.getCellValue('J1')).toEqual(new DetailedCellError(new CellError(ErrorType.DIV_BY_ZERO), '#DIV/0!')) //SUB
    expect(engine.getCellValue('K1')).toEqual(new DetailedCellError(new CellError(ErrorType.DIV_BY_ZERO), '#DIV/0!')) //MULT
    expect(engine.getCellValue('L1')).toEqual(new DetailedCellError(new CellError(ErrorType.DIV_BY_ZERO), '#DIV/0!')) // DIV
    expect(engine.getCellValue('M1')).toEqual(new DetailedCellError(new CellError(ErrorType.DIV_BY_ZERO), '#DIV/0!')) // EXP
    expect(engine.getCellValue('N1')).toEqual(new DetailedCellError(new CellError(ErrorType.DIV_BY_ZERO), '#DIV/0!')) // CONCAT
    expect(engine.getCellValue('O1')).toEqual(new DetailedCellError(new CellError(ErrorType.DIV_BY_ZERO), '#DIV/0!')) // UNARY PLUS
    expect(engine.getCellValue('P1')).toEqual(new DetailedCellError(new CellError(ErrorType.DIV_BY_ZERO), '#DIV/0!')) // UNARY MINUS
    expect(engine.getCellValue('Q1')).toEqual(new DetailedCellError(new CellError(ErrorType.DIV_BY_ZERO), '#DIV/0!')) // PERCENTAGE
  })

  it('error #N/A! with every combination should be supported by all comparison operators', () => {
    const engine = createEngine([
      ['#N/A', '#N/A', ...data],

    ])

    expect(engine.getCellValue('C1')).toEqual(new DetailedCellError(new CellError(ErrorType.NA), '#N/A'))  // EQUAL
    expect(engine.getCellValue('D1')).toEqual(new DetailedCellError(new CellError(ErrorType.NA), '#N/A')) // GT
    expect(engine.getCellValue('E1')).toEqual(new DetailedCellError(new CellError(ErrorType.NA), '#N/A')) // LT
    expect(engine.getCellValue('F1')).toEqual(new DetailedCellError(new CellError(ErrorType.NA), '#N/A')) // GTE
    expect(engine.getCellValue('G1')).toEqual(new DetailedCellError(new CellError(ErrorType.NA), '#N/A')) // LTE 
    expect(engine.getCellValue('H1')).toEqual(new DetailedCellError(new CellError(ErrorType.NA), '#N/A')) // NOT EQUAL
    expect(engine.getCellValue('I1')).toEqual(new DetailedCellError(new CellError(ErrorType.NA), '#N/A')) //ADD
    expect(engine.getCellValue('J1')).toEqual(new DetailedCellError(new CellError(ErrorType.NA), '#N/A')) //SUB
    expect(engine.getCellValue('K1')).toEqual(new DetailedCellError(new CellError(ErrorType.NA), '#N/A')) //MULT
    expect(engine.getCellValue('L1')).toEqual(new DetailedCellError(new CellError(ErrorType.NA), '#N/A')) // DIV
    expect(engine.getCellValue('M1')).toEqual(new DetailedCellError(new CellError(ErrorType.NA), '#N/A')) // EXP
    expect(engine.getCellValue('N1')).toEqual(new DetailedCellError(new CellError(ErrorType.NA), '#N/A')) // CONCAT
    expect(engine.getCellValue('O1')).toEqual(new DetailedCellError(new CellError(ErrorType.NA), '#N/A')) // UNARY PLUS
    expect(engine.getCellValue('P1')).toEqual(new DetailedCellError(new CellError(ErrorType.NA), '#N/A')) // UNARY MINUS
    expect(engine.getCellValue('Q1')).toEqual(new DetailedCellError(new CellError(ErrorType.NA), '#N/A')) // PERCENTAGE

  })

  it('error #REF! with every combination should be supported by all comparison operators', () => {
    const engine = createEngine([
      ['#REF!', '#REF!', ...data]
    ])

    expect(engine.getCellValue('C1')).toEqual(new DetailedCellError(new CellError(ErrorType.REF), '#REF!')) //EQUAL
    expect(engine.getCellValue('D1')).toEqual(new DetailedCellError(new CellError(ErrorType.REF), '#REF!')) // GT
    expect(engine.getCellValue('E1')).toEqual(new DetailedCellError(new CellError(ErrorType.REF), '#REF!')) // LT
    expect(engine.getCellValue('F1')).toEqual(new DetailedCellError(new CellError(ErrorType.REF), '#REF!')) // GTE
    expect(engine.getCellValue('G1')).toEqual(new DetailedCellError(new CellError(ErrorType.REF), '#REF!')) // LTE 
    expect(engine.getCellValue('H1')).toEqual(new DetailedCellError(new CellError(ErrorType.REF), '#REF!')) // NOT EQUAL
    expect(engine.getCellValue('I1')).toEqual(new DetailedCellError(new CellError(ErrorType.REF), '#REF!')) //ADD
    expect(engine.getCellValue('J1')).toEqual(new DetailedCellError(new CellError(ErrorType.REF), '#REF!')) //SUB
    expect(engine.getCellValue('K1')).toEqual(new DetailedCellError(new CellError(ErrorType.REF), '#REF!')) //MULT
    expect(engine.getCellValue('L1')).toEqual(new DetailedCellError(new CellError(ErrorType.REF), '#REF!')) // DIV
    expect(engine.getCellValue('M1')).toEqual(new DetailedCellError(new CellError(ErrorType.REF), '#REF!')) // EXP
    expect(engine.getCellValue('N1')).toEqual(new DetailedCellError(new CellError(ErrorType.REF), '#REF!')) // CONCAT
    expect(engine.getCellValue('O1')).toEqual(new DetailedCellError(new CellError(ErrorType.REF), '#REF!')) // UNARY PLUS
    expect(engine.getCellValue('P1')).toEqual(new DetailedCellError(new CellError(ErrorType.REF), '#REF!')) // UNARY MINUS
    expect(engine.getCellValue('Q1')).toEqual(new DetailedCellError(new CellError(ErrorType.REF), '#REF!')) // PERCNAME

  })

  it('error #VALUE! with every combination should be supported by all comparison operators', () => {
    const engine = createEngine([
      ['#VALUE!', '#VALUE!', ...data]
    ])

    expect(engine.getCellValue('C1')).toEqual(new DetailedCellError(new CellError(ErrorType.VALUE), '#VALUE!'))  // EQUAL
    expect(engine.getCellValue('D1')).toEqual(new DetailedCellError(new CellError(ErrorType.VALUE), '#VALUE!')) // GT
    expect(engine.getCellValue('E1')).toEqual(new DetailedCellError(new CellError(ErrorType.VALUE), '#VALUE!')) // LT
    expect(engine.getCellValue('F1')).toEqual(new DetailedCellError(new CellError(ErrorType.VALUE), '#VALUE!')) // GTE
    expect(engine.getCellValue('G1')).toEqual(new DetailedCellError(new CellError(ErrorType.VALUE), '#VALUE!')) // LTE 
    expect(engine.getCellValue('H1')).toEqual(new DetailedCellError(new CellError(ErrorType.VALUE), '#VALUE!')) // NOT EQUAL
    expect(engine.getCellValue('I1')).toEqual(new DetailedCellError(new CellError(ErrorType.VALUE), '#VALUE!')) //ADD
    expect(engine.getCellValue('J1')).toEqual(new DetailedCellError(new CellError(ErrorType.VALUE), '#VALUE!')) //SUB
    expect(engine.getCellValue('K1')).toEqual(new DetailedCellError(new CellError(ErrorType.VALUE), '#VALUE!')) //MULT
    expect(engine.getCellValue('L1')).toEqual(new DetailedCellError(new CellError(ErrorType.VALUE), '#VALUE!')) // DIV
    expect(engine.getCellValue('M1')).toEqual(new DetailedCellError(new CellError(ErrorType.VALUE), '#VALUE!')) // EXP
    expect(engine.getCellValue('N1')).toEqual(new DetailedCellError(new CellError(ErrorType.VALUE), '#VALUE!')) // CONCAT
    expect(engine.getCellValue('O1')).toEqual(new DetailedCellError(new CellError(ErrorType.VALUE), '#VALUE!')) // UNARY PLUS
    expect(engine.getCellValue('P1')).toEqual(new DetailedCellError(new CellError(ErrorType.VALUE), '#VALUE!')) // UNARY MINUS
    expect(engine.getCellValue('Q1')).toEqual(new DetailedCellError(new CellError(ErrorType.VALUE), '#VALUE!')) // PERCENTAGE
  })

  it('error #NUM! with every combination should be supported by all comparison operators', () => {
    const engine = createEngine([
      ['#NUM!', '#NUM!', ...data]
    ])

    expect(engine.getCellValue('C1')).toEqual(new DetailedCellError(new CellError(ErrorType.NUM), '#NUM!'))  // EQUAL
    expect(engine.getCellValue('D1')).toEqual(new DetailedCellError(new CellError(ErrorType.NUM), '#NUM!')) // GT
    expect(engine.getCellValue('E1')).toEqual(new DetailedCellError(new CellError(ErrorType.NUM), '#NUM!')) // LT
    expect(engine.getCellValue('F1')).toEqual(new DetailedCellError(new CellError(ErrorType.NUM), '#NUM!')) // GTE
    expect(engine.getCellValue('G1')).toEqual(new DetailedCellError(new CellError(ErrorType.NUM), '#NUM!')) // LTE 
    expect(engine.getCellValue('H1')).toEqual(new DetailedCellError(new CellError(ErrorType.NUM), '#NUM!')) // NOT EQUAL
    expect(engine.getCellValue('I1')).toEqual(new DetailedCellError(new CellError(ErrorType.NUM), '#NUM!')) //ADD
    expect(engine.getCellValue('J1')).toEqual(new DetailedCellError(new CellError(ErrorType.NUM), '#NUM!')) //SUB
    expect(engine.getCellValue('K1')).toEqual(new DetailedCellError(new CellError(ErrorType.NUM), '#NUM!')) //MULT
    expect(engine.getCellValue('L1')).toEqual(new DetailedCellError(new CellError(ErrorType.NUM), '#NUM!')) // DIV
    expect(engine.getCellValue('M1')).toEqual(new DetailedCellError(new CellError(ErrorType.NUM), '#NUM!')) // EXP
    expect(engine.getCellValue('N1')).toEqual(new DetailedCellError(new CellError(ErrorType.NUM), '#NUM!')) // CONCAT
    expect(engine.getCellValue('O1')).toEqual(new DetailedCellError(new CellError(ErrorType.NUM), '#NUM!')) // UNARY PLUS
    expect(engine.getCellValue('P1')).toEqual(new DetailedCellError(new CellError(ErrorType.NUM), '#NUM!')) // UNARY MINUS
    expect(engine.getCellValue('Q1')).toEqual(new DetailedCellError(new CellError(ErrorType.NUM), '#NUM!')) // PERCENTAGE
  })

  it('error #NUM! with every combination should be supported by all comparison operators', () => {
    const engine = createEngine([
      ['#NUM!', 'string', ...data]
    ])

    expect(engine.getCellValue('C1')).toEqual(new DetailedCellError(new CellError(ErrorType.NUM), '#NUM!'))  // EQUAL
    expect(engine.getCellValue('D1')).toEqual(new DetailedCellError(new CellError(ErrorType.NUM), '#NUM!')) // GT
    expect(engine.getCellValue('E1')).toEqual(new DetailedCellError(new CellError(ErrorType.NUM), '#NUM!')) // LT
    expect(engine.getCellValue('F1')).toEqual(new DetailedCellError(new CellError(ErrorType.NUM), '#NUM!')) // GTE
    expect(engine.getCellValue('G1')).toEqual(new DetailedCellError(new CellError(ErrorType.NUM), '#NUM!')) // LTE 
    expect(engine.getCellValue('H1')).toEqual(new DetailedCellError(new CellError(ErrorType.NUM), '#NUM!')) // NOT EQUAL
    expect(engine.getCellValue('I1')).toEqual(new DetailedCellError(new CellError(ErrorType.NUM), '#NUM!')) //ADD
    expect(engine.getCellValue('J1')).toEqual(new DetailedCellError(new CellError(ErrorType.NUM), '#NUM!')) //SUB
    expect(engine.getCellValue('K1')).toEqual(new DetailedCellError(new CellError(ErrorType.NUM), '#NUM!')) //MULT
    expect(engine.getCellValue('L1')).toEqual(new DetailedCellError(new CellError(ErrorType.NUM), '#NUM!')) // DIV
    expect(engine.getCellValue('M1')).toEqual(new DetailedCellError(new CellError(ErrorType.NUM), '#NUM!')) // EXP
    expect(engine.getCellValue('N1')).toEqual(new DetailedCellError(new CellError(ErrorType.NUM), '#NUM!')) // CONCAT
    expect(engine.getCellValue('O1')).toEqual(new DetailedCellError(new CellError(ErrorType.NUM), '#NUM!')) // UNARY PLUS
    expect(engine.getCellValue('P1')).toEqual(new DetailedCellError(new CellError(ErrorType.NUM), '#NUM!')) // UNARY MINUS
    expect(engine.getCellValue('Q1')).toEqual(new DetailedCellError(new CellError(ErrorType.NUM), '#NUM!')) // PERCENTAGE
  })

  it('string and null should be supported by all comparison operators', () => {
    const engine = createEngine([
      ['Liz', null, ...data]
    ])

    expect(engine.getCellValue('C1')).toEqual(false)  // EQUAL
    expect(engine.getCellValue('D1')).toEqual(true) // GT
    expect(engine.getCellValue('E1')).toEqual(false) // LT
    expect(engine.getCellValue('F1')).toEqual(true) // GTE
    expect(engine.getCellValue('G1')).toEqual(false) // LTE 
    expect(engine.getCellValue('H1')).toEqual(true) // NOT EQUAL
    expect(engine.getCellValue('I1')).toEqual(new DetailedCellError(new CellError(ErrorType.VALUE), '#VALUE!')) //ADD
    expect(engine.getCellValue('J1')).toEqual(new DetailedCellError(new CellError(ErrorType.VALUE), '#VALUE!')) //SUB
    expect(engine.getCellValue('K1')).toEqual(new DetailedCellError(new CellError(ErrorType.VALUE), '#VALUE!')) //MULT
    expect(engine.getCellValue('L1')).toEqual(new DetailedCellError(new CellError(ErrorType.VALUE), '#VALUE!')) // DIV
    expect(engine.getCellValue('M1')).toEqual(new DetailedCellError(new CellError(ErrorType.VALUE), '#VALUE!')) // EXP
    expect(engine.getCellValue('N1')).toEqual('Liz') // CONCAT
    //expect(engine.getCellValue('O1')).toEqual('Liz') // UNARY PLUS pending for #212
    expect(engine.getCellValue('P1')).toEqual(new DetailedCellError(new CellError(ErrorType.VALUE), '#VALUE!')) // UNARY MINUS
    expect(engine.getCellValue('Q1')).toEqual(new DetailedCellError(new CellError(ErrorType.VALUE), '#VALUE!')) // PERCENTAGE
  })

  it('string and TRUE should be supported by all comparison operators', () => {
    const engine = createEngine([
      ['Liz', true, ...data]
    ])

    expect(engine.getCellValue('C1')).toEqual(false)  // EQUAL
    expect(engine.getCellValue('D1')).toEqual(false) // GT
    expect(engine.getCellValue('E1')).toEqual(true) // LT
    expect(engine.getCellValue('F1')).toEqual(false) // GTE
    expect(engine.getCellValue('G1')).toEqual(true) // LTE 
    expect(engine.getCellValue('H1')).toEqual(true) // NOT EQUAL
    expect(engine.getCellValue('I1')).toEqual(new DetailedCellError(new CellError(ErrorType.VALUE), '#VALUE!')) //ADD
    expect(engine.getCellValue('J1')).toEqual(new DetailedCellError(new CellError(ErrorType.VALUE), '#VALUE!')) //SUB
    expect(engine.getCellValue('K1')).toEqual(new DetailedCellError(new CellError(ErrorType.VALUE), '#VALUE!')) //MULT
    expect(engine.getCellValue('L1')).toEqual(new DetailedCellError(new CellError(ErrorType.VALUE), '#VALUE!')) // DIV
    expect(engine.getCellValue('M1')).toEqual(new DetailedCellError(new CellError(ErrorType.VALUE), '#VALUE!')) // EXP
    expect(engine.getCellValue('N1')).toEqual('Liztrue') // CONCAT
  })

  it('string and false should be supported by all comparison operators', () => {
    const engine = createEngine([
      ['Liz', false, ...data]
    ])

    expect(engine.getCellValue('C1')).toEqual(false)  // EQUAL
    expect(engine.getCellValue('D1')).toEqual(false) // GT true
    //expect(engine.getCellValue('E1')).toEqual(true); // LT false
    expect(engine.getCellValue('F1')).toEqual(false) // GTE true
    //expect(engine.getCellValue('G1')).toEqual(true); // LTE false
    expect(engine.getCellValue('H1')).toEqual(true) // NOT EQUAL
    expect(engine.getCellValue('I1')).toEqual(new DetailedCellError(new CellError(ErrorType.VALUE), '#VALUE!')) //ADD
    expect(engine.getCellValue('J1')).toEqual(new DetailedCellError(new CellError(ErrorType.VALUE), '#VALUE!')) //SUB
    expect(engine.getCellValue('K1')).toEqual(new DetailedCellError(new CellError(ErrorType.VALUE), '#VALUE!')) //MULT
    expect(engine.getCellValue('L1')).toEqual(new DetailedCellError(new CellError(ErrorType.VALUE), '#VALUE!')) // DIV
    expect(engine.getCellValue('M1')).toEqual(new DetailedCellError(new CellError(ErrorType.VALUE), '#VALUE!')) // EXP
    expect(engine.getCellValue('N1')).toEqual('Lizfalse') // CONCAT   
  })

  it('string and error #DIV.0! should be supported by all comparison operators', () => {
    const engine = createEngine([
      ['Liz', '#DIV/0!', ...data]
    ])

    expect(engine.getCellValue('C1')).toEqual(new DetailedCellError(new CellError(ErrorType.DIV_BY_ZERO), '#DIV/0!'))  // EQUAL
    expect(engine.getCellValue('D1')).toEqual(new DetailedCellError(new CellError(ErrorType.DIV_BY_ZERO), '#DIV/0!')) // GT
    expect(engine.getCellValue('E1')).toEqual(new DetailedCellError(new CellError(ErrorType.DIV_BY_ZERO), '#DIV/0!')) // LT
    expect(engine.getCellValue('F1')).toEqual(new DetailedCellError(new CellError(ErrorType.DIV_BY_ZERO), '#DIV/0!')) // GTE
    expect(engine.getCellValue('G1')).toEqual(new DetailedCellError(new CellError(ErrorType.DIV_BY_ZERO), '#DIV/0!')) // LTE 
    expect(engine.getCellValue('H1')).toEqual(new DetailedCellError(new CellError(ErrorType.DIV_BY_ZERO), '#DIV/0!')) // NOT EQUAL
    expect(engine.getCellValue('I1')).toEqual(new DetailedCellError(new CellError(ErrorType.DIV_BY_ZERO), '#DIV/0!')) //ADD 
    expect(engine.getCellValue('J1')).toEqual(new DetailedCellError(new CellError(ErrorType.DIV_BY_ZERO), '#DIV/0!')) //SUB 
    expect(engine.getCellValue('K1')).toEqual(new DetailedCellError(new CellError(ErrorType.DIV_BY_ZERO), '#DIV/0!')) //MULT 
    expect(engine.getCellValue('L1')).toEqual(new DetailedCellError(new CellError(ErrorType.DIV_BY_ZERO), '#DIV/0!')) // DIV 
    expect(engine.getCellValue('M1')).toEqual(new DetailedCellError(new CellError(ErrorType.DIV_BY_ZERO), '#DIV/0!')) // EXP 
    expect(engine.getCellValue('N1')).toEqual(new DetailedCellError(new CellError(ErrorType.DIV_BY_ZERO), '#DIV/0!')) // CONCAT
  })

  it('string and other string should be supported by all comparison operators', () => {
    const engine = createEngine([
      ['Liz', 'Bob', ...data]
    ])

    expect(engine.getCellValue('C1')).toEqual(false)  // EQUAL
    expect(engine.getCellValue('D1')).toEqual(true) // GT    
    expect(engine.getCellValue('E1')).toEqual(false) // LT   
    expect(engine.getCellValue('F1')).toEqual(true) // GTE   
    expect(engine.getCellValue('G1')).toEqual(false) // LTE  
    expect(engine.getCellValue('H1')).toEqual(true) // NOT EQUAL
    expect(engine.getCellValue('I1')).toEqual(new DetailedCellError(new CellError(ErrorType.VALUE), '#VALUE!')) // ADD  
    expect(engine.getCellValue('J1')).toEqual(new DetailedCellError(new CellError(ErrorType.VALUE), '#VALUE!')) // SUB  
    expect(engine.getCellValue('K1')).toEqual(new DetailedCellError(new CellError(ErrorType.VALUE), '#VALUE!')) // MULT 
    expect(engine.getCellValue('L1')).toEqual(new DetailedCellError(new CellError(ErrorType.VALUE), '#VALUE!')) // DIV   
    expect(engine.getCellValue('M1')).toEqual(new DetailedCellError(new CellError(ErrorType.VALUE), '#VALUE!')) // EXP  value
    expect(engine.getCellValue('N1')).toEqual('LizBob') // CONCAT      
  })

  it('Str Num and other Str Num be supported by all comparison operators', () => {
    const engine = createEngine([
      [2.7, 3.54, ...data]
    ])

    expect(engine.getCellValue('C1')).toEqual(false)  // EQUAL
    expect(engine.getCellValue('D1')).toEqual(false) // GT    
    expect(engine.getCellValue('E1')).toEqual(true) // LT   
    expect(engine.getCellValue('F1')).toEqual(false) // GTE   
    expect(engine.getCellValue('G1')).toEqual(true) // LTE  
    expect(engine.getCellValue('H1')).toEqual(true) // NOT EQUAL
    expect(engine.getCellValue('I1')).toEqual(6.24) // ADD 
    expect(engine.getCellValue('J1')).toEqual(-0.84) // SUB   
    expect(engine.getCellValue('K1')).toEqual(9.558) // MULT   
    expect(engine.getCellValue('L1')).toEqual(0.76271186440678) // DIV   
    expect(engine.getCellValue('M1')).toEqual(33.65330527762482) // EXP 
    expect(engine.getCellValue('N1')).toEqual('2.73.54') // CONCAT    
    expect(engine.getCellValue('O1')).toEqual(2.7) // UNARY PLUS   
    expect(engine.getCellValue('P1')).toEqual(-2.7) // UNARY MINUS  
    expect(engine.getCellValue('Q1')).toEqual(0.027) // PERCENTAGE  
  })

  it('Integer and other Integer be supported by all comparison operators', () => {
    const engine = createEngine([
      ['02/01/1999', '02/02/1999', ...data]
    ])

    expect(engine.getCellValue('C1')).toEqual(false)  // EQUAL
    expect(engine.getCellValue('D1')).toEqual(false) // GT    
    expect(engine.getCellValue('E1')).toEqual(true) // LT   
    expect(engine.getCellValue('F1')).toEqual(false) // GTE   
    expect(engine.getCellValue('G1')).toEqual(true) // LTE  
    expect(engine.getCellValue('H1')).toEqual(true) // NOT EQUAL 
    expect(engine.getCellValue('I1')).toEqual(72385) // ADD  
    expect(engine.getCellValue('J1')).toEqual(-1) // SUB   
    expect(engine.getCellValue('K1')).toEqual(1309897056) // MULT  
    expect(engine.getCellValue('L1')).toEqual(0.99997237034786) // DIV  
    expect(engine.getCellValue('M1')).toEqual(new DetailedCellError(new CellError(ErrorType.NUM), '#NUM!')) //EXP
    expect(engine.getCellValue('N1')).toEqual('3619236193') // CONCAT    
    expect(engine.getCellValue('O1')).toEqual(36192) // UNARY PLUS   
    expect(engine.getCellValue('P1')).toEqual(-36192) // UNARY MINUS  
    expect(engine.getCellValue('Q1')).toEqual(361.92) // PERCENTAGE  
  })

  it('Float and other float be supported by all comparison operators', () => {
    const engine = createEngine([
      [3.1415, 36193.2, ...data]
    ])

    expect(engine.getCellValue('C1')).toEqual(false)  // EQUAL
    expect(engine.getCellValue('D1')).toEqual(false) // GT    
    expect(engine.getCellValue('E1')).toEqual(true) // LT   
    expect(engine.getCellValue('F1')).toEqual(false) // GTE   
    expect(engine.getCellValue('G1')).toEqual(true) // LTE  
    expect(engine.getCellValue('H1')).toEqual(true) // NOT EQUAL 
    expect(engine.getCellValue('I1')).toEqual(36196.341499999995) // ADD  
    expect(engine.getCellValue('J1')).toEqual(-36190.0585) // SUB   
    expect(engine.getCellValue('K1')).toEqual(113700.9378) // MULT  
    expect(engine.getCellValue('L1')).toEqual(0.00008679807257) // DIV  
    expect(engine.getCellValue('M1')).toEqual(new DetailedCellError(new CellError(ErrorType.NUM), '#NUM!')) //EXP
    expect(engine.getCellValue('N1')).toEqual('3.141536193.2') // CONCAT    
    expect(engine.getCellValue('O1')).toEqual(3.1415) // UNARY PLUS   
    expect(engine.getCellValue('P1')).toEqual(-3.1415) // UNARY MINUS  
    expect(engine.getCellValue('Q1')).toEqual(0.031415) // PERCENTAGE  
  })


  it('Zero with TRUE should be supported by all comparison operators', () => {
    const engine = createEngine([
      [0, true, ...data]
    ])

    expect(engine.getCellValue('C1')).toEqual(false)  // EQUAL
    expect(engine.getCellValue('D1')).toEqual(false) // GT    
    expect(engine.getCellValue('E1')).toEqual(true) // LT   
    expect(engine.getCellValue('F1')).toEqual(false) // GTE   
    expect(engine.getCellValue('G1')).toEqual(true) // LTE  
    expect(engine.getCellValue('H1')).toEqual(true) // NOT EQUAL 
    expect(engine.getCellValue('I1')).toEqual(1) // ADD value
    expect(engine.getCellValue('J1')).toEqual(-1) // SUB   value
    expect(engine.getCellValue('K1')).toEqual(0) // MULT  value 
    expect(engine.getCellValue('L1')).toEqual(0) // DIV  value
    expect(engine.getCellValue('M1')).toEqual(0) // EXP  
    expect(engine.getCellValue('N1')).toEqual('0true') // CONCAT     
  })

  it('Zero with FALSE should be supported by all comparison operators', () => {
    const engine = createEngine([
      [0, false, ...data]
    ])

    expect(engine.getCellValue('C1')).toEqual(false)  // EQUAL
    expect(engine.getCellValue('D1')).toEqual(false) // GT    
    expect(engine.getCellValue('E1')).toEqual(true) // LT   
    expect(engine.getCellValue('F1')).toEqual(false) // GTE   
    expect(engine.getCellValue('G1')).toEqual(true) // LTE  
    expect(engine.getCellValue('H1')).toEqual(true) // NOT EQUAL 
    expect(engine.getCellValue('I1')).toEqual(0) // ADD value
    expect(engine.getCellValue('J1')).toEqual(0) // SUB   value
    expect(engine.getCellValue('K1')).toEqual(0) // MULT  value
    expect(engine.getCellValue('L1')).toEqual(new DetailedCellError(new CellError(ErrorType.DIV_BY_ZERO), '#DIV/0!')) // DIV value  
    //expect(engine.getCellValue('M1')).toEqual(new DetailedCellError(new CellError(ErrorType.NUM), '#NUM!')) // EXP  
    expect(engine.getCellValue('N1')).toEqual('0false') // CONCAT     
  })

  it('Zero with string should be supported by all comparison operators', () => {
    const engine = createEngine([
      [0, 'Liz', ...data]
    ])

    expect(engine.getCellValue('C1')).toEqual(false)  // EQUAL
    expect(engine.getCellValue('D1')).toEqual(false) // GT    
    expect(engine.getCellValue('E1')).toEqual(true) // LT   
    expect(engine.getCellValue('F1')).toEqual(false) // GTE   
    expect(engine.getCellValue('G1')).toEqual(true) // LTE  
    expect(engine.getCellValue('H1')).toEqual(true) // NOT EQUAL 
    expect(engine.getCellValue('I1')).toEqual(new DetailedCellError(new CellError(ErrorType.VALUE), '#VALUE!')) // ADD 
    expect(engine.getCellValue('J1')).toEqual(new DetailedCellError(new CellError(ErrorType.VALUE), '#VALUE!')) // SUB   
    expect(engine.getCellValue('K1')).toEqual(new DetailedCellError(new CellError(ErrorType.VALUE), '#VALUE!')) // MULT  
    expect(engine.getCellValue('L1')).toEqual(new DetailedCellError(new CellError(ErrorType.VALUE), '#VALUE!')) // DIV  
    expect(engine.getCellValue('M1')).toEqual(new DetailedCellError(new CellError(ErrorType.VALUE), '#VALUE!')) // EXP  
    expect(engine.getCellValue('N1')).toEqual('0Liz') // CONCAT     
  })


  it('Zero with Number should be supported by all comparison operators', () => {
    const engine = createEngine([
      [0, 2.7, ...data]
    ])

    expect(engine.getCellValue('C1')).toEqual(false)  // EQUAL
    expect(engine.getCellValue('D1')).toEqual(false) // GT    
    expect(engine.getCellValue('E1')).toEqual(true) // LT   
    expect(engine.getCellValue('F1')).toEqual(false) // GTE   
    expect(engine.getCellValue('G1')).toEqual(true) // LTE  
    expect(engine.getCellValue('H1')).toEqual(true) // NOT EQUAL 
    expect(engine.getCellValue('I1')).toEqual(2.7) // ADD 
    expect(engine.getCellValue('J1')).toEqual(-2.7) // SUB   
    expect(engine.getCellValue('K1')).toEqual(0) // MULT  
    //expect(engine.getCellValue('L1')).toEqual(new DetailedCellError(new CellError(ErrorType.VALUE), '#VALUE!')) // DIV  0
    expect(engine.getCellValue('M1')).toEqual(0) // EXP  
    expect(engine.getCellValue('N1')).toEqual('02.7') // CONCAT     
  })

  it('Zero with Integer in date format should be supported by all comparison operators', () => {
    const engine = createEngine([
      [0, '02/01/1999', ...data]
    ])

    expect(engine.getCellValue('C1')).toEqual(false)  // EQUAL
    expect(engine.getCellValue('D1')).toEqual(false) // GT    
    expect(engine.getCellValue('E1')).toEqual(true) // LT   
    expect(engine.getCellValue('F1')).toEqual(false) // GTE   
    expect(engine.getCellValue('G1')).toEqual(true) // LTE  
    expect(engine.getCellValue('H1')).toEqual(true) // NOT EQUAL 
    expect(engine.getCellValue('I1')).toEqual(36192) // ADD 
    expect(engine.getCellValue('J1')).toEqual(-36192) // SUB   
    expect(engine.getCellValue('K1')).toEqual(0) // MULT  
    expect(engine.getCellValue('L1')).toEqual(0) // DIV  0
    expect(engine.getCellValue('M1')).toEqual(0) // EXP  
    expect(engine.getCellValue('N1')).toEqual('036192') // CONCAT     
  })

})


