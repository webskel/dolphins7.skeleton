# frozen_string_literal: true

module Twenty
  require "webrick"
  require "active_record"
  require_relative "twenty-backend/servlet"
  require_relative "twenty-backend/migration"
  require_relative "twenty-backend/model"
end
