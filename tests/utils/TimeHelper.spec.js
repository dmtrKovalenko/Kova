 import {formatSS, formatMS} from 'utils/TimeHelper'
 
 describe('(TimeHelper)', () => {
    describe('(formatSS)', () => {
        it('Should format seconds to mm:ss properly.', () => {
            const seconds = 222;
            const formattedTime = '03:42';

            expect(formatSS(seconds)).to.deep.equal(formattedTime);
        })
    });

    describe('(formatMS)', () => {
        it('Should format seconds to mm:ss properly.', () => {
            const seconds = 222843;
            const formattedTime = '03:42';

            expect(formatMS(seconds)).to.deep.equal(formattedTime);
        })
    })
 });