function SubmitButton({handleSubmit}) {
  return (
    <button type="button" className="btn btn-primary submit-button" onClick= {handleSubmit}>
      Submit
    </button>
  );
}

export default SubmitButton;
