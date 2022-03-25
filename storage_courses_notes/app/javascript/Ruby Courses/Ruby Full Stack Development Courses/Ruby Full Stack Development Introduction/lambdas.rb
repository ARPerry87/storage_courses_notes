my_lam = lambda{|x| puts "the argument value sent to lambda is #{x}"}
puts "\nlambda is a proc object, so 'my_lam.class' returns: '#{my_lam.class}'"
my_lam.call(100)

#using the -> constructor 

my_lam = ->(x) {puts "The argument value sent to lambda is #{x}\n\n"}
my_lam.call(200)