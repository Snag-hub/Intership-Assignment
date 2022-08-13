const myForm = document.getElementById('myForm');
const StorageSource = document.getElementById('StorageSource');
const pipelineName = document.getElementById('pipelineName');
const productName = document.getElementById('productName');
const BucketName = document.getElementById('BucketName');
const file = document.getElementById('file');
const credentails = document.getElementById('credentails');
const runEveryMin = document.getElementById('runEveryMin');

myForm.addEventListener('submit', e=>{
  e.preventDefault();

  validateInput();
});

const setError = (element, message) =>{
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');
  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
};

const setSuccess = element =>{
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');

};

const setSpecialCharacters = element =>{

}

const validateInput = () => {
  const StorageSourceValue = StorageSource.value.trim();
  const piplelineValue = pipelineName.value.trim();
  const productValue = productName.value.trim();
  const bucketValue = BucketName.value.trim();
  const fileValue = file.value.trim();
  const credentailsValue = credentails.value.trim();
  const runEveryMinValue = runEveryMin.value.trim();

  if(StorageSourceValue === ''){
    setError(StorageSource, 'Storage Source cannot be empty');
  }else{
    setSuccess(StorageSource);
  }

  if(piplelineValue === ''){
    setError(pipelineName, 'Pipeline Name cannot be blank');
  }else if(piplelineValue.length < 5){
    setError(pipelineName, 'Pipeline Name must be at least 5 characters');
  }else {
    setSuccess(pipelineName);
  }

  if(productValue === ''){
    setError(productName, 'Product Name cannot be blank');
  }else if(productValue.length < 5){
    setError(productName, 'Product Name must be at least 5 characters');
  }else{
    setSuccess(productName);
  }

  if(bucketValue === ''){
    setError(BucketName, 'Bucket Name cannot be blank');
  }else if(bucketValue.length < 5){
    setError(BucketName, 'Bucket Name must be at least 5 characters');
  }else{
    setSuccess(BucketName);
  }

  if(fileValue === ''){
    setError(file, 'File cannot be blank');
  }else{
    setSuccess(file);
  }

  if(credentailsValue === ''){
    setError(credentails, 'Credentails cannot be blank');
  }else if(credentailsValue.length < 5){
    setError(credentails, 'Credentails must be at least 5 characters');
  }else{
    setSuccess(credentails);
  }

  if(runEveryMinValue === ''){
    setError(runEveryMin, 'Run Every Min cannot be blank');
  }else{
    setSuccess(runEveryMin);
  }
};