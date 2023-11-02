const baseUrl = "https://fe-task-api.mainstack.io"
export const fetchUserData = async ()=>{
    const response = await fetch(`${baseUrl}/user`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}
export const fetchWallet = async ()=>{
    const response = await fetch(`${baseUrl}/wallet`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}
export const fetchTransaction = async ()=>{
    const response = await fetch(`${baseUrl}/transactions`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}