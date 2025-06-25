class StraShip{
    public String name;
    public String type;
    public double size;

    StraShip(String name,String type,double size){
        this.name = name;
        this.type = type;
        this.size = size;
    }

    public String getName(){
        return name;
    }

    public String getType(){
        return type;
    }

    public double getSize(){
        return size;
    }
}

class Cruiser extends StraShip{
    private int troopCapacity;
    private int occupiedCapacity = 0;

    public Cruiser(String name, String type, double size, int troopCapacity) {
        super(name, type, size);
        this.troopCapacity = troopCapacity;
    }

    public void load(int quantity) {
        if(occupiedCapacity + quantity <= troopCapacity){
            occupiedCapacity += quantity;
            System.out.println("Free space : " + (troopCapacity - occupiedCapacity));
        } else {
            System.out.println("No room left for loading");
        }
    }

    public void unload(int quantity) {
        if(occupiedCapacity - quantity >= 0) {
            occupiedCapacity -= quantity;
            System.out.println("Troops left : " + (troopCapacity - occupiedCapacity));
        } else {
            System.out.println("No more troops");
        }
    }

    public int getTroopCapacity() {
        return troopCapacity;
    }

    public int getOccupiedCapacity() {
        return occupiedCapacity;
    }

}

class Interceptor extends StraShip{
    public int guns;
    private int maxShotPerGun = 1;
    private int currentShotCount = 0;

    public Interceptor(String name, String type, double size, int guns) {
        super(name, type, size);
        this.guns = guns;
    }

    public void fire() {
        if(currentShotCount < maxShotPerGun * guns) {
            currentShotCount++;
            System.out.println("Fire ! ");
        } else {
            System.out.println("Reload before shoot");
        }
    }

    public void reload() {
        currentShotCount = 0;
        System.out.println("Reload");
    }

    public int getCurrentShotCount() {
        return currentShotCount;
    }
}

public class Main {
    public static void main(String[] args) {
        Cruiser acclamator1 = new Cruiser("Acclmator 1", "cruiser", 752, 700);
        Cruiser acclamator2 = new Cruiser("Acclmator 2", "cruiser", 752, 700);
        Interceptor xWing = new Interceptor("x-wing", "interceptor", 12.5, 2);

        System.out.println("X-wing : " + xWing.getName() + xWing.getType() + xWing.getSize());

        System.out.println(acclamator1.getTroopCapacity());
        acclamator1.load(300);
        acclamator1.load(300);
        acclamator1.load(300);
        acclamator1.unload(200);
        acclamator1.load(300);

        System.out.println(xWing.getCurrentShotCount());
        xWing.fire();
        xWing.fire();
        xWing.fire();
        xWing.reload();
        xWing.fire();

    }
}
