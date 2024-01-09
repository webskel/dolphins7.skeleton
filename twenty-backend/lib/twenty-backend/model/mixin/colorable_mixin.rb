module Twenty::ColorableMixin
  extend self

  COLORS =  [
    '#222222', '#333333', '#444444', '#555555', '#666666',
    '#777777', '#888888', '#999999', '#AAAAAA', '#BBBBBB',
    '#CCCCCC', '#DDDDDD', '#990000', '#009900', '#000099',
    '#990099', '#009999', '#999900', '#990099', '#999999'
  ]

  def self.included(klass)
    klass.before_validation :set_random_color, on: :create
  end

  def random_color
    COLORS.sample
  end

  private

  def set_random_color
    self.color = random_color
  end
end
