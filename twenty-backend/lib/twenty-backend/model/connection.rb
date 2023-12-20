class Twenty::Connection < Twenty::Model
  ##
  # Validations
  validates :name, presence: true
  validates :path, presence: true

  ##
  # Associations
  has_many :issues, class_name: 'Twenty::Issue'
end
