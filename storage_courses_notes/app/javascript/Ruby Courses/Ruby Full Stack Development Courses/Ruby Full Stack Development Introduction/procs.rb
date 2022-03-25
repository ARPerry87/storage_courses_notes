my_proc = Proc.new {|x| puts "The argument value sent to proc is #{{x}}"}
puts"\nA proc object returns: '#{my_proc.class}' when class method is called!"
my_proc.call(100)
#Proc objects are objects are self contained code blocks that can be created
#and passed around as method arguments and can be executed using the call method, 
#Blocks cannot. Procs are objects, blocks are not. Have to create using Proc.new

#can also use the alias proc, as it's an alias for Proc.new

my_proc = proc { |x| puts "THe argument sent to proc is #{x}\n\n"}
my_proc.call(200)