class goofing {
    public static void main(String[] args){
        int rand = (int) (Math.random() * 101);
        System.out.println(rand );
        if (rand == 56){
            System.out.println("You lose ");
        } else if (5 > Math.abs(rand - 56)){
            System.out.println("Got a bit close there bud");
        }else {
            System.out.println("you dont lose");
        }
    }
}