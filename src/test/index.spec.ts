import { assert } from 'chai';
import { CodeLocation, CodeRange } from '..';
describe('node_helper', () => {
  it('CodeLocation', () => {
    const codeLocation = new CodeLocation(1, 2);
    assert.equal(codeLocation.x, 1);
    assert.equal(codeLocation.y, 2);
  });
  it('CodeRange', () => {
    const start = new CodeLocation(1, 2);
    const end = new CodeLocation(5, 6);
    const codeRange = new CodeRange(start, end);
    assert.equal(codeRange.begin.x, 1);
    assert.equal(codeRange.end.y, 6);
  });
});
