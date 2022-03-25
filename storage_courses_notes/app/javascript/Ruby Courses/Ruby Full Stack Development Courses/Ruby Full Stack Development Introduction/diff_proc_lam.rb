# lambda does not return from the method, proc does 

def proc_lam_test 
	my_lam = lambda {return}
	my_lam.call 
	puts "\nstill inside the return_test method..."
	my_proc = Proc.new {return}
	my_proc.call
	puts "you will not see this message because the proc returned!"
end

proc_lam_test