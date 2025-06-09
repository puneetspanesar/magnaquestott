import { 
  users, 
  demoRequests, 
  newsletterSubscriptions,
  type User, 
  type InsertUser,
  type DemoRequest,
  type InsertDemoRequest,
  type NewsletterSubscription,
  type InsertNewsletterSubscription
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createDemoRequest(request: InsertDemoRequest): Promise<DemoRequest>;
  getDemoRequests(): Promise<DemoRequest[]>;
  createNewsletterSubscription(subscription: InsertNewsletterSubscription): Promise<NewsletterSubscription>;
  getNewsletterSubscriptions(): Promise<NewsletterSubscription[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private demoRequests: Map<number, DemoRequest>;
  private newsletterSubscriptions: Map<number, NewsletterSubscription>;
  private currentUserId: number;
  private currentDemoRequestId: number;
  private currentNewsletterSubscriptionId: number;

  constructor() {
    this.users = new Map();
    this.demoRequests = new Map();
    this.newsletterSubscriptions = new Map();
    this.currentUserId = 1;
    this.currentDemoRequestId = 1;
    this.currentNewsletterSubscriptionId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createDemoRequest(insertDemoRequest: InsertDemoRequest): Promise<DemoRequest> {
    const id = this.currentDemoRequestId++;
    const demoRequest: DemoRequest = { 
      ...insertDemoRequest, 
      id, 
      createdAt: new Date() 
    };
    this.demoRequests.set(id, demoRequest);
    return demoRequest;
  }

  async getDemoRequests(): Promise<DemoRequest[]> {
    return Array.from(this.demoRequests.values());
  }

  async createNewsletterSubscription(insertNewsletterSubscription: InsertNewsletterSubscription): Promise<NewsletterSubscription> {
    // Check if email already exists
    const existingSubscription = Array.from(this.newsletterSubscriptions.values()).find(
      (sub) => sub.email === insertNewsletterSubscription.email
    );
    
    if (existingSubscription) {
      throw new Error("Email already subscribed");
    }

    const id = this.currentNewsletterSubscriptionId++;
    const subscription: NewsletterSubscription = { 
      ...insertNewsletterSubscription, 
      id, 
      createdAt: new Date() 
    };
    this.newsletterSubscriptions.set(id, subscription);
    return subscription;
  }

  async getNewsletterSubscriptions(): Promise<NewsletterSubscription[]> {
    return Array.from(this.newsletterSubscriptions.values());
  }
}

export const storage = new MemStorage();
