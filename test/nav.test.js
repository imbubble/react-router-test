import Navigation from '../src/nav.jsx';

describe('The nav', () => {
    var nav;

    beforeEach(() => {
        reset();
    });

    describe('with shallow rendering', () => {
        it('should not throw', () => {
            expect(() => {
                renderShallow(Navigation, { id: 4 });
            }).to.not.throw;
        });

        it('should still not have router in context though', () => {
            nav = renderShallow(Navigation, { id: 4 });
            expect(nav._context.router).to.not.be.ok;
        });
    });

    describe('with DOM rendering', () => {
        it('should not throw without webpack', () => {
            nav = render(Navigation, { id: 4 });
            TestUtils.findRenderedDOMComponentWithTag(nav, 'a');
        });    
    });
});