class Twenty::Connection < Twenty::Model
  self.table_name = 'connections'

  ##
  # Validations
  validates :name, presence: true
  validates :path, presence: true

  ##
  # Associations
  has_many :issues, class_name: 'Twenty::Issue'

  def to_json(options = {})
    {id:, name:, path:}.to_json(options)
  end
end
