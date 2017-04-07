class Bike(object):
	def __init__(self, price, max_speed, miles=0):
		self.price = price
		self.max_speed = max_speed
		self.miles = miles

	def displayInfo(self):
		print self.price
		print self.max_speed
		print self.miles
	
	def ride(self):
		print "riding"
		self.miles += 10
		return self
		print self.miles

	def reverse(self):
	 	print "reversing"
	 	self.miles -= 5
	 	return self
	 	print self.miles

bike1 = Bike(200, "25mph", 39)
bike2 = Bike(390, "20mph", 40)
bike3 = Bike(19, "4mph", 9)

print bike1 
bike1.ride().ride().ride().reverse().displayInfo()

for i in range(0,10):
	bike1.ride()
	