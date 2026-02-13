import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Navigation />
      <main className="flex-1 bg-background p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold text-foreground mb-3">
          Hello, World!
        </h1>
        <p className="text-base text-muted-foreground">
          Welcome to your CompanyCam application. The navigation is ready to use.
        </p>
      </main>
    </div>
  );
};

export default Index;
