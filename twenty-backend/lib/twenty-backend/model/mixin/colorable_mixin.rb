module Twenty::ColorableMixin
  extend self

  COLORS = [
    '#222222', '#333333', '#444444', '#555555', '#666666',
    '#777777', '#888888', '#999999', '#AA2222', '#22AA22',
    '#2222AA', '#AA22AA', '#CC9900', '#0099CC', '#9900CC',
    '#FF9900', '#00CC99', '#99CC00', '#CC0099', '#990000',
    '#112233', '#445566', '#778899', '#AA4455', '#5544AA',
    '#88AA44', '#AA88AA', '#CCBB00', '#1155CC', '#9900BB',
    '#DD6600', '#00BBCC', '#CC0099', '#BB3300', '#006688',
    '#993366', '#2200AA', '#557788', '#998877', '#BB4400'
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
