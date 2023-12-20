class Twenty::Issue < Twenty::Model
  ##
  # Validations
  validates :title, presence: true
  validates :content, presence: true
  validates :state, inclusion: {in: %w[open closed]}
  validates :connection, presence: true

  ##
  # Associations
  belongs_to :connection, class_name: 'Twenty::Connection'
end
