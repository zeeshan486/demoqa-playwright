export function generateRandomName(): string {
    const names = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'];
    return names[Math.floor(Math.random() * names.length)];
  }
  
  export function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  