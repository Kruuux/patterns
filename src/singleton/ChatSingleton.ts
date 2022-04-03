export class ChatSingleton {
  private static chat: ChatSingleton;
  private launchedAt: Date;

  private constructor() {
    this.launchedAt = new Date();
  }

  public static getInstance(): ChatSingleton {
    if (!this.chat) this.chat = new ChatSingleton();
    return this.chat;
  }

  public getLaunchedAt(): Date {
    return this.launchedAt;
  }
}
