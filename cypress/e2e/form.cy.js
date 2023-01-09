describe('Form App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:1234');
    })

    const usernameInput = () => cy.get('input[name=username]');
    const emailInput = () => cy.get('input[name=email]');
    const roleSelection = () => cy.get('select');
    const marriageStatus = () => cy.get(`[type='radio']`);
    const codingCheckbox = () => cy.get('input[name=coding]');
    const submitBtn = () => cy.get(`button[id='submitBtn']`);

    it('the proper elements are showing', () => {
        usernameInput().should('exist');
        emailInput().should('exist');
        roleSelection().should('exist');
        codingCheckbox(). should('exist');
        submitBtn().should('exist');
    })

    describe('Filling out the inputs', () => {
        it('can type in the inputs', () => {
            usernameInput()
                .should('have.value', '')
                .type('VanessaSN')
                .should('have.value', 'VanessaSN');

            emailInput()
            .should('have.value', '')
            .type('vanessa@sn.com')
            .should('have.value', 'vanessa@sn.com');
        })
    })

    describe('Can select a role, civil status, and check checkboxes', () => {
        it('can select a role', () => {
            roleSelection()
                .select('student')
                .invoke('val')
                .should('equal', 'student');
        })

        it('can select a civil status', () => {
            marriageStatus().check('married');
        })

        it('can check the coding checkbox', () => {
            codingCheckbox().check();
        })
    })

    describe('Can submit the form', () => {
        it('can submit', () => {
            submitBtn().click();
        })
    })









})