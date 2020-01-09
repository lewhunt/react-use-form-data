# React-Use-Form-Data Custom Hook
This custom React Hook lets you easily populate and update form input data within function components via local state.

Currently it's configured to handle the following input field types: number, text, button and checkbox.

It can be useful when prototyping, for example when using a simple editor to control sub-component props.

[Basic Demo](https://lewhunt.github.io/react-use-form-data/)

## Install
### npm package (recommended)
```bash
npm i react-use-form-data
```

### CDN script (for prototyping only)
```js
<script type="text/javascript" src="https://unpkg.com/react-use-form-data/umd/react-use-form-data.js"></script>
```

## Usage
### Node.js development setup (recommended)
1. Import the installed Hook
2. Call the Hook with initial form data as key name-value pairs
3. Configure your form fields to read in formData and update via events to updateFormData()

### Sample code snippet
```js
//1. IMPORT THE HOOK 
import React from 'react'
import useFormData from 'react-use-form-data'

export default function Demo() {

    // 2. CALL THE HOOK WITH INITIAL DATA AS NAME-VALUE PAIRS
    const [formData, updateFormData] = useFormData({ 
        numberField: 101,
        textField: 'hello world',
        checkboxField: true
    });
 
    // 3. FORM FIELDS THEN READ IN STATE DATA FROM formData AND UPDATE DATA VIA updateFormData
    return (
        <div>
            <input type='number' 
                value={formData.numberField} 
                onChange={(evt) => updateFormData('numberField', evt)}
                data-testid='numberField' />

            <input type='text' 
                value={formData.textField} 
                onChange={(evt) => updateFormData('textField', evt)}
                data-testid='textField' />

            <input type='checkbox' 
                checked={formData.checkboxField} 
                onChange={(evt) => updateFormData('checkboxField', evt)}
                data-testid='checkboxField'/>
        </div>
    )
}
```

### Usage via browser script (for prototyping only)
See sample file in [demo/umd-example.html](https://github.com/lewhunt/react-use-form-data/blob/master/demo/umd-example.html)

## Optional parameter to use initial data in placeholders
The demo shows how calling useFormData with a second parameter (set to true) then returns isInitialDataForPlaceholder. 

Input field placeholder values can then be populated with initialFormData if so desired.

```js
  const [formData, updateFormData, initialFormData, isInitialDataForPlaceholder] = useFormData({
      numberField: 101,
      textField: 'hello world',
      checkboxField: true
      },
      // an optional true parameter returns isInitialDataForPlaceholder
      true );

    return (
        <input type='text' 
            value={formData.textField} 
            onChange={(evt) => updateFormData('textField', evt)} 
            placeholder={isInitialDataForPlaceholder && initialFormData.textField} 
            data-testid='textField' />
  )
```

## Examples in use
TODO

## License
MIT © [Lewis Hunt](https://github.com/lewhunt)