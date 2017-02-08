import React from 'react';
import Validation from 'react-validation';
console.log("validations");
// Use Object.assign or any similar API to merge a rules 
Object.assign(Validation.rules, {
    // Key name maps the rule 
    required: {
        rule: (value) => {
            return value.trim();
        },
        hint: value => {
            return <span className='form-error is-visible'>Please enter value.</span>
        }
    },
    email: {
        // Function to validate value 
        rule: (value, component, form) => {
            return value.trim();
        },
        // Function to return hint 
        // You may use current value to inject it in some way to the hint 
        hint: value => {
            return <span className='form-error is-visible pull-right'>Please enter title</span>
        }
    },
    password: {
        rule: (value, components) => {
            const password = components.password.state;
            const passwordConfirm = components.passwordConfirm.state;
            const isBothUsed = password
                && passwordConfirm
                && password.isUsed
                && passwordConfirm.isUsed;
            const isBothChanged = isBothUsed && password.isChanged && passwordConfirm.isChanged;
            if (!isBothUsed || !isBothChanged) {
                return true;
            }
            return password.value === passwordConfirm.value;
        },
        hint: () => <span className="form-error is-visible">Passwords should be equal.</span>
    }
});