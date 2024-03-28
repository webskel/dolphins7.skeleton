# frozen_string_literal: true

class Twenty::Task < Sequel::Model
  include Twenty::Model

  plugin(:enum)
  STATUS_MAP  = {backlog: 0, ready: 1, in_progress: 2, complete: 3}
  STATUS_KEYS = STATUS_MAP.keys
  enum :status, STATUS_MAP

  def self.by_status(status)
    if STATUS_KEYS.any? { _1.to_s == status.to_s }
      public_send(status)
    else
      where(id: nil)
    end
  end

  validates_presence_of :title
  validates_presence_of :content
  validates_presence_of :project
  validates_inclusion_of :status, in: [STATUS_KEYS, *STATUS_KEYS.map(&:to_s)]
  many_to_one :project, class_name: "Twenty::Project"

  def status=(v)
    super(v.to_sym)
  end

  def status
    super.to_s
  end
end
