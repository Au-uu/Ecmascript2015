import formCheck from '../common/formCheck.js'
export default () => {
  const btn = document.getElementById('submit');
  const input = document.getElementById('input');
  const check = formCheck(document.getElementById('form'));
  btn.onclick = (e) => {
    console.log(e);
    e.preventDefault();
    check();
    alert(111);
  }

  input.oninput = () => {
    check();
  }
}