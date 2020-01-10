//1. IMPORT THE HOOK 
import React from 'react';
import useFormData from '../../src'

export default function Demo() {

  // 2. CALL THE HOOK WITH INITIAL DATA AS NAME-VALUE PAIRS
  const [formData, updateFormData, initialFormData, isInitialDataForPlaceholder] = useFormData({ 
    numberField: 101,
    textField: 'hello world',
    buttonField: false,
    checkboxField: true
  }, true);
 
  // 3. FORM FIELDS THEN READ IN STATE DATA FROM formData AND UPDATE DATA VIA updateFormData
  return (
    <div>
      <h1>react-use-form-data Custom Hook</h1>
      <p>This custom React Hook lets you easily populate and update form input data state within functional components.</p> 
      <p>It can be useful when prototyping, for example when using a simple editor to control sub-component props.</p> 
      <h2>Demo</h2>
      <div>
        <label>number :&nbsp; 
          <input type='number' 
            value={formData.numberField} 
            onChange={(evt) => updateFormData('numberField', evt)} 
            data-testid='numberField' /></label>
        <br/><br/>
        <label>text :&nbsp;
          <input type='text' 
            value={formData.textField} 
            onChange={(evt) => updateFormData('textField', evt)} 
            placeholder={isInitialDataForPlaceholder && initialFormData.textField} 
            data-testid='textField' /></label>
        <br/><br/>
        <label>button :&nbsp;
          <input type='button'
            value='toggle'
            style={{ outline:0, background: formData.buttonField ? 'silver' : 'white'}}
            onClick={(evt) => updateFormData('buttonField', evt)} 
            data-testid='buttonField'/></label>
        <br/><br/>
        <label>checkbox :&nbsp; 
          <input type='checkbox' 
            checked={formData.checkboxField} 
            onChange={(evt) => updateFormData('checkboxField', evt)} 
            data-testid='checkboxField'/></label>
        <br/>
      </div>
      <p>{JSON.stringify(formData)}</p>
      <h2>Usage</h2>
      <ol>
        <li>Import the installed Hook</li>
        <li>Call the Hook with initial form data as key name-value pairs</li>
        <li>Configure your form fields to read in formData and update via events to updateFormData()</li>
      </ol>
      <h3>Sample</h3>
      <pre><code>{htmlScriptSnippet}</code></pre>
    </div>
  )
}

const htmlScriptSnippet = `//1. IMPORT THE INSTALLED HOOK  
import React from 'react'    
import useFormData from 'react-use-form-data'

export default function Demo() {

    // 2. CALL THE HOOK WITH INITIAL DATA AS NAME-VALUE PAIRS
    const [formData, updateFormData] = useFormData({ 
        numberField: 101,
        textField: 'hello world',
        checkboxField: true
    });
 
    // 3. CONFIGURE YOUR FORM FIELDS TO READ IN formData AND UPDATE VIA EVENTS TO updateFormData()
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
}`