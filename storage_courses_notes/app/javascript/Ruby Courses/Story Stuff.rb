class User
	attr_accessor :age, :first_name, :last_name, :email, :address

	def initalize(age: nil, first_name: nil, last_name: nil, email: nil, address: nil)
		@age = age.to_i
		@first_name = first_name.to_s
		@last_name = last_name.to_s
		@email = email.to_s
		@address = address.to_s
	 end 
	end

	def input
		age_input = @age.gets
		name_input = @first_name.gets
		email_inpute = @email.gets
		adderss_input = @address.gets
	end

	def greeting 
		puts "please enter your name!"
		greet = "hello" + name_input + "how are you?"
		puts "how old are you?"
		age_greet = "oh you're " + age_input
		return age_greet
		puts "where abouts are you from?"
		home_state = "oh I love" + adderss_input
		return home_state
	end
end

User.greeting




