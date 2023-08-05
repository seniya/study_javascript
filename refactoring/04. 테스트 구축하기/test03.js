import { Province, sampleProvinceData } from './index.js';
import assert from 'assert';
import {expect} from 'chai';


describe('province', function () {
  it('shortfall', function () {    
    const asia = new Province(sampleProvinceData());
    // assert.equal(asia.shortfall, 5);
    expect(asia.shortfall).equal(5);    
  });
});


/*expect
** expect
describe('province', function () {
  it('shortfall', function () {
    const asia = new Province(sampleProvinceData());
    expect.equal(asia.shortfall, 5);
  });
});
*/